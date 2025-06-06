import { describe, test, expect } from "vitest";
import { detectFormatErrors } from "./detectErrors";
import type {
  FormatErrorLabels,
  FormatWithSource,
  FormatErrorGroup,
} from "./format";
import type { FormatRule } from "./rule";
import type { SourceIdentifier } from "./sourceIdentifier";

interface Trait {
  code: number;
  value: number;
  dataId: number;
  message: string;
}

const mockRule = {
  placeHolders: ["value", "message"],
  itemMapper: {
    placeHolder: "name",
    dataIdKey: "dataId",
    kindKey: "code",
    map: [],
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
} as const satisfies FormatErrorGroup;

interface TestCase {
  caseName: string;
  expected: FormatErrorGroup;
  format: FormatWithSource;
}

const testDetectFormatErrors = (caseName: string, cases: TestCase[]) => {
  describe(caseName, () => {
    cases.forEach(({ caseName, expected, format }) => {
      test(caseName, () => {
        const result = detectFormatErrors(format, mockRule, mockMessages);
        expect(result).toEqual(expected satisfies typeof result);
      });
    });
  });
};

describe("detectFormatErrors", () => {
  testDetectFormatErrors("normal cases", [
    {
      caseName: "文字列だけ・プレースホルダ無し",
      format: { format: "test data" },
      expected: noError,
    },
    {
      caseName: "文字列とプレースホルダ",
      format: { format: "power {value}" },
      expected: noError,
    },
    {
      caseName: "重複プレースホルダ",
      format: { format: "{value}{value}" },
      expected: noError,
    },
    {
      caseName: "空のプレースホルダ",
      format: { format: "{}" },
      expected: noError,
    },
    {
      caseName: "複数の空のプレースホルダ",
      format: { format: "{}{}" },
      expected: noError,
    },
    {
      caseName: "スペースを含むプレースホルダ",
      format: { format: "{ ignore } {ig nore}" },
      expected: noError,
    },
  ]);
  testDetectFormatErrors("error cases", [
    {
      caseName: "無効なプレースホルダ",
      format: {
        format: "power {invalid1} and {invalid2} {value}",
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
});
describe("detectFormatErrors - name", () => {
  const mockDataSource = {
    author: "testAuthor",
    module: "testModule",
    kind: "testKind",
  } as const satisfies SourceIdentifier;

  testDetectFormatErrors("normal cases", [
    {
      caseName: "名前指定あり・データソースあり",
      format: { format: "{name}", dataSource: mockDataSource },
      expected: noError,
    },
    {
      caseName: "名前指定あり・データソースあり・別のプレースホルダあり",
      format: { format: "{name} and {value}", dataSource: mockDataSource },
      expected: noError,
    },
    {
      caseName: "名前指定なし・データソースなし",
      format: { format: "{value}", dataSource: undefined },
      expected: noError,
    },
  ]);
  testDetectFormatErrors("error cases", [
    {
      caseName: "プレースホルダ無し・データソースあり",
      format: { format: "{value}", dataSource: mockDataSource },
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
      caseName: "プレースホルダあり・データソース無し",
      format: {
        format: "power {name}",
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
      caseName: "nameのプレースホルダ無し・他のエラーが同時に混入",
      format: {
        format: "power {invalid1} and {invalid2} {value}",
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
