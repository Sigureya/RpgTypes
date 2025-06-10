import type { NamedItemSource } from "src/namedItemSource";
import { test, describe, expect } from "vitest";
import { makeDataNames } from "./dataTypes";
import { defineSystemItems } from "./namedItems";
import type { SystemLabel_DataNames } from "./types";

const mockLabel: SystemLabel_DataNames = {
  domainName: "System Data Names",
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

describe("", () => {
  const result: NamedItemSource[] = defineSystemItems(
    makeDataNames({
      armorTypes: ["mockArmor"],
      elements: ["mockElement"],
    }),
    mockLabel
  );
  test("", () => {
    const set = new Set(
      result.map<string>((item) => JSON.stringify(item.source))
    );
    expect(set.size).toBe(result.length);
  });
  test("", () => {
    const labelKeys = new Set(Object.keys(mockLabel.options));
    const dataKinds = new Set(result.map<string>((item) => item.source.kind));
    expect(labelKeys).toEqual(dataKinds);
  });
});
