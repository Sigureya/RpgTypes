import { test, describe, expect } from "vitest";
import { defineTraitItems } from "./namedItems";
import { LABEL_SET_TRAIT } from "src/rpg";

describe("Test defineTraitItems function", () => {
  const result = defineTraitItems(LABEL_SET_TRAIT.options, {
    normal: "normal",
  });
  test("", () => {
    const set = new Set(
      result.map<string>((item) => JSON.stringify(item.source))
    );
    expect(set.size).toBe(result.length);
  });
});
