import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";
import type { Enemy_Action } from "@RpgTypes/rmmz/rpg";
import {
  makeEnemyActionHpRate,
  makeEnemyActionMpRate,
  makeEnemyActionPartyLevel,
  makeEnemyActionState,
  makeEnemyActionSwitch,
  makeEnemyActionTurn,
  makeEnemyData,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_EnemyActionConditionType } from "@RpgTypes/rmmzFunctional";
import { enemyActionMeetsCondition } from "@RpgTypes/rmmzFunctional";
import type { Rmmz_Party, Rmmz_Switches } from "@RpgTypes/rmmzRuntime";
import { Game_Enemy } from "./rmmz_objects";

type FakeParty = Pick<Rmmz_Party, "highestLevel">;
const MOCK_HIGHEST_LEVEL = 44;

const MOCK_HP_RATE = 0.5;
const MOCK_MP_RATE = 0.5;
const MOCK_TURN_COUNT = 1;

const MOCK_TRUELY_SWITCH_ID = 23;

const MOCK_ENEMY_DATA = makeEnemyData({
  id: 1,
  name: "test",
  battlerName: "test",
});
const createMockedParty = (): MockedObject<FakeParty> => {
  return {
    highestLevel: vi.fn(() => MOCK_HIGHEST_LEVEL),
  };
};

const createMockedSwitches = (): MockedObject<Rmmz_Switches> => {
  return {
    value: vi.fn((id) => id === MOCK_TRUELY_SWITCH_ID),
    setValue: vi
      .fn()
      .mockThrow(new Error("setValue should not be called in this test")),
  };
};

const createMockedEnemy = (): MockedObject<Rmmz_EnemyActionConditionType> => {
  return {
    mp: 0,
    tp: 0,
    turnCount: vi.fn(() => MOCK_TURN_COUNT),
    hpRate: vi.fn(() => MOCK_HP_RATE),
    mpRate: vi.fn(() => MOCK_MP_RATE),
    isStateAffected: vi.fn((stateId) => stateId === 5),
    allTraits: vi.fn(() => []),
  };
};

const createContext = (): TestContext => {
  return {
    party: createMockedParty(),
    switches: createMockedSwitches(),
    enemy: createMockedEnemy(),
  };
};

const stubGlobal = (context: TestContext) => {
  vi.stubGlobal("$gameParty", context.party);
  vi.stubGlobal("$gameSwitches", context.switches);
};

interface TestContext {
  party: MockedObject<FakeParty>;
  switches: MockedObject<Rmmz_Switches>;
  enemy: MockedObject<Rmmz_EnemyActionConditionType>;
}

interface TestCase {
  action: Enemy_Action;
  expected: boolean;
  callXX: (context: TestContext) => void;
}

// $dataEnemiesを参照しようとするので、無効化しておく
Game_Enemy.prototype.recoverAll = () => {};
Game_Enemy.prototype.enemy = () => MOCK_ENEMY_DATA;

const runTestCase = (testCase: TestCase) => {
  describe("function", () => {
    test("", () => {
      const context = createContext();
      const result = enemyActionMeetsCondition(
        testCase.action,
        context.enemy,
        context.party,
        context.switches,
      );
      expect(result).toBe(testCase.expected);
    });
    test("callXX", () => {
      const context = createContext();
      enemyActionMeetsCondition(
        testCase.action,
        context.enemy,
        context.party,
        context.switches,
      );
      testCase.callXX(context);
    });
  });
  describe("Game_Enemy", () => {
    test("", () => {
      const context = createContext();
      stubGlobal(context);
      const enemy = new Game_Enemy(0, 0, 0);
      vi.spyOn(enemy, "hpRate").mockImplementation(() =>
        context.enemy.hpRate(),
      );
      vi.spyOn(enemy, "mpRate").mockImplementation(() =>
        context.enemy.mpRate(),
      );
      vi.spyOn(enemy, "turnCount").mockImplementation(() =>
        context.enemy.turnCount(),
      );
      vi.spyOn(enemy, "isStateAffected").mockImplementation((stateId) =>
        context.enemy.isStateAffected(stateId),
      );
      vi.spyOn(enemy, "allTraits").mockImplementation(() =>
        context.enemy.allTraits(),
      );
      const result = enemy.meetsCondition(testCase.action);
      expect(result).toBe(testCase.expected);
      testCase.callXX(context);
    });
  });
};

