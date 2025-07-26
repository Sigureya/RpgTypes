import { describe, test, expect } from "vitest";
import type { Data_NamedItem } from "@RpgTypes/libs";
import {
  getElementTypes,
  getEquipTypes,
  getSkillTypes,
  getVariableNames,
  getArmorTypes,
  getWeaponTypes,
  getSwitches,
} from "./getSystemTypeNames";
import type { System_RPG_DataNames } from "./types";

const system: System_RPG_DataNames = {
  elements: ["none", "Fire", "Ice", "Thunder"],
  variables: ["none", "aaa", "bbb", "ccc"],
  equipTypes: ["none", "weapon", "shield", "armor"],
  skillTypes: ["none", "attack", "magic"],
  weaponTypes: ["none", "sword", "axe", "bow"],
  armorTypes: ["none", "helmet", "shield"],
  switches: ["none", "switch1", "switch2", "switch3"],
};

describe("getElements", () => {
  test("should return elements", () => {
    const result: Data_NamedItem[] = getElementTypes(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "none" },
      { id: 1, name: "Fire" },
      { id: 2, name: "Ice" },
      { id: 3, name: "Thunder" },
    ];
    expect(result).toEqual(expected);
  });
});

describe("getVariableNames", () => {
  test("should return variable names", () => {
    const result: Data_NamedItem[] = getVariableNames(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "none" },
      { id: 1, name: "aaa" },
      { id: 2, name: "bbb" },
      { id: 3, name: "ccc" },
    ];
    expect(result).toEqual(expected);
  });
});

describe("getEquipTypes", () => {
  test("should return equip types", () => {
    const result: Data_NamedItem[] = getEquipTypes(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "none" },
      { id: 1, name: "weapon" },
      { id: 2, name: "shield" },
      { id: 3, name: "armor" },
    ];
    expect(result).toEqual(expected);
  });
});

describe("getSkillTypes", () => {
  test("should return skill types", () => {
    const result: Data_NamedItem[] = getSkillTypes(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "none" },
      { id: 1, name: "attack" },
      { id: 2, name: "magic" },
    ];
    expect(result).toEqual(expected);
  });
});

describe("getWeaponTypes", () => {
  test("should return weapon types", () => {
    const result: Data_NamedItem[] = getWeaponTypes(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "none" },
      { id: 1, name: "sword" },
      { id: 2, name: "axe" },
      { id: 3, name: "bow" },
    ];
    expect(result).toEqual(expected);
  });
});
describe("getArmorTypes", () => {
  test("should return armor types", () => {
    const result: Data_NamedItem[] = getArmorTypes(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "none" },
      { id: 1, name: "helmet" },
      { id: 2, name: "shield" },
    ];
    expect(result).toEqual(expected);
  });
});

describe("getSwitches", () => {
  test("should return switches", () => {
    const result: Data_NamedItem[] = getSwitches(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "none" },
      { id: 1, name: "switch1" },
      { id: 2, name: "switch2" },
      { id: 3, name: "switch3" },
    ];
    expect(result).toEqual(expected);
  });
});
