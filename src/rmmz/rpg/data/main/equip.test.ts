import { describe, test, expect } from "vitest";
import { canEquipWeapon, canEquipArmor } from "./equip";
import type { Data_Armor, Data_Weapon, Trait } from "./traitContainers";
import {
  makeWeaponData,
  makeArmorData,
  TRAIT_EQUIP_SEAL,
  TRAIT_EQUIP_WEAPON_TYPE,
  TRAIT_EQUIP_ARMOR_TYPE,
} from "./traitContainers";

interface EquipmentTestCase {
  name: string;
  traits: Trait[];
  expected: boolean;
}

const weapon: Data_Weapon = makeWeaponData({
  id: 123,
  name: "Test Weapon",
  description: "A test weapon",
  wtypeId: 5,
  etypeId: 8,
});

const armor: Data_Armor = makeArmorData({
  id: 456,
  name: "Test Armor",
  description: "A test armor",
  atypeId: 5,
  etypeId: 8,
});

const weaponCases: EquipmentTestCase[] = [
  {
    name: "empty traits",
    traits: [],
    expected: false,
  },
  {
    name: "weapon type matched",
    traits: [{ code: TRAIT_EQUIP_WEAPON_TYPE, value: 0, dataId: 5 }],
    expected: true,
  },
  {
    name: "weapon type not matched",
    traits: [{ code: TRAIT_EQUIP_WEAPON_TYPE, value: 0, dataId: 4 }],
    expected: false,
  },
  {
    name: "weapon type matched and other equipment sealed",
    traits: [
      { code: TRAIT_EQUIP_WEAPON_TYPE, value: 0, dataId: 5 },
      { code: TRAIT_EQUIP_SEAL, value: 0, dataId: 999 },
    ],
    expected: true,
  },
  {
    name: "weapon type matched but weapon slot sealed",
    traits: [
      { code: TRAIT_EQUIP_WEAPON_TYPE, value: 0, dataId: 5 },
      { code: TRAIT_EQUIP_SEAL, value: 0, dataId: 8 },
    ],
    expected: false,
  },
  {
    name: "only equipment seal",
    traits: [{ code: TRAIT_EQUIP_SEAL, value: 0, dataId: 8 }],
    expected: false,
  },
];

const armorCases: EquipmentTestCase[] = [
  {
    name: "empty traits",
    traits: [],
    expected: false,
  },
  {
    name: "armor type matched",
    traits: [{ code: TRAIT_EQUIP_ARMOR_TYPE, value: 0, dataId: 5 }],
    expected: true,
  },
  {
    name: "armor type not matched",
    traits: [{ code: TRAIT_EQUIP_ARMOR_TYPE, value: 0, dataId: 4 }],
    expected: false,
  },
  {
    name: "armor type matched and other equipment sealed",
    traits: [
      { code: TRAIT_EQUIP_ARMOR_TYPE, value: 0, dataId: 5 },
      { code: TRAIT_EQUIP_SEAL, value: 0, dataId: 999 },
    ],
    expected: true,
  },
  {
    name: "armor type matched but armor slot sealed",
    traits: [
      { code: TRAIT_EQUIP_ARMOR_TYPE, value: 0, dataId: 5 },
      { code: TRAIT_EQUIP_SEAL, value: 0, dataId: 8 },
    ],
    expected: false,
  },
  {
    name: "only equipment seal",
    traits: [
      {
        code: TRAIT_EQUIP_SEAL,
        value: 0,
        dataId: 8,
      },
    ],
    expected: false,
  },
];

describe("canEquipWeapon", () => {
  weaponCases.forEach((testCase) => {
    test(testCase.name, () => {
      const result = canEquipWeapon(weapon, testCase.traits);
      expect(result).toBe(testCase.expected);
    });
  });
});

describe("canEquipArmor", () => {
  armorCases.forEach((testCase) => {
    test(testCase.name, () => {
      const result = canEquipArmor(armor, testCase.traits);
      expect(result).toBe(testCase.expected);
    });
  });
});
