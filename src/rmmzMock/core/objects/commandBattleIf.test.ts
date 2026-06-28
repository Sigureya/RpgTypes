import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { AudioFileParams, Data_NamedItem } from "@RpgTypes/libs";
import {
  BATTLE_PROCESSING,
  BATTLE_PROCESSING_IF_ESCAPE,
  BATTLE_PROCESSING_IF_WIN,
  PLAY_BGM,
  PLAY_BGS,
} from "@RpgTypes/libs/eventCommand";
import type {
  Command_BattleProcessing,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandBattleProcessingBlockEnd,
  makeCommandBattleProcessingDirect,
  makeCommandBattleProcessingEncount,
  makeCommandBattleProcessingIfEscape,
  makeCommandBattleProcessingIfWin,
  makeCommandBattleProcessingVariable,
  makeCommandPlayBGM,
  makeCommandPlayBGS,
} from "@RpgTypes/rmmz/eventCommand";
import { makeCommandNoOperation } from "@RpgTypes/rmmz/eventCommand/commands/indentBlock";
import type {
  Rmmz_AudioManager,
  Rmmz_Party,
  Rmmz_PlayerCharactor,
} from "@RpgTypes/rmmzRuntime";
import type { Rmmz_BattleManager } from "@RpgTypes/rmmzRuntime/managers/battle";
import type { BattleResult } from "@RpgTypes/rmmzRuntime/managers/battle/interface";
import {
  BATTLE_RESULT_LOSE,
  BATTLE_RESULT_WIN,
} from "@RpgTypes/rmmzRuntime/managers/battle/interface";
import type { Rmmz_SceneManager } from "@RpgTypes/rmmzRuntime/sceneManager";
import type { FakeMap, FakeVariables } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

type FakeParty = Pick<Rmmz_Party, "inBattle">;

type FakePlayer = Pick<
  Rmmz_PlayerCharactor,
  "makeEncounterTroopId" | "makeEncounterCount"
>;

type FakeBattleManaeger = Pick<
  Rmmz_BattleManager,
  "setup" | "setEventCallback"
>;

type FakeSceneManager = Pick<
  Rmmz_SceneManager,
  "goto" | "push" | "isSceneChanging"
>;

type FakeAudioManager = Pick<
  Rmmz_AudioManager,
  "playBgm" | "playBgs" | "playSe"
>;
const MOCK_AUDIO: AudioFileParams = {
  name: "audio",
  volume: 100,
  pitch: 100,
  pan: 0,
};

const MOCK_SCENE_BATTLE = "Scene_Battle";

const MOCK_VALIABLE_VALUE = 6 as const;
const MCOK_TROOP_ID = 5 as const;

const mockTroops = [
  null,
  { id: 1, name: "troop A" },
  { id: 2, name: "troop B" },
  { id: 3, name: "troop C" },
  { id: 4, name: "troop D" },
  { id: 5, name: "troop E" },
  { id: 6, name: "troop F" },
] as const satisfies (Data_NamedItem | null)[];

const createMockParty = (isInBattle: boolean): MockedObject<FakeParty> => ({
  inBattle: vi.fn().mockReturnValue(isInBattle),
});

const createMockPlayer = (): MockedObject<FakePlayer> => ({
  makeEncounterTroopId: vi.fn().mockReturnValue(MCOK_TROOP_ID),
  makeEncounterCount: vi.fn(),
});

const createMockedVariable = (): MockedObject<FakeVariables> => ({
  value: vi.fn().mockReturnValue(MOCK_VALIABLE_VALUE),
});

const createMockBattleManager = (
  result: BattleResult,
): MockedObject<FakeBattleManaeger> => {
  const mockBattleManager: MockedObject<FakeBattleManaeger> = {
    setup: vi.fn(),
    setEventCallback: vi.fn((callback) => callback(result)),
  };
  return mockBattleManager;
};

const createMockSceneManager = (): MockedObject<FakeSceneManager> => ({
  goto: vi.fn(),
  push: vi.fn(),
  isSceneChanging: vi.fn().mockReturnValue(false),
});

const createMockAudioManager = (): MockedObject<FakeAudioManager> => ({
  playBgm: vi.fn(),
  playBgs: vi.fn(),
  playSe: vi.fn(),
});

