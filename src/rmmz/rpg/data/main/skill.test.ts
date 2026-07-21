import { describe, test, expect } from "vitest";
import type { Battler_SkillUser } from "./skill";
import {
  canPaySkillCostBasic,
  isSkillRequiredWeaponTypeOk,
  isSkillSealed,
  skillMpCost,
  filterUsableSkills,
  filterUsableSkillsWithWeapon,
} from "./skill";
import type { Data_Weapon, Trait } from "./traitContainers";
import { SPARAM_MCR_MAGIC_COST_RATE, TRAIT_SPARAM } from "./traitContainers";
import type { Data_Skill } from "./usableItems";
import { makeSkillData } from "./usableItems";

interface TestCase {
  name: string;
  skill: Data_Skill;
  traits: Trait[];
  battler: Battler_SkillUser;
  weapons: Data_Weapon[];
  expected: {
    mpCost: number;
    canPaySkillCostBasic: boolean;
    isSkillRequiredWeaponTypeOk: boolean;
    isSkillSealed: boolean;
    canUse: boolean;
    canUseWithWeapon: boolean;
  };
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("skillMpCost", () => {
      const result = skillMpCost(testCase.traits, testCase.skill);
      expect(result).toBe(testCase.expected.mpCost);
    });
    test("canPaySkillCostBasic", () => {
      const result = canPaySkillCostBasic(
        testCase.battler,
        testCase.traits,
        testCase.skill,
      );
      expect(result).toBe(testCase.expected.canPaySkillCostBasic);
    });
    test("isSkillRequiredWeaponTypeOk", () => {
      const result = isSkillRequiredWeaponTypeOk(
        testCase.weapons,
        testCase.skill,
      );
      expect(result).toBe(testCase.expected.isSkillRequiredWeaponTypeOk);
    });
    test("isSkillSealed", () => {
      const result = isSkillSealed(testCase.traits, testCase.skill);
      expect(result).toBe(testCase.expected.isSkillSealed);
    });
    test("filterUsableSkills", () => {
      const result: Data_Skill[] = filterUsableSkills(
        [testCase.skill],
        testCase.traits,
        testCase.battler,
      );
      const expected = testCase.expected.canUse ? [testCase.skill] : [];
      expect(result).toEqual(expected);
    });
    test.skip("filterUsableSkillsWithWeapon", () => {
      const result: Data_Skill[] = filterUsableSkillsWithWeapon(
        [testCase.skill],
        testCase.traits,
        testCase.weapons,
        testCase.battler,
      );
      const expected = testCase.expected.canUseWithWeapon
        ? [testCase.skill]
        : [];
      expect(result).toEqual(expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "enough mp and tp, no weapon required",
    battler: { mp: 100, tp: 50 },
    traits: [],
    skill: makeSkillData({
      mpCost: 100,
      tpCost: 50,
      requiredWtypeId1: 0,
      requiredWtypeId2: 0,
    }),
    weapons: [],
    expected: {
      mpCost: 100,
      canPaySkillCostBasic: true,
      isSkillRequiredWeaponTypeOk: true,
      isSkillSealed: false,
      canUse: true,
      canUseWithWeapon: true,
    },
  },
  {
    name: "not enough mp, enough tp, no weapon required",
    battler: { mp: 50, tp: 0 },
    traits: [
      { code: TRAIT_SPARAM, dataId: SPARAM_MCR_MAGIC_COST_RATE, value: 0.5 },
    ],
    skill: makeSkillData({
      mpCost: 100,
      tpCost: 0,
      requiredWtypeId1: 0,
      requiredWtypeId2: 0,
    }),
    weapons: [],
    expected: {
      mpCost: 50,
      canPaySkillCostBasic: true,
      isSkillRequiredWeaponTypeOk: true,
      isSkillSealed: false,
      canUse: true,
      canUseWithWeapon: true,
    },
  },
];

describe("skill functions", () => {
  testCases.forEach(runTestCase);
});
