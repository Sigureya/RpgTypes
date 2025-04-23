import { describe, test, expect } from "vitest";
import { resolveTraitLabel } from "./labelResolve";
import { LABEL_SET_TRAIT2, type TraitLabelResolved } from "./options";

describe("resolveTraitLabel", () => {
  test("", () => {
    expect(LABEL_SET_TRAIT2.options.elementRate.domainName).not.toBeDefined();
  });
  const result: ReadonlyArray<TraitLabelResolved> = resolveTraitLabel(
    LABEL_SET_TRAIT2.options
  );
  const codeList = result.map((item) => item.code);
  test("", () => {
    const set = new Set(codeList);
    expect(set.size).toBe(codeList.length);
  });
  test("", () => {
    expect(codeList).toEqual(codeList.toSorted((a, b) => a - b));
  });
});
