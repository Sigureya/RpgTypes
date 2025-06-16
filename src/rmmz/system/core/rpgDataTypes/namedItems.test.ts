import { test, describe, expect } from "vitest";
import type { NamedItemSource } from "src/namedItemSource";
import { makeDataNames } from "./dataTypes";
import { defineSystemItems } from "./namedItems";
import type { SystemLabel_DataNames } from "./types";

const mockLabel: SystemLabel_DataNames = {
  title: "System Data Names",
  format: "{name}",
  options: {
    armorTypes: "Armor Types",
    elements: "Elements",
    equipTypes: "Equip Types",
    skillTypes: "Skill Types",
    variables: "Variables",
    switches: "Switches",
    weaponTypes: "Weapon Types",
  },
};

describe("defineSystemItems", () => {
  const result: NamedItemSource[] = defineSystemItems(
    makeDataNames({
      armorTypes: ["mockArmor"],
      elements: ["mockElement"],
    }),
    mockLabel
  );
  test("sourceId are unique", () => {
    const set = new Set(
      result.map<string>((item) => JSON.stringify(item.source))
    );
    expect(set.size).toBe(result.length);
  });
  test("all kinds in result match label options", () => {
    const labelKeys = new Set(Object.keys(mockLabel.options));
    const dataKinds = new Set(result.map<string>((item) => item.source.kind));
    expect(labelKeys).toEqual(dataKinds);
  });
});
