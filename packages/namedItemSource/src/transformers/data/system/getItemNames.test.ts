import { describe, test, expect } from "vitest";
import {
  getElements,
  getEquipTypes,
  getParamNames,
  getSkillTypes,
  getVariableNames,
} from "./getItemNames";
import type {
  System_ParamNames,
  Data_System,
  Data_NamedItem,
} from "@sigureya/rpgtypes";

const system: System_ParamNames &
  Pick<Data_System, "elements" | "variables" | "equipTypes" | "skillTypes"> = {
  elements: ["none", "Fire", "Ice", "Thunder"],
  variables: ["none", "aaa", "bbb", "ccc"],
  equipTypes: ["none", "weapon", "shield", "armor"],
  skillTypes: ["none", "attack", "magic"],
  terms: {
    params: [
      "mhp",
      "mmp",
      "atk",
      "def",
      "mat",
      "mdf",
      "agi",
      "luk",
      "hit",
      "eva",
    ],
  },
};

describe("getElements", () => {
  test("should return elements", () => {
    const result: Data_NamedItem[] = getElements(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "none" },
      { id: 1, name: "Fire" },
      { id: 2, name: "Ice" },
      { id: 3, name: "Thunder" },
    ];
    expect(result).toEqual(expected);
  });
});

describe("getParamNames", () => {
  test("should return param names", () => {
    const result: Data_NamedItem[] = getParamNames(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "mhp" },
      { id: 1, name: "mmp" },
      { id: 2, name: "atk" },
      { id: 3, name: "def" },
      { id: 4, name: "mat" },
      { id: 5, name: "mdf" },
      { id: 6, name: "agi" },
      { id: 7, name: "luk" },
      { id: 8, name: "hit" },
      { id: 9, name: "eva" },
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
