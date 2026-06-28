import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { AudioFileParams, Data_NamedItem } from "@RpgTypes/libs";
import {
  BATTLE_PROCESSING,
  BATTLE_PROCESSING_IF_WIN,
  PLAY_BGM,
} from "@RpgTypes/libs/eventCommand";
import type {
  Command_BattleProcessing,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandBattleProcessingDirect,
  makeCommandBattleProcessingEncount,
  makeCommandBattleProcessingVariable,
  makeCommandPlayBGM,
} from "@RpgTypes/rmmz/eventCommand";
import { makeCommandBattleProcessingIfWin } from "@RpgTypes/rmmz/eventCommand/commands/battle/battleProcessing/make";
import type {
  Rmmz_AudioManager,
  Rmmz_Party,
  Rmmz_PlayerCharactor,
} from "@RpgTypes/rmmzRuntime";
import type { Rmmz_BattleManager } from "@RpgTypes/rmmzRuntime/managers/battle";
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

type FakeSceneManager = Pick<Rmmz_SceneManager, "goto" | "push">;
type FakeAudioManager = Pick<
  Rmmz_AudioManager,
  "playBgm" | "playBgs" | "playSe"
>;
const MOCK_BGM: AudioFileParams = {
  name: "bgm",
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

const createMockBattleManager = (): MockedObject<FakeBattleManaeger> => ({
  setup: vi.fn(),
  setEventCallback: vi.fn(),
});

const createMockSceneManager = (): MockedObject<FakeSceneManager> => ({
  goto: vi.fn(),
  push: vi.fn(),
});

const createMockAudioManager = (): MockedObject<FakeAudioManager> => ({
  playBgm: vi.fn(),
  playBgs: vi.fn(),
  playSe: vi.fn(),
});

const makeMockMap = (): FakeMap => ({
  mapId: () => 22,
});

const createMockObjects = (inBattle: boolean) => {
  return {
    party: createMockParty(inBattle),
    player: createMockPlayer(),
    variables: createMockedVariable(),
    battleManager: createMockBattleManager(),
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

describe("", () => {
  const command: EventCommand[] = [
    {
      code: BATTLE_PROCESSING,
      indent: 0,
      parameters: [0, 1, false, false],
    },
    {
      code: BATTLE_PROCESSING_IF_WIN,
      indent: 0,
      parameters: [],
    },
    {
      code: PLAY_BGM,
      indent: 1,
      parameters: [MOCK_BGM],
    },
  ];
  test("", () => {
    const maked: EventCommand[] = [
      makeCommandBattleProcessingDirect(
        { troopId: 1, canEscape: false, canLose: false },
        0,
      ),
      makeCommandBattleProcessingIfWin(0),
      makeCommandPlayBGM(MOCK_BGM, 1),
    ];
    expect(maked).toEqual(command);
  });
});
