import { describe, test, expect } from "vitest";
import { detectFormatErrors } from "./detectErrors";
import type {
  FormatErrorLabels,
  FormatErrorGroup,
  FormatLimits,
} from "./formatErrorTypes";
import type { FormatRule } from "./rule";
import type { SourceIdentifier } from "./rule";
import type { FormatInput, FormatWithSource } from "./types";

interface Trait {
  code: number;
  value: number;
  dataId: number;
  message: string;
}

const mockRule = {
  placeHolder: {
    numbers: ["value"],
  },
  itemMapper: {
    placeHolder: "name",
    dataIdKey: "dataId",
    kindKey: "code",
  },
  itemMappers: [],
} as const satisfies FormatRule<Trait>;

const mockMessages = {
  missingName: "Missing name",
  missingSourceId: "Missing source ID",
  extraPlaceHolder: "Extra placeholder",
  longPlaceHolder: "Placeholder is too long",
  formatVeryLong: "Format is too long",
} as const satisfies FormatErrorLabels;

const noError = {
  semanticErrors: [],
  syntaxErrors: [],
} as const satisfies Omit<FormatErrorGroup, "formatLabel">;

const mockLableName = "testLabel" as const;

const mockDataSource = {
  author: "testAuthor",
  module: "testModule",
  kind: "testKind",
} as const satisfies SourceIdentifier;

interface TestCase {
  caseName: string;
  expected: Omit<FormatErrorGroup, "formatLabel">;
  format: FormatWithSource;
}

const testDetectFormatErrors = (caseName: string, cases: TestCase[]) => {
  describe(caseName, () => {
    cases.forEach(({ caseName, expected, format }) => {
      test(caseName, () => {
        const fmt: FormatInput = {
          pattern: format.pattern,
          dataSource: format.dataSource,
          label: mockLableName,
        };
        const result = detectFormatErrors(fmt, mockRule, mockMessages);
        expect(result satisfies typeof expected).toMatchObject(expected);
      });
    });
  });
};

describe("detectFormatErrors", () => {
  testDetectFormatErrors("normal cases", [
    {
      caseName: "no placeholders in string",
      format: { pattern: "test data" },
      expected: noError,
    },
    {
      caseName: "string with valid placeholder",
      format: { pattern: "power {value}" },
      expected: noError,
    },
    {
      caseName: "duplicate valid placeholders",
      format: { pattern: "{value}{value}" },
      expected: noError,
    },
    {
      caseName: "empty placeholder",
      format: { pattern: "{}" },
      expected: noError,
    },
    {
      caseName: "multiple empty placeholders",
      format: { pattern: "{}{}" },
      expected: noError,
    },
    {
      caseName: "placeholder with spaces",
      format: { pattern: "{ ignore } {ig nore}" },
      expected: noError,
    },
  ]);
  testDetectFormatErrors("error cases", [
    {
      caseName: "invalid placeholders",
      format: {
        pattern: "power {invalid1} and {invalid2} {value}",
      },
      expected: {
        semanticErrors: [],
        syntaxErrors: [
          { message: mockMessages.extraPlaceHolder, reason: "invalid1" },
          { message: mockMessages.extraPlaceHolder, reason: "invalid2" },
        ],
      },
    },
  ]);
  describe("name", () => {
    testDetectFormatErrors("normal cases", [
      {
        caseName: "name placeholder with dataSource",
        format: { pattern: "{name}", dataSource: mockDataSource },
        expected: noError,
      },
      {
        caseName: "name and another valid placeholder with dataSource",
        format: { pattern: "{name} and {value}", dataSource: mockDataSource },
        expected: noError,
      },
      {
        caseName: "no name placeholder and no dataSource",
        format: { pattern: "{value}", dataSource: undefined },
        expected: noError,
      },
    ]);
    testDetectFormatErrors("error cases", [
      {
        caseName: "no name placeholder but dataSource present",
        format: { pattern: "{value}", dataSource: mockDataSource },
        expected: {
          semanticErrors: [
            {
              message: mockMessages.missingName,
              reason: "name",
            },
          ],
          syntaxErrors: [],
        },
      },
      {
        caseName: "name placeholder present but no dataSource",
        format: {
          pattern: "power {name}",
          dataSource: undefined,
        },
        expected: {
          semanticErrors: [
            {
              message: mockMessages.missingSourceId,
              reason: "name",
            },
          ],
          syntaxErrors: [],
        },
      },
      {
        caseName: "missing name placeholder and other errors present",
        format: {
          pattern: "power {invalid1} and {invalid2} {value}",
          dataSource: mockDataSource,
        },
        expected: {
          semanticErrors: [
            {
              message: mockMessages.missingName,
              reason: "name",
            },
          ],
          syntaxErrors: [
            { message: mockMessages.extraPlaceHolder, reason: "invalid1" },
            { message: mockMessages.extraPlaceHolder, reason: "invalid2" },
          ],
        },
      },
    ]);
  });
});
interface TestCase_LongFormat {
  caseName: string;
  format: FormatWithSource;
  limit: FormatLimits;
}

const defaultLimit: FormatLimits = {
  formatMaxLength: 200,
  placeHolderMaxLength: 50,
};
const testDetectLongFormat = (
  caseName: string,
  cases: TestCase_LongFormat[]
) => {
  describe(caseName, () => {
    cases.forEach(({ format, limit, caseName }) => {
      describe(caseName, () => {
        const result = detectFormatErrors(
          {
            pattern: format.pattern,
            dataSource: format.dataSource,
            label: mockLableName,
          },
          mockRule,
          mockMessages,
          limit
        );
        test("syntaxErrors", () => {
          expect(result.syntaxErrors).toMatchObject([
            { message: mockMessages.formatVeryLong },
          ]);
        });
        test("semanticErrors", () => {
          expect(result.semanticErrors).toEqual(noError.semanticErrors);
        });
      });
    });
  });
};

describe("detectFormatErrors - long format", () => {
  testDetectLongFormat("error cases", [
    {
      caseName: "format with length exceeding limit",
      format: { pattern: "a".repeat(260) },
      limit: defaultLimit,
    },
    {
      caseName: "format with length within limit",
      format: { pattern: "a".repeat(100) },
      limit: {
        formatMaxLength: 100,
        placeHolderMaxLength: 50,
      },
    },
    {
      caseName: "format with invalid placeholders and exceeding limit",
      format: {
        pattern: `power {invalid1} and {invalid2} {value}${"a".repeat(260)}`,
        dataSource: mockDataSource,
      },
      limit: defaultLimit,
    },
  ]);
});
