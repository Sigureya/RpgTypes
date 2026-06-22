import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  BattleEventPage,
  Troop_EventConditions,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_ActorsReadonly, Rmmz_Troop } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_BattleManager_State } from "@RpgTypes/rmmzRuntime/managers/battle/interface";
import type { Rmmz_BattlerBase_Values } from "@RpgTypes/rmmzRuntime/objects/core/battle/battler/base/values";
import type { Rmmz_Switches } from "@RpgTypes/rmmzRuntime/objects/core/variables";
import type { TroopMM } from "@RpgTypes/rpgNext/troop";
import { meetsBattleEventConditions } from "@RpgTypes/rpgNext/troop";
import type { FakeMap } from "./fakes/types";
import { Game_Troop } from "./rmmz_objects";

interface MockObjects {
  battleManager: MockedObject<Rmmz_BattleManager_State>;
  actors: MockedObject<Rmmz_ActorsReadonly<Rmmz_BattlerBase_Values>>;
  switches: MockedObject<Rmmz_Switches>;
  globalTroop: MockedObject<TroopMM>;
}

interface FakeBattler {
  hpRate(): number;
}

interface Arg {
  actor: FakeBattler | null;
  enemies: FakeBattler[];
  isTurnEnd: boolean;
  turnCount?: number;
}

const createMockBattler = (
  hpRate: number,
): MockedObject<Rmmz_BattlerBase_Values> => {
  return {
    hpRate: vi.fn().mockReturnValue(hpRate),
    mpRate: vi.fn().mockThrow(new Error("mpRate not implemented")),
    tpRate: vi.fn().mockThrow(new Error("tpRate not implemented")),
  };
};

const TRUE_SWITCH_ID = 7;

const createCondition = (
  args: Partial<Troop_EventConditions>,
): BattleEventPage => {
  return {
    span: 0,
    list: [],
    conditions: {
      actorValid: false,
      actorHp: 0,
      actorId: 0,
      enemyHp: 0,
      enemyIndex: 0,
      enemyValid: false,
      switchValid: false,
      switchId: 0,
      turnEnding: false,
      turnValid: false,
      turnA: 0,
      turnB: 0,
      ...args,
    },
  };
};

const createMockObjects = ({
  actor,
  enemies,
  isTurnEnd,
  turnCount,
}: Arg): MockObjects => {
  return {
    battleManager: {
      canEscape: vi.fn().mockReturnValue(false),
      isTurnEnd: vi.fn().mockReturnValue(isTurnEnd),
      isActionForced: vi.fn().mockReturnValue(false),
    },
    actors: {
      actor: vi.fn().mockReturnValue(actor),
    },
    switches: {
      value: vi.fn((id: number): boolean => id === TRUE_SWITCH_ID),
      setValue: vi.fn(),
    },
    globalTroop: {
      members: vi.fn().mockReturnValue(enemies),
      turnCount: vi.fn().mockReturnValue(turnCount ?? 0),
    },
  };
};

const stubGlobalObjects = (mocks: MockObjects) => {
  vi.stubGlobal("$gameSwitches", mocks.switches);
  vi.stubGlobal("$gameActors", mocks.actors);
  vi.stubGlobal("$gameTroop", mocks.globalTroop);
  vi.stubGlobal("BattleManager", mocks.battleManager);
};

vi.stubGlobal("$gameMap", {
  mapId: () => 0,
} satisfies FakeMap);

interface TestCase {
  name: string;
  condition: Partial<Troop_EventConditions>;
  expected: boolean;
  createArg: () => Arg;
  adtional: (mocks: MockObjects, arg: Arg) => void;
}

