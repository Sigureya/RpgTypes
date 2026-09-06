import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  TRAIT_ACTION_PLUS,
  TRAIT_EQUIP_ARMOR_TYPE,
  TRAIT_EQUIP_LOCK,
  TRAIT_EQUIP_SEAL,
  TRAIT_EQUIP_WEAPON_TYPE,
  TRAIT_SKILL_TYPE_ADD,
  TRAIT_STATE_RESIST,
  isEquipArmorTypeOk,
  isEquipTypeLocked,
  isEquipTypeSealed,
  isEquipWeaponTypeOk,
  traitActionPlusSet,
  traitsAddedSkillTypes,
  traitsIsStateResist,
  traitsStateResistSet,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import { Game_BattlerBase } from "./rmmz_objects";

const createMockedBattlerBase = (traits: Trait[]): Rmmz_BattlerBase => {
  const battlerBase = new Game_BattlerBase();
  vi.spyOn(battlerBase, "allTraits").mockReturnValue(traits);
  return battlerBase;
};

const trait = (code: number, dataId: number, value = 0): Trait => ({
  code,
  dataId,
  value,
});

/** 種類ごとに「該当する id」と「該当しない id」を 1 つずつ確かめる */
interface FlagExpectation {
  ok: number;
  ng: number;
}

interface TestCase {
  name: string;
  traits: Trait[];
  expected: {
    weaponType: FlagExpectation;
    armorType: FlagExpectation;
    equipLock: FlagExpectation;
    equipSeal: FlagExpectation;
    addedSkillTypes: number[];
    actionPlusSet: number[];
    stateResistSet: number[];
    resistedStateId: number;
    notResistedStateId: number;
  };
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { traits, expected } = testCase;

    describe("function", () => {
      test("isEquipWeaponTypeOk", () => {
        expect(isEquipWeaponTypeOk(traits, expected.weaponType.ok)).toBe(true);
        expect(isEquipWeaponTypeOk(traits, expected.weaponType.ng)).toBe(false);
      });
      test("isEquipArmorTypeOk", () => {
        expect(isEquipArmorTypeOk(traits, expected.armorType.ok)).toBe(true);
        expect(isEquipArmorTypeOk(traits, expected.armorType.ng)).toBe(false);
      });
      test("isEquipTypeLocked", () => {
        expect(isEquipTypeLocked(traits, expected.equipLock.ok)).toBe(true);
        expect(isEquipTypeLocked(traits, expected.equipLock.ng)).toBe(false);
      });
      test("isEquipTypeSealed", () => {
        expect(isEquipTypeSealed(traits, expected.equipSeal.ok)).toBe(true);
        expect(isEquipTypeSealed(traits, expected.equipSeal.ng)).toBe(false);
      });
      test("traitsAddedSkillTypes", () => {
        expect(traitsAddedSkillTypes(traits)).toEqual(expected.addedSkillTypes);
      });
      test("traitActionPlusSet", () => {
        expect(traitActionPlusSet(traits)).toEqual(expected.actionPlusSet);
      });
      test("traitsStateResistSet", () => {
        expect(traitsStateResistSet(traits)).toEqual(expected.stateResistSet);
      });
      test("traitsIsStateResist", () => {
        expect(traitsIsStateResist(traits, expected.resistedStateId)).toBe(true);
        expect(traitsIsStateResist(traits, expected.notResistedStateId)).toBe(
          false,
        );
      });
    });

    describe("BattlerBase", () => {
      test("isEquipWtypeOk", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.isEquipWtypeOk(expected.weaponType.ok)).toBe(true);
        expect(battlerBase.isEquipWtypeOk(expected.weaponType.ng)).toBe(false);
      });
      test("isEquipAtypeOk", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.isEquipAtypeOk(expected.armorType.ok)).toBe(true);
        expect(battlerBase.isEquipAtypeOk(expected.armorType.ng)).toBe(false);
      });
      test("isEquipTypeLocked", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.isEquipTypeLocked(expected.equipLock.ok)).toBe(true);
        expect(battlerBase.isEquipTypeLocked(expected.equipLock.ng)).toBe(false);
      });
      test("isEquipTypeSealed", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.isEquipTypeSealed(expected.equipSeal.ok)).toBe(true);
        expect(battlerBase.isEquipTypeSealed(expected.equipSeal.ng)).toBe(false);
      });
      test("addedSkillTypes", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.addedSkillTypes()).toEqual(expected.addedSkillTypes);
      });
      test("actionPlusSet", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.actionPlusSet()).toEqual(expected.actionPlusSet);
      });
      test("stateResistSet", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.stateResistSet()).toEqual(expected.stateResistSet);
      });
      test("isStateResist", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.isStateResist(expected.resistedStateId)).toBe(true);
        expect(battlerBase.isStateResist(expected.notResistedStateId)).toBe(
          false,
        );
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "種類ごとに 1 つずつ",
    traits: [
      trait(TRAIT_EQUIP_WEAPON_TYPE, 2),
      trait(TRAIT_EQUIP_ARMOR_TYPE, 3),
      trait(TRAIT_EQUIP_LOCK, 4),
      trait(TRAIT_EQUIP_SEAL, 5),
      trait(TRAIT_SKILL_TYPE_ADD, 1),
      trait(TRAIT_SKILL_TYPE_ADD, 6),
      trait(TRAIT_ACTION_PLUS, 0, 0.5),
      trait(TRAIT_ACTION_PLUS, 0, 0.25),
      trait(TRAIT_STATE_RESIST, 7),
    ],
    expected: {
      weaponType: { ok: 2, ng: 3 },
      armorType: { ok: 3, ng: 2 },
      equipLock: { ok: 4, ng: 5 },
      equipSeal: { ok: 5, ng: 4 },
      // 並び順は特徴の並びのまま
      addedSkillTypes: [1, 6],
      // dataId ではなく value を集める
      actionPlusSet: [0.5, 0.25],
      stateResistSet: [7],
      resistedStateId: 7,
      notResistedStateId: 8,
    },
  },
  {
    name: "同じ種類が重なる",
    traits: [
      trait(TRAIT_EQUIP_WEAPON_TYPE, 2),
      trait(TRAIT_EQUIP_WEAPON_TYPE, 2),
      trait(TRAIT_EQUIP_ARMOR_TYPE, 3),
      trait(TRAIT_EQUIP_LOCK, 4),
      trait(TRAIT_EQUIP_SEAL, 5),
      trait(TRAIT_SKILL_TYPE_ADD, 1),
      trait(TRAIT_SKILL_TYPE_ADD, 1),
      trait(TRAIT_STATE_RESIST, 7),
      trait(TRAIT_STATE_RESIST, 7),
    ],
    expected: {
      weaponType: { ok: 2, ng: 3 },
      armorType: { ok: 3, ng: 2 },
      equipLock: { ok: 4, ng: 5 },
      equipSeal: { ok: 5, ng: 4 },
      // 重複は畳まれない
      addedSkillTypes: [1, 1],
      actionPlusSet: [],
      stateResistSet: [7, 7],
      resistedStateId: 7,
      notResistedStateId: 8,
    },
  },
];

testCases.forEach(runTestCase);
