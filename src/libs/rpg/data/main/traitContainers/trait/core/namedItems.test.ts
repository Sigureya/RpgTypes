import type { DomainName } from "@RpgTypes/templates";
import type { NamedItemSource } from "src/namedItemSource";
import { describe, test, expect } from "vitest";
import { LABEL_SET_TRAIT } from "./default";
import type { NormalLabel } from "./items";
import { defineTraitItems } from "./namedItems";

interface TestCase {
  caseName: string;
  result: NamedItemSource[];
  labels: string[];
}
const mockNormalLabel: NormalLabel = { normal: "Normal" };

const domainNames = (record: Record<string, DomainName>): string[] => {
  return Object.entries<DomainName>(record).map(
    ([, value]) => value.domainName
  );
};

const runTestCases = ({ caseName, labels, result }: TestCase) => {
  describe(caseName, () => {
    const labelsSet: ReadonlySet<string> = new Set(labels);
    const itemIsInSet = (label: string) => {
      return labelsSet.has(label);
    };
    const resultLabels = result.map((item) => item.label);
    test.each(resultLabels)(
      `label "%s" is included in the expected set`,
      (label) => {
        expect(label).toSatisfy(itemIsInSet);
      }
    );

    test(`sources are unique`, () => {
      const set = new Set(result.map((item) => JSON.stringify(item.source)));
      expect(set.size).toBe(result.length);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "defineTraitItems",
    labels: domainNames(LABEL_SET_TRAIT.options),
    result: defineTraitItems(LABEL_SET_TRAIT.options, mockNormalLabel),
  },
];

testCases.forEach((testCase) => {
  runTestCases(testCase);
});