const runTest = (testCase: TestCase) => {
  describe(testCase.name, () => {
    const condition = createCondition(testCase.condition);
    test("original", () => {
      const arg = testCase.createArg();
      const mocks = createMockObjects(arg);
      stubGlobalObjects(mocks);
      const troop: Rmmz_Troop = new Game_Troop();
      const result = troop.meetsConditions(condition);
      expect(result).toBe(testCase.expected);
      testCase.adtional(mocks, arg);
    });
    test("new", () => {
      const arg = testCase.createArg();
      const mocks = createMockObjects(arg);
      const result: boolean = meetsBattleEventConditions(
        mocks.globalTroop,
        condition.conditions,
        mocks.battleManager,
        mocks.actors,
        mocks.switches,
      );
      expect(result).toBe(testCase.expected);
      testCase.adtional(mocks, arg);
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "empty conditions",
    expected: false,
    condition: {},
    createArg: () => ({
      actor: null,
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: (mocks) => {
      expect(mocks.actors.actor).not.toHaveBeenCalled();
      expect(mocks.globalTroop.members).not.toHaveBeenCalled();
      expect(mocks.switches.value).not.toHaveBeenCalled();
      expect(mocks.battleManager.isTurnEnd).not.toHaveBeenCalled();
    },
  },
  {
    name: "actor not found",
    expected: false,
    condition: {
      actorHp: 50,
      actorId: 4,
      actorValid: true,
    },
    createArg: () => ({
      actor: null,
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: (mocks) => {
      expect(mocks.actors.actor).toHaveBeenCalledWith(4);
    },
  },
  {
    name: "actor hp below threshold",
    expected: true,
    condition: {
      actorHp: 50,
      actorId: 12,
      actorValid: true,
    },
    createArg: () => ({
      actor: createMockBattler(0.4),
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: (mocks, arg) => {
      expect(mocks.actors.actor).toHaveBeenCalledWith(12);
      expect(arg.actor?.hpRate()).toBe(0.4);
    },
  },
  {
    name: "actor hp above threshold",
    expected: false,
    condition: {
      actorHp: 50,
      actorId: 2,
      actorValid: true,
    },
    createArg: () => ({
      actor: createMockBattler(0.6),
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: (mock) => {
      expect(mock.actors.actor).toHaveBeenCalledWith(2);
    },
  },
  {
    name: "actor hp above threshold",
    expected: false,
    condition: {
      actorHp: 50,
      actorId: 4,
      actorValid: true,
    },
    createArg: () => ({
      actor: createMockBattler(0.6),
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: () => {},
  },
  {
    name: "actor hp equal threshold",
    expected: true,
    condition: {
      actorHp: 50,
      actorId: 4,
      actorValid: true,
    },
    createArg: () => ({
      actor: createMockBattler(0.5),
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: () => {},
  },
  {
    name: "enemy not found",
    expected: false,
    condition: {
      enemyValid: true,
      enemyIndex: 0,
      enemyHp: 50,
    },
    createArg: () => ({
      actor: null,
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: (mocks) => {
      expect(mocks.globalTroop.members).toHaveBeenCalled();
    },
  },
  {
    name: "enemy hp below threshold",
    expected: true,
    condition: {
      enemyValid: true,
      enemyIndex: 0,
      enemyHp: 50,
    },
    createArg: () => ({
      actor: null,
      enemies: [createMockBattler(0.4)],
      isTurnEnd: false,
    }),
    adtional: () => {},
  },
  {
    name: "enemy hp above threshold",
    expected: false,
    condition: {
      enemyValid: true,
      enemyIndex: 0,
      enemyHp: 50,
    },
    createArg: () => ({
      actor: null,
      enemies: [createMockBattler(0.6)],
      isTurnEnd: false,
    }),
    adtional: () => {},
  },
  {
    name: "enemy hp equal threshold",
    expected: true,
    condition: {
      enemyValid: true,
      enemyIndex: 0,
      enemyHp: 50,
    },
    createArg: () => ({
      actor: null,
      enemies: [createMockBattler(0.5)],
      isTurnEnd: false,
    }),
    adtional: () => {},
  },
  {
    name: "switch on",
    expected: true,
    condition: {
      switchValid: true,
      switchId: TRUE_SWITCH_ID,
    },
    createArg: () => ({
      actor: null,
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: (mocks) => {
      expect(mocks.switches.value).toHaveBeenCalledWith(TRUE_SWITCH_ID);
    },
  },
  {
    name: "switch off",
    expected: false,
    condition: {
      switchValid: true,
      switchId: 999,
    },
    createArg: () => ({
      actor: null,
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: (mocks) => {
      expect(mocks.switches.value).toHaveBeenCalledWith(999);
    },
  },
  {
    name: "turnEnding true",
    expected: true,
    condition: {
      turnEnding: true,
    },
    createArg: () => ({
      actor: null,
      enemies: [],
      isTurnEnd: true,
    }),
    adtional: (mocks) => {
      expect(mocks.battleManager.isTurnEnd).toHaveBeenCalled();
    },
  },
  {
    name: "turnEnding false",
    expected: false,
    condition: {
      turnEnding: true,
    },
    createArg: () => ({
      actor: null,
      enemies: [],
      isTurnEnd: false,
    }),
    adtional: (mocks) => {
      expect(mocks.battleManager.isTurnEnd).toHaveBeenCalled();
    },
  },
];
describe("Game_Troop - page", () => {
  testCases.forEach((testCase) => runTest(testCase));
});

describe("Game_Troop - pageOld", () => {
  describe("turn conditions", () => {
    test("turnEnding - true", () => {
      const condition = createCondition({
        turnEnding: true,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [],
        isTurnEnd: true,
      });

      stubGlobalObjects(mocks);

      const troop: Rmmz_Troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(true);
      expect(mocks.battleManager.isTurnEnd).toHaveBeenCalled();
    });

    test("turnEnding - false", () => {
      const condition = createCondition({
        turnEnding: true,
      });

      const mocks = createMockObjects({
        actor: null,
        enemies: [],
        isTurnEnd: false,
      });

      stubGlobalObjects(mocks);

      const troop: Rmmz_Troop = new Game_Troop();

      expect(troop.meetsConditions(condition)).toBe(false);
      expect(mocks.battleManager.isTurnEnd).toHaveBeenCalled();
    });

    test("turnValid exact match", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 3,
        turnB: 0,
      });

      const troop = new Game_Troop();
      troop._turnCount = 3;

      expect(troop.meetsConditions(condition)).toBe(true);
    });

    test("turnValid exact mismatch", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 3,
        turnB: 0,
      });

      const troop = new Game_Troop();
      troop._turnCount = 4;

      expect(troop.meetsConditions(condition)).toBe(false);
    });

    test("turnValid periodic match", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 2,
        turnB: 3,
      });

      const troop = new Game_Troop();
      troop._turnCount = 5;

      expect(troop.meetsConditions(condition)).toBe(true);
    });

    test("turnValid periodic mismatch", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 2,
        turnB: 3,
      });

      const troop = new Game_Troop();
      troop._turnCount = 4;

      expect(troop.meetsConditions(condition)).toBe(false);
    });

    test("turnValid fails when turn count is less than 1", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 1,
        turnB: 2,
      });

      const troop = new Game_Troop();
      troop._turnCount = 0;

      expect(troop.meetsConditions(condition)).toBe(false);
    });

    test("turnValid fails when turn count is less than start turn", () => {
      const condition = createCondition({
        turnValid: true,
        turnA: 5,
        turnB: 2,
      });

      const troop = new Game_Troop();
      troop._turnCount = 4;

      expect(troop.meetsConditions(condition)).toBe(false);
    });
  });
});
