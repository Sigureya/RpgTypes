import { describe, test, expect } from "vitest";
import { detectFormatErrors } from "./detectErrors";
import type {
  FormatErrorLabels,
  FormatWithSource,
  FormatErrorItem,
  FormatErrorGroup,
} from "./format";
import type { FormatRule } from "./rule";

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

const runDetectFormatErrors = (format: FormatWithSource) => {
  return detectFormatErrors(format, mockRule, mockMessages);
};

describe("detectFormatErros - normal cases", () => {
  const expectedNonError = {
    semanticErrors: [],
    syntaxErrors: [],
  } as const satisfies FormatErrorGroup;
  test("returns no error for format without placeholders", () => {
    const result = runDetectFormatErrors({ format: "test data" });
    expect(result).toEqual(expectedNonError);
  });

  test("returns no error for valid placeholder", () => {
    const result = runDetectFormatErrors({ format: "power {value}" });
    expect(result).toEqual(expectedNonError);
  });
  test("returns no error for duplicate placeholders", () => {
    const result = runDetectFormatErrors({ format: "{value}{value}" });
    expect(result).toEqual(expectedNonError);
  });
  test("returns no error for only empty placeholder", () => {
    const result = runDetectFormatErrors({ format: "{}" });
    expect(result).toEqual(expectedNonError);
  });
  test("returns error for multiple empty placeholders", () => {
    const result = runDetectFormatErrors({ format: "{}{}" });
    expect(result).toEqual(expectedNonError);
  });
  test("ignores placeholders containing spaces", () => {
    const result = runDetectFormatErrors({ format: "{ ignore } {ig nore}" });
    expect(result).toEqual(expectedNonError);
  });
});

describe("detectFormatErros - error cases", () => {
  describe("error cases", () => {
    test("returns error for invalid placeholder", () => {
      const result = runDetectFormatErrors({ format: "power {invalid}" });
      expect(result.syntaxErrors).toEqual([
        {
          message: mockMessages.extraPlaceHolder,
          reason: "invalid",
        } satisfies FormatErrorItem,
      ]);
    });

    describe("returns error for multiple invalid placeholders and missing {name}", () => {
      const result = runDetectFormatErrors({
        format: "power {invalid1} and {invalid2} {value}",
        dataSource: { author: "test", module: "test", kind: "test" },
      });
      test("semanticErrors", () => {
        expect(result.semanticErrors).toEqual([
          {
            message: mockMessages.missingName,
            reason: mockRule.itemMapper.placeHolder,
          },
        ] satisfies FormatErrorItem[]);
      });
      test("syntaxErrors", () => {
        expect(result.syntaxErrors).toEqual([
          {
            message: mockMessages.extraPlaceHolder,
            reason: "invalid1",
          },
          {
            message: mockMessages.extraPlaceHolder,
            reason: "invalid2",
          },
        ] satisfies FormatErrorItem[]);
      });
    });
  });
  describe("Placeholder length validation", () => {
    const longPlaceholder = "a".repeat(120);
    const result = runDetectFormatErrors({
      format: `myItem {${longPlaceholder}}`,
    });
    test("returns an error when the placeholder is too long", () => {
      expect(result.syntaxErrors).toHaveLength(1);
      expect(result.syntaxErrors[0].message).toBe(mockMessages.longPlaceHolder);
    });
    test("the reason field contains the original placeholder string", () => {
      expect(longPlaceholder).includes(result.syntaxErrors[0].reason);
    });
  });
});

describe("detectFormatErros - name", () => {
  describe("normal cases", () => {
    test("returns no error when only {name} is present and dataSource exists", () => {
      const result = runDetectFormatErrors({
        format: "{name}",
        dataSource: { author: "test", module: "test", kind: "test" },
      });
      expect(result.semanticErrors).toEqual([]);
    });

    test("returns no error when {name} is present and dataSource exists", () => {
      const result = runDetectFormatErrors({
        format: "myItem {name}",
        dataSource: { author: "test", module: "test", kind: "test" },
      });
      expect(result.semanticErrors).toEqual([]);
    });
    test("returns no error when both {name} and valid placeholder are present and dataSource exists", () => {
      const result = runDetectFormatErrors({
        format: "myItem {name} Power {value}",
        dataSource: { author: "test", module: "test", kind: "test" },
      });
      expect(result.semanticErrors).toEqual([]);
    });
  });

  describe("error cases", () => {
    test("returns error when {name} is missing but dataSource exists", () => {
      const result = runDetectFormatErrors({
        format: "myItem Power {value}",
        dataSource: { author: "test", module: "test", kind: "test" },
      });
      expect(result.semanticErrors).toEqual([
        {
          message: mockMessages.missingName,
          reason: mockRule.itemMapper.placeHolder,
        } satisfies FormatErrorItem,
      ]);
    });
    test("returns error when {name} is present but dataSource is missing", () => {
      const result = runDetectFormatErrors({
        format: "myItem {name}",
      });
      expect(result.semanticErrors).toEqual([
        {
          message: mockMessages.missingSourceId,
          reason: mockRule.itemMapper.placeHolder,
        } satisfies FormatErrorItem,
      ]);
    });
    test("returns only one error when {name} is duplicated and dataSource is missing", () => {
      const result = runDetectFormatErrors({
        format: "myItem {name}{name}",
      });
      expect(result.semanticErrors).toEqual([
        {
          message: mockMessages.missingSourceId,
          reason: mockRule.itemMapper.placeHolder,
        } satisfies FormatErrorItem,
      ]);
    });
  });
});
