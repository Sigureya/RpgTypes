import { describe, test, expect } from "vitest";
import type { Battler_SkillUser } from "./skill";
import {
  canPaySkillCostBasic,
  isSkillRequiredWeaponTypeOk,
  isSkillSealed,
  skillMpCost,
  filterUsableSkills,
  filterUsableSkillsWithWeapon,
  filterUsableSkillsEx,
} from "./skill";
import type { Data_Weapon, Trait } from "./traitContainers";
import {
  makeWeaponData,
  SPARAM_MCR_MAGIC_COST_RATE,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_SEAL,
  TRAIT_SPARAM,
} from "./traitContainers";
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
    test("filterUsableSkillsEx", () => {
      const result: Data_Skill[] = filterUsableSkillsEx(
        [testCase.skill],
        testCase.traits,
        testCase.battler,
        (skill: Data_Skill) => skill,
      );
      const expected = testCase.expected.canUse ? [testCase.skill] : [];
      expect(result).toEqual(expected);
    });

    test("filterUsableSkillsWithWeapon", () => {
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

  {
    name: "not enough mp",
    battler: { mp: 49, tp: 100 },
    traits: [
      {
        code: TRAIT_SPARAM,
        dataId: SPARAM_MCR_MAGIC_COST_RATE,
        value: 0.5,
      },
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
      canPaySkillCostBasic: false,
      isSkillRequiredWeaponTypeOk: true,
      isSkillSealed: false,
      canUse: false,
      canUseWithWeapon: false,
    },
  },

  {
    name: "not enough tp",
    battler: { mp: 100, tp: 49 },
    traits: [],
    skill: makeSkillData({
      mpCost: 0,
      tpCost: 50,
      requiredWtypeId1: 0,
      requiredWtypeId2: 0,
    }),
    weapons: [],
    expected: {
      mpCost: 0,
      canPaySkillCostBasic: false,
      isSkillRequiredWeaponTypeOk: true,
      isSkillSealed: false,
      canUse: false,
      canUseWithWeapon: false,
    },
  },

  {
    name: "weapon required but no weapon",
    battler: { mp: 100, tp: 100 },
    traits: [],
    skill: makeSkillData({
      mpCost: 0,
      tpCost: 0,
      requiredWtypeId1: 5,
      requiredWtypeId2: 0,
    }),
    weapons: [],
    expected: {
      mpCost: 0,
      canPaySkillCostBasic: true,
      isSkillRequiredWeaponTypeOk: false,
      isSkillSealed: false,
      canUse: true,
      canUseWithWeapon: false,
    },
  },

  {
    name: "weapon type matched",
    battler: { mp: 100, tp: 100 },
    traits: [],
    skill: makeSkillData({
      mpCost: 0,
      tpCost: 0,
      requiredWtypeId1: 5,
      requiredWtypeId2: 7,
    }),
    weapons: [
      makeWeaponData({
        id: 1,
        wtypeId: 7,
      }),
    ],
    expected: {
      mpCost: 0,
      canPaySkillCostBasic: true,
      isSkillRequiredWeaponTypeOk: true,
      isSkillSealed: false,
      canUse: true,
      canUseWithWeapon: true,
    },
  },

  {
    name: "skill sealed",
    battler: { mp: 100, tp: 100 },
    traits: [
      {
        code: TRAIT_SKILL_SEAL,
        dataId: 1,
        value: 0,
      },
    ],
    skill: makeSkillData({
      id: 1,
      mpCost: 0,
      tpCost: 0,
    }),
    weapons: [],
    expected: {
      mpCost: 0,
      canPaySkillCostBasic: true,
      isSkillRequiredWeaponTypeOk: true,
      isSkillSealed: true,
      canUse: false,
      canUseWithWeapon: false,
    },
  },

  {
    name: "skill type sealed",
    battler: { mp: 100, tp: 100 },
    traits: [
      {
        code: TRAIT_SKILL_TYPE_SEAL,
        dataId: 3,
        value: 0,
      },
    ],
    skill: makeSkillData({
      stypeId: 3,
      mpCost: 0,
      tpCost: 0,
    }),
    weapons: [],
    expected: {
      mpCost: 0,
      canPaySkillCostBasic: true,
      isSkillRequiredWeaponTypeOk: true,
      isSkillSealed: true,
      canUse: false,
      canUseWithWeapon: false,
    },
  },

  {
    name: "fractional mp cost",
    battler: { mp: 50, tp: 0 },
    traits: [
      {
        code: TRAIT_SPARAM,
        dataId: SPARAM_MCR_MAGIC_COST_RATE,
        value: 0.5,
      },
    ],
    skill: makeSkillData({
      mpCost: 101,
      tpCost: 0,
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
