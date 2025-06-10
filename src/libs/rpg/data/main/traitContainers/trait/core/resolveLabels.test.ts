import type { SourceIdentifier } from "src/namedItemSource";
import { describe, test, expect } from "vitest";
import { LABEL_SET_TRAIT } from "./default";
import { resolveTraitLabels } from "./resolveLabels";
import type { TraitFormat } from "./types";

const authorIsRmmz = (sourceId: SourceIdentifier | undefined) => {
  if (sourceId === undefined) {
    return true; // If no sourceId, assume it's valid
  }
  return sourceId.author === "rmmz";
};

describe("resolveTraitLabels", () => {
  const result: TraitFormat[] = resolveTraitLabels(LABEL_SET_TRAIT.options);
  const sortedCodes: TraitFormat[] = result.toSorted(
    (a, b) => a.kindId - b.kindId
  );
  test("should ensure that all codes are unique", () => {
    const set = new Set(result.map((item) => item.kindId));
    expect(set.size).toBe(result.length);
  });
  test("should ensure that codes are sorted in ascending order", () => {
    expect(result).toEqual(sortedCodes);
  });
  test.each(result)("should item.$label author is rmmz", (item) => {
    expect(item.dataSource).toSatisfy(authorIsRmmz);
  });
});
