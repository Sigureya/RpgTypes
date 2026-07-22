import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  traitAttackElements,
  traitAttackSkillId,
  traitAttackStateRate,
  traitAttackStates,
  traitAttackTimesAdd,
  traitAtttackSpeed,
  TRAIT_ATTACK_ELEMENT,
  TRAIT_ATTACK_SKILL,
  TRAIT_ATTACK_SPEED,
  TRAIT_ATTACK_STATE,
  TRAIT_ATTACK_TIMES,
} from "@RpgTypes/rmmz/rpg";
import { Game_BattlerBase } from "./rmmz_objects";

const createMockedBattlerBase = (traits: Trait[]) => {
  const battlerBase = new Game_BattlerBase();
  vi.spyOn(battlerBase, "allTraits").mockReturnValue(traits);
  return battlerBase;
};

interface StateRateCase {
  stateId: number;
  expected: number;
}

interface TestCase {
  name: string;
  traits: Trait[];
  attackElements: number[];
  attackStates: number[];
  attackStateRates: StateRateCase[];
  attackSpeed: number;
  attackTimesAdd: number;
  attackSkillId: number;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    describe("functions", () => {
      test("traitAttackElements", () => {
        const result = traitAttackElements(testCase.traits);
        expect(result).toEqual(testCase.attackElements);
      });
      test("traitAttackStates", () => {
        const result = traitAttackStates(testCase.traits);
        expect(result).toEqual(testCase.attackStates);
      });
      test("traitAttackStateRate", () => {
        testCase.attackStateRates.forEach(({ stateId, expected }) => {
          const result = traitAttackStateRate(testCase.traits, stateId);
          expect(result).toBeCloseTo(expected);
        });
      });
      test("traitAtttackSpeed", () => {
        const result = traitAtttackSpeed(testCase.traits);
        expect(result).toBeCloseTo(testCase.attackSpeed);
      });
      test("traitAttackTimesAdd", () => {
        const result = traitAttackTimesAdd(testCase.traits);
        expect(result).toBeCloseTo(testCase.attackTimesAdd);
      });
      test("traitAttackSkillId", () => {
        const result = traitAttackSkillId(testCase.traits);
        expect(result).toBe(testCase.attackSkillId);
      });
    });

    describe("battlerBase", () => {
      test("attackElements", () => {
        const battlerBase = createMockedBattlerBase(testCase.traits);
        const result = battlerBase.attackElements();
        expect(result).toEqual(testCase.attackElements);
        expect(battlerBase.allTraits).toHaveBeenCalledOnce();
      });
      test("attackStates", () => {
        const battlerBase = createMockedBattlerBase(testCase.traits);
        const result = battlerBase.attackStates();
        expect(result).toEqual(testCase.attackStates);
        expect(battlerBase.allTraits).toHaveBeenCalledOnce();
      });
      test("attackStatesRate", () => {
        testCase.attackStateRates.forEach(({ stateId, expected }) => {
          const battlerBase = createMockedBattlerBase(testCase.traits);
          const result = battlerBase.attackStatesRate(stateId);
          expect(result).toBeCloseTo(expected);
          expect(battlerBase.allTraits).toHaveBeenCalledOnce();
        });
      });
      test("attackSkillId", () => {
        const battlerBase = createMockedBattlerBase(testCase.traits);
        const result = battlerBase.attackSkillId();
        expect(result).toBe(testCase.attackSkillId);
        expect(battlerBase.allTraits).toHaveBeenCalledOnce();
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "empty traits",
    traits: [],
    attackElements: [],
    attackStates: [],
    attackStateRates: [
      { stateId: 3, expected: 0 },
      { stateId: 9, expected: 0 },
    ],
    attackSpeed: 0,
    attackTimesAdd: 0,
    attackSkillId: 1,
  },
  {
    name: "mixed attack traits",
    traits: [
      { code: TRAIT_ATTACK_ELEMENT, dataId: 1, value: 0 },
      { code: TRAIT_ATTACK_ELEMENT, dataId: 2, value: 0 },
      { code: TRAIT_ATTACK_STATE, dataId: 3, value: 0.3 },
      { code: TRAIT_ATTACK_STATE, dataId: 4, value: 0.4 },
      { code: TRAIT_ATTACK_SPEED, dataId: 0, value: 1.5 },
      { code: TRAIT_ATTACK_SPEED, dataId: 0, value: 2.5 },
      { code: TRAIT_ATTACK_TIMES, dataId: 0, value: 1.5 },
      { code: TRAIT_ATTACK_TIMES, dataId: 0, value: 2.5 },
      { code: TRAIT_ATTACK_SKILL, dataId: 5, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 10, value: 0 },
    ],
    attackElements: [1, 2],
    attackStates: [3, 4],
    attackStateRates: [
      { stateId: 3, expected: 0.3 },
      { stateId: 4, expected: 0.4 },
      { stateId: 9, expected: 0 },
    ],
    attackSpeed: 4,
    attackTimesAdd: 4,
    attackSkillId: 10,
  },
  {
    name: "state traits",
    traits: [
      { code: TRAIT_ATTACK_STATE, dataId: 3, value: 2.75 },
      { code: TRAIT_ATTACK_STATE, dataId: 4, value: 2.4 },
      { code: TRAIT_ATTACK_STATE, dataId: 5, value: 3.2 },
      { code: TRAIT_ATTACK_STATE, dataId: 8, value: 3.0 },
    ],
    attackElements: [],
    attackStates: [3, 4, 5, 8],
    attackStateRates: [
      { stateId: 3, expected: 2.75 },
      { stateId: 4, expected: 2.4 },
      { stateId: 5, expected: 3.2 },
      { stateId: 8, expected: 3.0 },
      { stateId: 9, expected: 0 },
    ],
    attackSpeed: 0,
    attackTimesAdd: 0,
    attackSkillId: 1,
  },
];

describe("battlerBase.attack", () => {
  testCases.forEach(runTestCase);
});