const makeMockMap = (): FakeMap => ({
  mapId: () => 22,
});

const createMockObjects = (inBattle: boolean, result: BattleResult) => {
  return {
    party: createMockParty(inBattle),
    player: createMockPlayer(),
    variables: createMockedVariable(),
    battleManager: createMockBattleManager(result),
    sceneManager: createMockSceneManager(),
    map: makeMockMap(),
    audioManager: createMockAudioManager(),
  };
};

const stubGlobals = (mocks: ReturnType<typeof createMockObjects>) => {
  vi.stubGlobal("$gameMap", mocks.map);
  vi.stubGlobal("$gameParty", mocks.party);
  vi.stubGlobal("$gamePlayer", mocks.player);
  vi.stubGlobal("$gameVariables", mocks.variables);
  vi.stubGlobal("AudioManager", mocks.audioManager);
  vi.stubGlobal("BattleManager", mocks.battleManager);
  vi.stubGlobal("SceneManager", mocks.sceneManager);
  vi.stubGlobal("Scene_Battle", MOCK_SCENE_BATTLE);
  vi.stubGlobal("$dataTroops", mockTroops);
};

const createInterpreter = (command: EventCommand[]) => {
  const interpreter = new Game_Interpreter();
  vi.spyOn(interpreter, "checkFreeze").mockReturnValue(false);
  interpreter.setup(command, 0);
  return interpreter;
};

describe("commandBattleProcessing", () => {
  const command: EventCommand[] = [
    { code: BATTLE_PROCESSING, indent: 0, parameters: [0, 1, false, false] },
    { code: BATTLE_PROCESSING_IF_WIN, indent: 0, parameters: [] },
    { code: PLAY_BGM, indent: 1, parameters: [MOCK_AUDIO] },
    { code: 0, indent: 1, parameters: [] },
    { code: BATTLE_PROCESSING_IF_ESCAPE, indent: 0, parameters: [] },
    { code: PLAY_BGS, indent: 1, parameters: [MOCK_AUDIO] },
    { code: 0, indent: 1, parameters: [] },
    { code: 604, indent: 0, parameters: [] },
  ];
  test("makeCommands", () => {
    const maked: EventCommand[] = [
      makeCommandBattleProcessingDirect(
        { troopId: 1, canEscape: false, canLose: false },
        0,
      ),
      makeCommandBattleProcessingIfWin(0),
      makeCommandPlayBGM(MOCK_AUDIO, 1),
      makeCommandNoOperation(1),
      makeCommandBattleProcessingIfEscape(0),
      makeCommandPlayBGS(MOCK_AUDIO, 1),
      makeCommandNoOperation(1),
      makeCommandBattleProcessingBlockEnd(0),
    ];
    expect(maked).toEqual(command);
  });
  test("if battle win", () => {
    const mocks = createMockObjects(false, BATTLE_RESULT_WIN);
    stubGlobals(mocks);
    const interpreter = createInterpreter(command);
    interpreter.update();
    expect(mocks.battleManager.setup).toHaveBeenCalledWith(1, false, false);
    expect(mocks.battleManager.setEventCallback).toHaveBeenCalledOnce();
    expect(mocks.sceneManager.push).toHaveBeenCalledWith(MOCK_SCENE_BATTLE);
    expect(mocks.audioManager.playBgm).toHaveBeenCalledWith(MOCK_AUDIO);
    expect(mocks.audioManager.playBgs).not.toHaveBeenCalled();
    expect(mocks.audioManager.playSe).not.toHaveBeenCalled();
  });
  test("if battle lose", () => {
    const mocks = createMockObjects(false, BATTLE_RESULT_LOSE);
    stubGlobals(mocks);
    const interpreter = createInterpreter(command);
    interpreter.update();
    expect(mocks.battleManager.setup).toHaveBeenCalledWith(1, false, false);
    expect(mocks.battleManager.setEventCallback).toHaveBeenCalledOnce();
    expect(mocks.sceneManager.push).toHaveBeenCalledWith(MOCK_SCENE_BATTLE);
    expect(mocks.audioManager.playBgm).not.toHaveBeenCalled();
    expect(mocks.audioManager.playSe).not.toHaveBeenCalled();
  });
});
