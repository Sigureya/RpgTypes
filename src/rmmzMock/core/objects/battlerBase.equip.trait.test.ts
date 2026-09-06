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

const traits: Trait[] = [
  trait(TRAIT_EQUIP_WEAPON_TYPE, 2),
  trait(TRAIT_EQUIP_ARMOR_TYPE, 3),
  trait(TRAIT_EQUIP_LOCK, 4),
  trait(TRAIT_EQUIP_SEAL, 5),
  trait(TRAIT_SKILL_TYPE_ADD, 1),
  trait(TRAIT_SKILL_TYPE_ADD, 6),
  trait(TRAIT_ACTION_PLUS, 0, 0.5),
  trait(TRAIT_ACTION_PLUS, 0, 0.25),
  trait(TRAIT_STATE_RESIST, 7),
];

const ids = [0, 2, 3, 4, 5, 6, 7, 99];

describe("装備の可否がコアスクリプトと一致する", () => {
  const cases: {
    name: string;
    core: (battlerBase: Rmmz_BattlerBase, id: number) => boolean;
    fn: (traits: Trait[], id: number) => boolean;
  }[] = [
    {
      name: "isEquipWtypeOk",
      core: (b, id) => b.isEquipWtypeOk(id),
      fn: isEquipWeaponTypeOk,
    },
    {
      name: "isEquipAtypeOk",
      core: (b, id) => b.isEquipAtypeOk(id),
      fn: isEquipArmorTypeOk,
    },
    {
      name: "isEquipTypeLocked",
      core: (b, id) => b.isEquipTypeLocked(id),
      fn: isEquipTypeLocked,
    },
    {
      name: "isEquipTypeSealed",
      core: (b, id) => b.isEquipTypeSealed(id),
      fn: isEquipTypeSealed,
    },
  ];

  cases.forEach(({ name, core, fn }) => {
    describe(name, () => {
      ids.forEach((id) => {
        test(`id: ${id}`, () => {
          const battlerBase = createMockedBattlerBase(traits);
          const expected: boolean = core(battlerBase, id);
          const result: boolean = fn(traits, id);
          expect(result).toBe(expected);
        });
      });
    });
  });
});

describe("集合を返すもの", () => {
  test("addedSkillTypes", () => {
    const battlerBase = createMockedBattlerBase(traits);
    const expected: number[] = battlerBase.addedSkillTypes();
    const result: number[] = traitsAddedSkillTypes(traits);
    expect(result).toEqual(expected);
  });

  test("actionPlusSet", () => {
    const battlerBase = createMockedBattlerBase(traits);
    const expected: number[] = battlerBase.actionPlusSet();
    const result: number[] = traitActionPlusSet(traits);
    expect(result).toEqual(expected);
  });
});

describe("ステート無効化", () => {
  ids.forEach((id) => {
    test(`stateId: ${id}`, () => {
      const battlerBase = createMockedBattlerBase(traits);
      const expected: boolean = battlerBase.isStateResist(id);
      const result: boolean = traitsIsStateResist(traits, id);
      expect(result).toBe(expected);
    });
  });

  test("stateResistSet", () => {
    const battlerBase = createMockedBattlerBase(traits);
    const expected: number[] = battlerBase.stateResistSet();
    const result: number[] = traitsStateResistSet(traits);
    expect(result).toEqual(expected);
  });
});
