import { describe, test, expect } from "vitest";
import type {
  Data_NamedItem,
  FormatErrorLabels,
  FormatInput,
  FormatWithSource,
  SourceIdentifier,
} from "src/namedItemSource";
import { detectTraitFormatErrors, formatTraitText } from "./format";
import type { Trait } from "./types";

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

const mockErrorLabels = {
  missingName: "Missing name",
  missingSourceId: "Missing source ID",
  extraPlaceHolder: "Extra placeholder",
  longPlaceHolder: "Placeholder is too long",
  formatVeryLong: "Format is too long",
} as const satisfies FormatErrorLabels;

interface TestCase {
  caseName: string;
  format: FormatWithSource;
  trait: Trait;
  includeTexts: string[];
}

const mockSourceId = {
  author: "testAuthor",
  module: "testModule",
  kind: "testKind",
} satisfies SourceIdentifier;

const testFormatTraitText = ({
  caseName,
  format,
  includeTexts,
  trait,
}: TestCase) => {
  describe(caseName, () => {
    const result: string = formatTraitText(format, trait, mockArray);
    includeTexts.forEach((text) => {
      test(`should include "${text}"`, () => {
        expect(result).includes(text);
      });
    });
    test("", () => {
      const input: FormatInput = {
        pattern: format.pattern,
        dataSource: format.dataSource,
        label: "testLabel",
      };
      const errors = detectTraitFormatErrors(input, mockErrorLabels);
      expect(errors.semanticErrors).toEqual([]);
      expect(errors.syntaxErrors).toEqual([]);
    });
  });
};

const runTestCases = (caseName: string, cases: TestCase[]) => {
  describe(caseName, () => {
    cases.forEach((testCase) => {
      testFormatTraitText(testCase);
    });
  });
};

describe("formatTraitText", () => {
  runTestCases("normal cases", [
    {
      caseName: "format with name and value",
      format: { pattern: "{name} {value}", dataSource: mockSourceId },
      trait: {
        code: 0,
        dataId: 1,
        value: 240,
      },
      includeTexts: [mockE1.name, "240"],
    },
    {
      caseName: "format with name only",
      format: { pattern: "{name}", dataSource: mockSourceId },
      trait: {
        code: 0,
        dataId: 2,
        value: 270,
      },
      includeTexts: [mockE2.name],
    },
    {
      caseName: "format with value only",
      format: { pattern: "{value}" },
      trait: {
        code: 0,
        dataId: 3,
        value: 1000,
      },
      includeTexts: ["1000"],
    },
    {
      caseName: "format with value and custom text",
      format: { pattern: "{value} abc" },
      trait: {
        code: 0,
        dataId: 3,
        value: 1000,
      },
      includeTexts: ["1000", "abc"],
    },
  ]);
});
