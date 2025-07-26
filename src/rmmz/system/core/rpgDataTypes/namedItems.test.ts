import { test, describe, expect } from "vitest";
import type { NamedItemSource } from "@RpgTypes/libs";
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
});
