import { describe, test, expect } from "vitest";
import { canEquipWeapon } from "./equip";
import type { Data_Weapon, Trait } from "./traitContainers";
import {
  makeWeaponData,
  TRAIT_EQUIP_SEAL,
  TRAIT_EQUIP_WEAPON_TYPE,
} from "./traitContainers";

describe("canEquipWeapon", () => {
  const weapon: Data_Weapon = makeWeaponData({
    id: 123,
    name: "Test Weapon",
    description: "A test weapon",
    wtypeId: 5,
    etypeId: 8,
  });
  describe("true", () => {
    test("weapon type matched", () => {
      const traits: Trait[] = [
        { code: TRAIT_EQUIP_WEAPON_TYPE, value: 0, dataId: 5 },
      ];
      const result = canEquipWeapon(weapon, traits);
      expect(result).toBe(true);
    });
    test("weapon type matched and sealed", () => {
      const traits: Trait[] = [
        { code: TRAIT_EQUIP_WEAPON_TYPE, value: 0, dataId: 5 },
        { code: TRAIT_EQUIP_SEAL, value: 0, dataId: 999 },
      ];
      const result = canEquipWeapon(weapon, traits);
      expect(result).toBe(true);
    });
  });
  describe("false", () => {
    test("empty", () => {
      const result = canEquipWeapon(weapon, []);
      expect(result).toBe(false);
    });
    test("sealed", () => {
      const result = canEquipWeapon(weapon, [
        { code: TRAIT_EQUIP_WEAPON_TYPE, value: 0, dataId: 5 },
        { code: TRAIT_EQUIP_SEAL, value: 0, dataId: 8 },
      ]);
      expect(result).toBe(false);
    });
  });
});
