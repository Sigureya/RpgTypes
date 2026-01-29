import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Data_NamedItem } from "@RpgTypes/libs";
import type { Command_BattleProcessing } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandBattleProcessingDirect,
  makeCommandBattleProcessingEncount,
  makeCommandBattleProcessingVariable,
} from "@RpgTypes/rmmz/eventCommand";
import { BATTLE_PROCESSING } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Party, Rmmz_PlayerCharactor } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_BattleManager } from "@RpgTypes/rmmzRuntime/managers/battle";
import type { Rmmz_SceneManager } from "@RpgTypes/rmmzRuntime/managers/sceneManager";
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
  };
};

const stubGlobals = (mocks: ReturnType<typeof createMockObjects>) => {
  vi.stubGlobal("$gameMap", mocks.map);
  vi.stubGlobal("$gameParty", mocks.party);
  vi.stubGlobal("$gamePlayer", mocks.player);
  vi.stubGlobal("$gameVariables", mocks.variables);
  vi.stubGlobal("BattleManager", mocks.battleManager);
  vi.stubGlobal("SceneManager", mocks.sceneManager);
  vi.stubGlobal("Scene_Battle", MOCK_SCENE_BATTLE);
  vi.stubGlobal("$dataTroops", mockTroops);
};

const testExecuteInBattle = (command: Command_BattleProcessing) => {
  const mocks = createMockObjects(true);
  stubGlobals(mocks);
  const interpreter = new Game_Interpreter();
  interpreter.setup([command], 0);
  interpreter.executeCommand();
  expect(mocks.party.inBattle).toHaveBeenCalledOnce();
  expect(mocks.variables.value).not.toHaveBeenCalled();
  expect(mocks.player.makeEncounterTroopId).not.toHaveBeenCalled();
  expect(mocks.sceneManager.push).not.toHaveBeenCalled();
  expect(mocks.sceneManager.goto).not.toHaveBeenCalled();
  expect(mocks.battleManager.setup).not.toHaveBeenCalled();
  expect(mocks.battleManager.setEventCallback).not.toHaveBeenCalled();
};

describe("command 301 (Battle Start)", () => {
  describe("Direct troop encounter", () => {
    const command: Command_BattleProcessing = {
      code: 301,
      indent: 0,
      parameters: [0, 5, false, true],
    };
    test("make", () => {
      const result = makeCommandBattleProcessingDirect({
        troopId: 5,
        canEscape: false,
        canLose: true,
      });
      expect(result).toEqual(command);
    });
    test("execute when in battle", () => {
      testExecuteInBattle(command);
    });
    test("execute when not in battle", () => {
      const mocks = createMockObjects(false);
      stubGlobals(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([command], 0);
      interpreter.executeCommand();
      expect(mocks.battleManager.setup).toHaveBeenCalledWith(5, false, true);
      expect(mocks.battleManager.setup).toHaveBeenCalledOnce();
      expect(mocks.party.inBattle).toHaveBeenCalledOnce();
      expect(mocks.variables.value).not.toHaveBeenCalled();
      expect(mocks.player.makeEncounterTroopId).not.toHaveBeenCalled();
      expect(mocks.sceneManager.push).toHaveBeenCalledOnce();
      expect(mocks.sceneManager.push).toHaveBeenCalledWith(MOCK_SCENE_BATTLE);
      expect(mocks.battleManager.setEventCallback).toHaveBeenCalledOnce();
    });
  });
  describe("Direct troop encounter with troop is null", () => {
    const command: Command_BattleProcessing = {
      code: BATTLE_PROCESSING,
      indent: 0,
      parameters: [0, 0, true, true],
    };
    test("make", () => {
      const result = makeCommandBattleProcessingDirect({
        troopId: 0,
        canEscape: true,
        canLose: true,
      });
      expect(result).toEqual(command);
    });
    test("execute when in battle", () => {
      testExecuteInBattle(command);
    });
    test("execute when not in battle", () => {
      const mocks = createMockObjects(false);
      stubGlobals(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([command], 0);
      interpreter.executeCommand();
      expect(mocks.battleManager.setup).not.toHaveBeenCalled();
      expect(mocks.battleManager.setEventCallback).not.toHaveBeenCalled();

      expect(mocks.party.inBattle).toHaveBeenCalledOnce();
      expect(mocks.variables.value).not.toHaveBeenCalled();
      expect(mocks.player.makeEncounterTroopId).not.toHaveBeenCalled();
      expect(mocks.sceneManager.push).not.toHaveBeenCalled();
      expect(mocks.sceneManager.goto).not.toHaveBeenCalled();
    });
  });
  describe("Random troop encounter", () => {
    const command: Command_BattleProcessing = {
      code: 301,
      indent: 0,
      parameters: [2, 0, true, false],
    };
    test("make", () => {
      const result = makeCommandBattleProcessingEncount({
        canEscape: true,
        canLose: false,
      });
      expect(result).toEqual(command);
    });
    test("execute when in battle", () => {
      testExecuteInBattle(command);
    });
    test("execute when not in battle", () => {
      const mocks = createMockObjects(false);
      stubGlobals(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([command], 0);
      interpreter.executeCommand();
      expect(mocks.party.inBattle).toHaveBeenCalledOnce();
      expect(mocks.variables.value).not.toHaveBeenCalled();
      expect(mocks.player.makeEncounterTroopId).toHaveBeenCalledOnce();
      expect(mocks.sceneManager.push).toHaveBeenCalledOnce();
      expect(mocks.sceneManager.push).toHaveBeenCalledWith(MOCK_SCENE_BATTLE);
      expect(mocks.battleManager.setup).toHaveBeenCalledOnce();
      expect(mocks.battleManager.setup).toHaveBeenCalledWith(
        MCOK_TROOP_ID,
        true,
        false,
      );
      expect(mocks.battleManager.setEventCallback).toHaveBeenCalledOnce();
    });
  });
  describe("Variable troop encounter", () => {
    const command: Command_BattleProcessing = {
      code: 301,
      indent: 0,
      parameters: [1, 6, false, false],
    };
    test("make", () => {
      const result = makeCommandBattleProcessingVariable({
        variableId: 6,
        canEscape: false,
        canLose: false,
      });
      expect(result).toEqual(command);
    });
    test("execute when in battle", () => {
      testExecuteInBattle(command);
    });
    test("execute when not in battle", () => {
      const mocks = createMockObjects(false);
      stubGlobals(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([command], 0);
      interpreter.executeCommand();
      expect(mocks.party.inBattle).toHaveBeenCalledOnce();
      expect(mocks.variables.value).toHaveBeenCalledOnce();
      expect(mocks.player.makeEncounterTroopId).not.toHaveBeenCalled();
      expect(mocks.sceneManager.push).toHaveBeenCalledOnce();
      expect(mocks.sceneManager.push).toHaveBeenCalledWith(MOCK_SCENE_BATTLE);
      expect(mocks.battleManager.setup).toHaveBeenCalledOnce();
      expect(mocks.battleManager.setup).toHaveBeenCalledWith(
        MOCK_VALIABLE_VALUE,
        false,
        false,
      );
      expect(mocks.battleManager.setEventCallback).toHaveBeenCalledOnce();
    });
  });
});
