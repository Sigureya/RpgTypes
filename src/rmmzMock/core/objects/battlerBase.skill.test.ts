import { describe, test, expect, vi } from "vitest";
import type {
  Data_Skill,
  Trait,
  Battler_SkillUser,
  Data_Weapon,
} from "@RpgTypes/rmmz/rpg";
import {
  skillMpCost,
  canPaySkillCostBasic,
  isSkillRequiredWeaponTypeOk,
  isSkillSealed,
  filterUsableSkills,
  filterUsableSkillsWithWeapon,
  makeSkillData,
  TRAIT_SPARAM,
  SPARAM_MCR_MAGIC_COST_RATE,
  makeWeaponData,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_SEAL,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import { Game_BattlerBase } from "./rmmz_objects";

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

const createMockBattler = (testCase: TestCase): Rmmz_BattlerBase => {
  const battler = new Game_BattlerBase();
  vi.spyOn(battler, "allTraits").mockReturnValue([...testCase.traits]);
  vi.spyOn(battler, "mmp", "get").mockReturnValue(
    Math.max(500, testCase.battler.mp * 2),
  );
  battler._mp = testCase.battler.mp;
  battler._tp = testCase.battler.tp;

  return battler;
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    describe("functions", () => {
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
    describe("mock battler", () => {
      test("skillMpCost", () => {
        const battler = createMockBattler(testCase);
        const mpCost = battler.skillMpCost(testCase.skill);
        expect(mpCost).toBe(testCase.expected.mpCost);
      });
      test("canPaySkillCost", () => {
        const battler = createMockBattler(testCase);
        const canPay = battler.canPaySkillCost(testCase.skill);
        expect(canPay).toBe(testCase.expected.canPaySkillCostBasic);
      });
      test("isSkillWtypeOk", () => {
        const battler = createMockBattler(testCase);
        const canUseWithWeapon = battler.isSkillWtypeOk(testCase.skill);
        expect(canUseWithWeapon).toBe(true);
      });
      test("isSkillSealed", () => {
        const battler = createMockBattler(testCase);
        const isIdSealed = battler.isSkillSealed(testCase.skill.id);
        const isTypeSealed = battler.isSkillTypeSealed(testCase.skill.stypeId);
        const isSealed = isIdSealed || isTypeSealed;
        expect(isSealed).toBe(testCase.expected.isSkillSealed);
        expect(isIdSealed).toBeTypeOf("boolean");
        expect(isTypeSealed).toBeTypeOf("boolean");
      });
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
