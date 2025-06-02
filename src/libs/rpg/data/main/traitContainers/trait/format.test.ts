import { describe, test, expect } from "vitest";
import { detectTraitLabel, formatTraitText } from "./format";
import type { Trait, TraitLabelResolved } from "./types";

import type { Data_NamedItem, SourceIdentifier } from "src/namedItemSource";

const makeSource = (): SourceIdentifier => ({
  author: "test",
  module: "mock",
  kind: "dummy",
});
const mock0 = {
  id: 956,
  name: "ALFA-X",
} satisfies Data_NamedItem;

const mockE1 = {
  name: "max yamabiko",
  id: 1,
};
const mockE2 = {
  name: "asama",
  id: 2,
} satisfies Data_NamedItem;

const mockE3 = {
  name: "komachi",
  id: 3,
} satisfies Data_NamedItem;

const mockArray = [mock0, mockE1, mockE2, mockE3];

interface TestCase {
  caseName: string;
  data: TraitLabelResolved;
  expectedDetection: string[];
  expectedText: string;
  dataArray: Data_NamedItem[];
  trait: Trait;
}

const testTraitLabel = ({
  caseName,
  dataArray,
  data,
  trait,
  expectedText,
  expectedDetection,
}: TestCase) => {
  describe(caseName, () => {
    test("", () => {
      const result = formatTraitText(data, trait, dataArray);
      expect(result).toBe(expectedText);
    });
    test("", () => {
      const detection = detectTraitLabel(data);
      expect(detection).toEqual(expectedDetection);
    });
  });
};

const testNormalCase = (caseName: string, testCases: TestCase[]) => {
  describe(caseName, () => {
    testCases.forEach((testCase) => {
      testTraitLabel(testCase);
    });
  });
};
testNormalCase("Trait Label Format Tests", [
  {
    caseName: "Basic Format",
    trait: {
      code: 0,
      dataId: 2,
      value: 275,
    },
    data: {
      code: 0,
      label: "test",
      format: "{name} {value}",
      dataSource: makeSource(),
    },
    expectedDetection: [],
    expectedText: "asama 275",
    dataArray: mockArray,
  },
  {
    caseName: "Format with Name Placeholder",
    trait: {
      code: 0,
      dataId: 3,
      value: 0,
    },
    data: {
      code: 0,
      label: "test",
      format: "{name}",
      dataSource: makeSource(),
    },
    expectedDetection: [],
    expectedText: "komachi",
    dataArray: mockArray,
  },
]);
