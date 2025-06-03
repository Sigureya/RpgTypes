import { describe, test, expect } from "vitest";
import { detectTraitFormatErrors, formatTraitText } from "./format";

import type {
  Data_NamedItem,
  FormatErrorLabels,
  FormatWithSource,
  SourceIdentifier,
} from "src/namedItemSource";
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
      expect(detectTraitFormatErrors(format, mockErrorLabels)).toEqual([]);
    });
  });
};

describe("", () => {
  testFormatTraitText({
    caseName: "format with name and value",
    format: { format: "{name} {value}", dataSource: mockSourceId },
    trait: {
      code: 0,
      dataId: 1,
      value: 240,
    },
    includeTexts: [mockE1.name, "240"],
  });

  testFormatTraitText({
    caseName: "format with name only",
    format: { format: "{name}", dataSource: mockSourceId },
    trait: {
      code: 0,
      dataId: 2,
      value: 270,
    },
    includeTexts: [mockE2.name],
  });

  testFormatTraitText({
    caseName: "format with value only",
    format: { format: "{value}" },
    trait: {
      code: 0,
      dataId: 3,
      value: 1000,
    },
    includeTexts: ["1000"],
  });
  testFormatTraitText({
    caseName: "format with value and custom text",
    format: { format: "{value} abc" },
    trait: {
      code: 0,
      dataId: 3,
      value: 1000,
    },
    includeTexts: ["1000", "abc"],
  });
});
