import { describe, test, expect } from "vitest";
import { resolveTraitLabels } from "./trait";
import type { TraitLabelResolved } from "./options";
import { LABEL_SET_TRAIT } from "./options";

describe("resolveTraitLabels", () => {
  const result: TraitLabelResolved[] = resolveTraitLabels(
    LABEL_SET_TRAIT.options
  );
  const sortedCodes: TraitLabelResolved[] = result.toSorted(
    (a, b) => a.code - b.code
  );
  test("should ensure that all codes are unique", () => {
    const set = new Set(sortedCodes);
    expect(set.size).toBe(sortedCodes.length);
  });
  test("should ensure that codes are sorted in ascending order", () => {
    expect(result).toEqual(sortedCodes);
  });
});