const testCases: TestCase[] = [
  {
    expected: true,
    action: makeEnemyActionTurn({
      skillId: 1,
      rating: 5,
      turnStart: 1,
      turnInterval: 0,
    }),
    callXX: (context) => {
      expect(context.enemy.turnCount).toHaveBeenCalledOnce();
    },
  },
  {
    expected: false,
    action: makeEnemyActionTurn({
      skillId: 1,
      rating: 5,
      turnStart: 2,
      turnInterval: 0,
    }),
    callXX: (context) => {
      expect(context.enemy.turnCount).toHaveBeenCalledOnce();
    },
  },
  {
    expected: true,
    action: makeEnemyActionHpRate({
      skillId: 2,
      rating: 7,
      hpRateA: 0.25,
      hpRateB: 0.5,
    }),
    callXX: (context) => {
      expect(context.enemy.hpRate).toHaveBeenCalled();
    },
  },
  {
    expected: false,
    action: makeEnemyActionHpRate({
      skillId: 2,
      rating: 7,
      hpRateA: 0.8,
      hpRateB: 1,
    }),
    callXX: (context) => {
      expect(context.enemy.hpRate).toHaveBeenCalled();
    },
  },
  {
    expected: true,
    action: makeEnemyActionMpRate({
      skillId: 3,
      rating: 8,
      mpRateA: 0.3,
      mpRateB: 0.5,
    }),
    callXX: (context) => {
      expect(context.enemy.mpRate).toHaveBeenCalled();
    },
  },
  {
    expected: false,
    action: makeEnemyActionMpRate({
      skillId: 3,
      rating: 8,
      mpRateA: 0.7,
      mpRateB: 1,
    }),
    callXX: (context) => {
      expect(context.enemy.mpRate).toHaveBeenCalled();
    },
  },
  {
    expected: true,
    action: makeEnemyActionState({ skillId: 4, rating: 9, stateId: 5 }),
    callXX: (context) => {
      expect(context.enemy.isStateAffected).toHaveBeenCalledOnce();
      expect(context.enemy.isStateAffected).toHaveBeenCalledWith(5);
    },
  },
  {
    expected: false,
    action: makeEnemyActionState({ skillId: 4, rating: 9, stateId: 9 }),
    callXX: (context) => {
      expect(context.enemy.isStateAffected).toHaveBeenCalledOnce();
      expect(context.enemy.isStateAffected).toHaveBeenCalledWith(9);
    },
  },
  {
    expected: true,
    action: makeEnemyActionPartyLevel({
      skillId: 5,
      rating: 6,
      partyLevel: 11,
    }),
    callXX: (context) => {
      expect(context.party.highestLevel).toHaveBeenCalledOnce();
    },
  },
  {
    expected: false,
    action: makeEnemyActionPartyLevel({
      skillId: 5,
      rating: 6,
      partyLevel: 99,
    }),
    callXX: (context) => {
      expect(context.party.highestLevel).toHaveBeenCalledOnce();
    },
  },
  {
    expected: true,
    action: makeEnemyActionSwitch({
      skillId: 6,
      rating: 8,
      switchId: MOCK_TRUELY_SWITCH_ID,
    }),
    callXX: (context) => {
      expect(context.switches.value).toHaveBeenCalledOnce();
      expect(context.switches.value).toHaveBeenCalledWith(
        MOCK_TRUELY_SWITCH_ID,
      );
    },
  },
  {
    expected: false,
    action: makeEnemyActionSwitch({
      skillId: 6,
      rating: 8,
      switchId: 331,
    }),
    callXX: (context) => {
      expect(context.switches.value).toHaveBeenCalledOnce();
      expect(context.switches.value).toHaveBeenCalledWith(331);
    },
  },
];

describe("enemyActionMeetsCondition", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
