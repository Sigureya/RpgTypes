import { describe, test, expect } from "vitest";
import { resolveTraitLabels } from "./resolveLabels";
import { LABEL_SET_TRAIT } from ".";
import type { TraitFormat } from "./types";

describe("resolveTraitLabels", () => {
  const result: TraitFormat[] = resolveTraitLabels(LABEL_SET_TRAIT.options);
  const sortedCodes: TraitFormat[] = result.toSorted(
    (a, b) => a.kindId - b.kindId
  );
  test("should ensure that all codes are unique", () => {
    const set = new Set(sortedCodes);
    expect(set.size).toBe(sortedCodes.length);
  });
  test("should ensure that codes are sorted in ascending order", () => {
    expect(result).toEqual(sortedCodes);
  });
});
