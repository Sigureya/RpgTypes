import { describe, test, expect } from "vitest";
import { resolveTraitLabel } from "./labelResolve";
import { LABEL_SET_TRAIT, type TraitLabelResolved } from "./options";

describe("resolveTraitLabel", () => {
  test("should verify that elementRate domainName is a string", () => {
    expect(LABEL_SET_TRAIT.options.elementRate.domainName).toBeTypeOf("string");
  });

  const result: ReadonlyArray<TraitLabelResolved> = resolveTraitLabel(
    LABEL_SET_TRAIT.options
  );
  const codeList = result.map((item) => item.code);

  test("should ensure that all codes are unique", () => {
    const set = new Set(codeList);
    expect(set.size).toBe(codeList.length);
  });

  test("should ensure that codes are sorted in ascending order", () => {
    expect(codeList).toEqual(codeList.toSorted((a, b) => a - b));
  });
});
