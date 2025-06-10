import type { NamedItemSource } from "src/namedItemSource";
import { test, describe, expect } from "vitest";
import { makeDataNames } from "./dataTypes";
import { defineSystemItems } from "./namedItems";
import type { SystemLabel_DataNames } from "./types";

const mockLabel: SystemLabel_DataNames = {
  elements: { domainName: "Elements", format: "{name}" },
  armorTypes: { domainName: "Armor Types", format: "{name}" },
  equipTypes: { domainName: "Equip Types", format: "{name}" },
  skillTypes: { domainName: "Skill Types", format: "{name}" },
  weaponTypes: { domainName: "Weapon Types", format: "{name}" },
  variables: { domainName: "Variables", format: "{name}" },
  switches: { domainName: "Switches", format: "{name}" },
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
    const labelKeys = new Set(Object.keys(mockLabel));
    const dataKinds = new Set(result.map<string>((item) => item.source.kind));
    expect(labelKeys).toEqual(dataKinds);
  });
});
