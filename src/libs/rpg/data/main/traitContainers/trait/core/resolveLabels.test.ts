import type { SourceIdentifier } from "src/namedItemSource";
import { describe, test, expect } from "vitest";
import { LABEL_SET_TRAIT } from "./default";
import { resolveTraitLabels } from "./resolveLabels";
import type { TraitFormat } from "./types";

const authorIsRmmz = (sourceId: SourceIdentifier | undefined) => {
  return sourceId ? sourceId.author === "rmmz" : true;
};

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
  test.each(result)("should item.$label author is rmmz", (item) => {
    expect(item.dataSource).toSatisfy(authorIsRmmz);
  });
});
