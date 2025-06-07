import { describe, test, expect } from "vitest";
import { resolveItemEffectLabels } from "./define";
import type { EffectDefinitionResolved } from "./labels";
import { LABEL_SET_ITEM_EFFECT } from "./labels";

describe("resolveItemEffectLabels", () => {
  const result: EffectDefinitionResolved[] = resolveItemEffectLabels(
    LABEL_SET_ITEM_EFFECT.options
  );
  describe("should return an array of EffectDefinitionResolved objects", () => {
    const codeList = result.map((item) => item.code);
    test("", () => {
      expect(codeList).toEqual(codeList.toSorted());
    });
    test("should ensure that all codes are unique", () => {
      const set = new Set(codeList);
      expect(set.size).toBe(codeList.length);
    });
  });
  test("should ensure that all dataSource are unique", () => {
    const sourceList = result
      .map((item) => item.dataSource)
      .filter((source) => !!source);
    const uniqueSources = new Set(sourceList);
    expect(uniqueSources.size).toBe(sourceList.length);
  });
});
