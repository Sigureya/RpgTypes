import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Enemy_Action, Trait } from "@RpgTypes/rmmz/rpg";
import {
  ENEMY_ACTION_CONDITION_PARTY_LEVEL,
  ENEMY_ACTION_CONDITION_TURN,
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

const expectPartyNotCalled = ({ party }: TestContext) => {
  expect(party.highestLevel).not.toHaveBeenCalled();
};

interface TestCase {
  name: string;
  actionTrue: Enemy_Action[];
  actionFalse: Enemy_Action[];
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

const actionText = (action: Enemy_Action): string => {
  return `skillId: ${action.skillId}`;
};

const xxxxx = (
  expected: boolean,
  arg: EnemyArg,
  partyLevel: number,
  action: Enemy_Action,
  func: ((context: TestContext) => void)[],
): void => {
  describe(actionText(action), () => {
    test("戻り値", () => {
      const context = createTestContext(arg, partyLevel);
      const result = enemyActionMeetsCondition(
        action,
        context.enemy,
        context.party,
        context.switches,
      );
      expect(result).toBe(expected);
    });
    test("関数の呼び出し", () => {
      const context = createTestContext(arg, partyLevel);
      enemyActionMeetsCondition(
        action,
        context.enemy,
        context.party,
        context.switches,
      );
      expect(context.enemy.allTraits).not.toHaveBeenCalled();
      func.forEach((f) => f(context));
    });
  });
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    testCase.actionTrue.forEach((action) => {
      xxxxx(
        true,
        testCase.arg.enemy,
        testCase.arg.partyLevel,
        action,
        testCase.func,
      );
    });
    testCase.actionFalse.forEach((action) => {
      xxxxx(
        false,
        testCase.arg.enemy,
        testCase.arg.partyLevel,
        action,
        testCase.func,
      );
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "条件なし",
    actionTrue: [
      {
        conditionType: 0,
        conditionParam1: 0,
        conditionParam2: 0,
        rating: 5,
        skillId: 1,
      },
    ],
    actionFalse: [],
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
    func: [
      expectSwwitchNotCalled,
      expectPartyNotCalled,
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
    name: "ターン条件: 6ターン目",
    actionTrue: [
      {
        conditionType: ENEMY_ACTION_CONDITION_TURN,
        conditionParam1: 6,
        conditionParam2: 0,
        rating: 5,
        skillId: 113,
      },
      {
        conditionType: ENEMY_ACTION_CONDITION_TURN,
        conditionParam1: 0,
        conditionParam2: 3,
        rating: 5,
        skillId: 211,
      },
      {
        conditionType: ENEMY_ACTION_CONDITION_TURN,
        conditionParam1: 0,
        conditionParam2: 2,
        rating: 5,
        skillId: 231,
      },
      {
        conditionType: ENEMY_ACTION_CONDITION_TURN,
        conditionParam1: 1,
        conditionParam2: 5,
        rating: 5,
        skillId: 233,
      },
    ],
    actionFalse: [
      {
        conditionType: ENEMY_ACTION_CONDITION_TURN,
        conditionParam1: 5,
        conditionParam2: 0,
        rating: 5,
        skillId: 185,
      },
      {
        conditionType: ENEMY_ACTION_CONDITION_TURN,
        conditionParam1: 0,
        conditionParam2: 4,
        rating: 5,
        skillId: 251,
      },
    ],
    arg: {
      partyLevel: 1,
      enemy: {
        hpRate: 1,
        mpRate: 1,
        turnCount: 6,
        affectedStates: [],
        traits: [],
      },
    },
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
    name: "party level",
    arg: {
      partyLevel: 5,
      enemy: {
        hpRate: 1,
        mpRate: 1,
        turnCount: 1,
        affectedStates: [],
        traits: [],
      },
    },
    actionTrue: [
      {
        conditionType: ENEMY_ACTION_CONDITION_PARTY_LEVEL,
        conditionParam1: 3,
        conditionParam2: 0,
        rating: 5,
        skillId: 201,
      },
      {
        conditionType: ENEMY_ACTION_CONDITION_PARTY_LEVEL,
        conditionParam1: 4,
        conditionParam2: 0,
        rating: 5,
        skillId: 233,
      },
      {
        conditionType: ENEMY_ACTION_CONDITION_PARTY_LEVEL,
        conditionParam1: 5,
        conditionParam2: 0,
        rating: 5,
        skillId: 209,
      },
    ],
    actionFalse: [
      {
        conditionType: ENEMY_ACTION_CONDITION_PARTY_LEVEL,
        conditionParam1: 6,
        conditionParam2: 0,
        rating: 5,
        skillId: 183,
      },
      {
        conditionType: ENEMY_ACTION_CONDITION_PARTY_LEVEL,
        conditionParam1: 7,
        conditionParam2: 0,
        rating: 5,
        skillId: 351,
      },
    ],
    func: [
      ({ party }) => {
        expect(party.highestLevel).toHaveBeenCalledOnce();
      },
    ],
  },
];

testCases.forEach(runTestCase);
