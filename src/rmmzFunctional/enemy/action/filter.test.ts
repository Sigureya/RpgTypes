import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import {
  ENEMY_ACTION_CONDITION_TURN,
  type Enemy_Action,
  type Trait,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Party, Rmmz_Switches } from "@RpgTypes/rmmzRuntime";
import { enemyActionMeetsCondition } from "./filter";
import type { Rmmz_EnemyActionConditionType } from "./types";

type FakeParty = Pick<Rmmz_Party, "highestLevel">;

interface EnemyArg {
  hpRate: number;
  mpRate: number;
  turnCount: number;

  affectedStates: number[];
  traits: Trait[];
}

const VALID_SWITCH_ID = 233;

const createMockedSwitches = (): MockedObject<Rmmz_Switches> => {
  return {
    setValue: vi.fn().mockThrow(new Error("setValue should not be called")),
    value: vi.fn((switchId: number) => switchId === VALID_SWITCH_ID),
  };
};

const createMockedParty = (highestLevel: number): MockedObject<FakeParty> => {
  return {
    highestLevel: vi.fn(() => highestLevel),
  };
};

const createMockedEnemy = ({
  hpRate,
  mpRate,
  turnCount,
  affectedStates,
  traits,
}: EnemyArg): MockedObject<Rmmz_EnemyActionConditionType> => {
  const stateSet = new Set<number>(affectedStates);
  return {
    turnCount: vi.fn(() => turnCount),
    hpRate: vi.fn(() => hpRate),
    mpRate: vi.fn(() => mpRate),
    allTraits: vi.fn(() => traits),
    mp: 0,
    tp: 0,
    isStateAffected: vi.fn((stateId) => stateSet.has(stateId)),
  };
};

const createTestContext = (
  enemyArg: EnemyArg,
  partyLevel: number,
): TestContext => {
  return {
    party: createMockedParty(partyLevel),
    switches: createMockedSwitches(),
    enemy: createMockedEnemy(enemyArg),
  };
};

const expectSwwitchNotCalled = ({ switches }: TestContext) => {
  expect(switches.value).not.toHaveBeenCalled();
  expect(switches.setValue).not.toHaveBeenCalled();
};

interface TestCase {
  name: string;
  action: Enemy_Action;
  expected: boolean;
  func: ((context: TestContext) => void)[];
  arg: {
    partyLevel: number;
    enemy: EnemyArg;
  };
}

interface TestContext {
  party: MockedObject<FakeParty>;
  switches: MockedObject<Rmmz_Switches>;
  enemy: MockedObject<Rmmz_EnemyActionConditionType>;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("戻り値", () => {
      const context = createTestContext(
        testCase.arg.enemy,
        testCase.arg.partyLevel,
      );
      const result = enemyActionMeetsCondition(
        testCase.action,
        context.enemy,
        context.party,
        context.switches,
      );
      expect(result).toBe(testCase.expected);
    });
    test("関数の呼び出し", () => {
      const context = createTestContext(
        testCase.arg.enemy,
        testCase.arg.partyLevel,
      );

      enemyActionMeetsCondition(
        testCase.action,
        context.enemy,
        context.party,
        context.switches,
      );
      expect(context.enemy.allTraits).not.toHaveBeenCalled();
      testCase.func.forEach((f) => f(context));
    });
  });
};

const testCases: TestCase[] = [
  {
    action: {
      conditionType: 0,
      conditionParam1: 1,
      conditionParam2: 0,
      rating: 5,
      skillId: 1,
    },
    name: "条件なし",
    arg: {
      partyLevel: 1,
      enemy: {
        hpRate: 1,
        mpRate: 1,
        turnCount: 1,
        affectedStates: [],
        traits: [],
      },
    },
    expected: true,
    func: [
      expectSwwitchNotCalled,
      ({ party, enemy }) => {
        expect(party.highestLevel).not.toHaveBeenCalled();
        expect(enemy.turnCount).not.toHaveBeenCalled();
        expect(enemy.hpRate).not.toHaveBeenCalled();
        expect(enemy.mpRate).not.toHaveBeenCalled();
        expect(enemy.isStateAffected).not.toHaveBeenCalled();
      },
    ],
  },
  {
    action: {
      conditionType: ENEMY_ACTION_CONDITION_TURN,
      conditionParam1: 1,
      conditionParam2: 0,
      rating: 5,
      skillId: 1,
    },
    name: "ターン条件: 1ターン目",
    arg: {
      partyLevel: 1,
      enemy: {
        hpRate: 1,
        mpRate: 1,
        turnCount: 1,
        affectedStates: [],
        traits: [],
      },
    },
    expected: true,
    func: [
      expectSwwitchNotCalled,
      ({ enemy }) => {
        expect(enemy.turnCount).toHaveBeenCalledOnce();
        expect(enemy.hpRate).not.toHaveBeenCalled();
        expect(enemy.mpRate).not.toHaveBeenCalled();
      },
    ],
  },
  {
    action: {
      conditionType: ENEMY_ACTION_CONDITION_TURN,
      conditionParam1: 12,
      conditionParam2: 0,
      rating: 5,
      skillId: 1,
    },
    name: "ターン条件: 12ターン目",
    arg: {
      partyLevel: 1,
      enemy: {
        hpRate: 1,
        mpRate: 1,
        turnCount: 12,
        affectedStates: [],
        traits: [],
      },
    },
    expected: true,
    func: [
      expectSwwitchNotCalled,
      ({ enemy }) => {
        expect(enemy.turnCount).toHaveBeenCalledOnce();
        expect(enemy.hpRate).not.toHaveBeenCalled();
        expect(enemy.mpRate).not.toHaveBeenCalled();
      },
    ],
  },
];

testCases.forEach(runTestCase);
