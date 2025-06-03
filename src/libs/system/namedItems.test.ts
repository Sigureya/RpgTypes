import { test, describe, expect } from "vitest";
import { defineSystemItems } from "./namedItems";
import makeSystemData from "./make";
import type { NamedItemSource } from "src/namedItemSource";
import type { SystemLabel_DataNames } from "./systemLabels";

const mockLabel: SystemLabel_DataNames = {
  elements: "elements",
  equipTypes: "equipTypes",
  weaponTypes: "weaponTypes",
  skillTypes: "skillTypes",
  armorTypes: "armorTypes",
  variables: "variableNames",
  switches: "switches",
};

describe("", () => {
  const result: NamedItemSource[] = defineSystemItems(
    makeSystemData({
      dataNames: {
        armorTypes: ["mockArmor"],
        elements: ["mockElement"],
      },
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
