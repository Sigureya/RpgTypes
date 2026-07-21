import { describe, expect, test, vi } from "vitest";
import type { Data_Armor, Data_Weapon, Trait } from "@RpgTypes/rmmz/rpg";
import {
  canEquipArmor,
  canEquipWeapon,
  makeArmorData,
  makeWeaponData,
  TRAIT_EQUIP_ARMOR_TYPE,
  TRAIT_EQUIP_SEAL,
  TRAIT_EQUIP_WEAPON_TYPE,
} from "@RpgTypes/rmmz/rpg";
import { Game_BattlerBase } from "./rmmz_objects";

const createMockedBattler = (traits: Trait[]) => {
  const battler = new Game_BattlerBase();
  vi.spyOn(battler, "allTraits").mockReturnValue(traits);
  return battler;
};

interface TestCase {
  name: string;
  traits: Trait[];
  weapon: {
    data: Data_Weapon;
    expected: boolean;
  };
  armor: {
    data: Data_Armor;
    expected: boolean;
  };
}

const runTestCase = (testCases: TestCase) => {
  describe(testCases.name, () => {
    describe("functions", () => {
      test("canEquipWeapon", () => {
        const result = canEquipWeapon(testCases.weapon.data, testCases.traits);
        expect(result).toBe(testCases.weapon.expected);
      });
      test("canEquipArmor", () => {
        const result = canEquipArmor(testCases.armor.data, testCases.traits);
        expect(result).toBe(testCases.armor.expected);
      });
    });
    describe("battlerBase", () => {
      test("canEquipWeapon", () => {
        const battler = createMockedBattler(testCases.traits);
        const result: boolean = battler.canEquipWeapon(testCases.weapon.data);
        expect(result).toBe(testCases.weapon.expected);
        expect(battler.allTraits).toHaveBeenCalled();
      });
      test("canEquipArmor", () => {
        const battler = createMockedBattler(testCases.traits);
        const result: boolean = battler.canEquipArmor(testCases.armor.data);
        expect(result).toBe(testCases.armor.expected);
        expect(battler.allTraits).toHaveBeenCalled();
      });
    });
  });
};

const mockWeapon: Data_Weapon = makeWeaponData({
  id: 18,
  wtypeId: 7,
  etypeId: 5,
});

const mockArmor: Data_Armor = makeArmorData({
  id: 22,
  atypeId: 3,
  etypeId: 6,
});

const testCases: TestCase[] = [
  {
    name: "empty traits",
    traits: [],
    weapon: {
      data: mockWeapon,
      expected: false,
    },
    armor: {
      data: mockArmor,
      expected: false,
    },
  },
  {
    name: "matching weapon type",
    traits: [{ code: TRAIT_EQUIP_WEAPON_TYPE, dataId: 7, value: 0 }],
    weapon: {
      data: mockWeapon,
      expected: true,
    },
    armor: {
      data: mockArmor,
      expected: false,
    },
  },
  {
    name: "matching armor type",
    traits: [{ code: TRAIT_EQUIP_ARMOR_TYPE, dataId: 3, value: 0 }],
    weapon: {
      data: mockWeapon,
      expected: false,
    },
    armor: {
      data: mockArmor,
      expected: true,
    },
  },
  {
    name: "matching weapon type with unrelated seal",
    traits: [
      { code: TRAIT_EQUIP_WEAPON_TYPE, dataId: 7, value: 0 },
      { code: TRAIT_EQUIP_SEAL, dataId: 999, value: 0 },
    ],
    weapon: {
      data: mockWeapon,
      expected: true,
    },
    armor: {
      data: mockArmor,
      expected: false,
    },
  },
  {
    name: "matching armor type with unrelated seal",
    traits: [
      { code: TRAIT_EQUIP_ARMOR_TYPE, dataId: 3, value: 0 },
      { code: TRAIT_EQUIP_SEAL, dataId: 999, value: 0 },
    ],
    weapon: {
      data: mockWeapon,
      expected: false,
    },
    armor: {
      data: mockArmor,
      expected: true,
    },
  },
  {
    name: "weapon type matched but equipment sealed",
    traits: [
      { code: TRAIT_EQUIP_WEAPON_TYPE, dataId: 7, value: 0 },
      { code: TRAIT_EQUIP_SEAL, dataId: 5, value: 0 },
    ],
    weapon: {
      data: mockWeapon,
      expected: false,
    },
    armor: {
      data: mockArmor,
      expected: false,
    },
  },
  {
    name: "armor type matched but equipment sealed",
    traits: [
      { code: TRAIT_EQUIP_ARMOR_TYPE, dataId: 3, value: 0 },
      { code: TRAIT_EQUIP_SEAL, dataId: 6, value: 0 },
    ],
    weapon: {
      data: mockWeapon,
      expected: false,
    },
    armor: {
      data: mockArmor,
      expected: false,
    },
  },
  {
    name: "multiple equipment types",
    traits: [
      { code: TRAIT_EQUIP_WEAPON_TYPE, dataId: 7, value: 0 },
      { code: TRAIT_EQUIP_WEAPON_TYPE, dataId: 8, value: 0 },
      { code: TRAIT_EQUIP_ARMOR_TYPE, dataId: 3, value: 0 },
    ],
    weapon: {
      data: mockWeapon,
      expected: true,
    },
    armor: {
      data: mockArmor,
      expected: true,
    },
  },
  {
    name: "wrong equipment type",
    traits: [
      { code: TRAIT_EQUIP_WEAPON_TYPE, dataId: 99, value: 0 },
      { code: TRAIT_EQUIP_ARMOR_TYPE, dataId: 99, value: 0 },
    ],
    weapon: {
      data: mockWeapon,
      expected: false,
    },
    armor: {
      data: mockArmor,
      expected: false,
    },
  },
];
describe("battlerBase.equip", () => {
  testCases.forEach(runTestCase);
});
