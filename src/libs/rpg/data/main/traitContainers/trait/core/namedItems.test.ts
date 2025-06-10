import { describe, test, expect } from "vitest";
import { LABEL_SET_TRAIT } from "./default";
import type { RawTraitLabel } from "./items";
import { type NormalLabel } from "./items";
import type { TraitLabelSet } from "./labelSet";
import { defineTraitItems } from "./namedItems";

interface TestCase {
  caseName: string;
  labels: TraitLabelSet;
}

const mockNormalLabel: NormalLabel = { normal: "Normal" };

const getDomainNames = (r: Record<keyof TraitLabelSet, RawTraitLabel>) => {
  return new Set(
    Object.values<RawTraitLabel>(r).map((item) => item.domainName)
  );
};

const runTestCases = ({ caseName, labels: labelSet }: TestCase) => {
  const result = defineTraitItems(labelSet, mockNormalLabel);
  describe(caseName, () => {
    describe("labels are included in the expected domain name set", () => {
      const domainNamesSet: ReadonlySet<string> = getDomainNames(labelSet);
      const itemIsInSet = (label: string) => {
        return domainNamesSet.has(label);
      };
      const resultLabels = result.map((item) => item.label);
      test.each(resultLabels)(
        `label "%s" is valid`,
        (label) => {
          expect(label).toSatisfy(itemIsInSet);
        }
      );
    });
    test(`sources are unique`, () => {
      const set = new Set(result.map((item) => JSON.stringify(item.source)));
      expect(set.size).toBe(result.length);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "defineTraitItems",
    labels: LABEL_SET_TRAIT.options,
  },
];

testCases.forEach((testCase) => {
  runTestCases(testCase);
});
