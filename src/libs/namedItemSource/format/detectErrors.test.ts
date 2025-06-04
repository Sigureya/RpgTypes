import { describe, test, expect } from "vitest";
import type {
  FormatError,
  FormatErrorLabels,
  FormatRule,
  FormatWithSource,
} from "./types";
import { detectFormatErrors } from "./detectErrors";

const mockRule = {
  placeHolders: ["value", "message"],
  itemNamePlaceHolder: "name",
} as const satisfies FormatRule<{ value: number; message: string }>;

const mockMessages = {
  missingName: "Missing name",
  missingSourceId: "Missing source ID",
  extraPlaceHolder: "Extra placeholder",
} as const satisfies FormatErrorLabels;

const runDetectFormatErrors = (format: FormatWithSource): FormatError[] => {
  return detectFormatErrors(format, mockRule, mockMessages);
};

describe("detectFormatErros - normal cases", () => {
  test("returns no error for format without placeholders", () => {
    const result = runDetectFormatErrors({ format: "test data" });
    expect(result).toEqual([]);
  });

  test("returns no error for valid placeholder", () => {
    const result = runDetectFormatErrors({ format: "power {value}" });
    expect(result).toEqual([]);
  });
  test("returns no error for duplicate placeholders", () => {
    const result = runDetectFormatErrors({ format: "{value}{value}" });
    expect(result).toEqual([]);
  });
  test("returns no error for only empty placeholder", () => {
    const result = runDetectFormatErrors({ format: "{}" });
    expect(result).toEqual([]);
  });
  test("returns error for multiple empty placeholders", () => {
    const result = runDetectFormatErrors({ format: "{}{}" });
    expect(result).toEqual([]);
  });
  test("ignores placeholders containing spaces", () => {
    const result = runDetectFormatErrors({ format: "{ ignore } {ig nore}" });
    expect(result).toEqual([]);
  });
});

describe("detectFormatErros - error cases", () => {
  describe("error cases", () => {
    test("returns error for invalid placeholder", () => {
      const result = runDetectFormatErrors({ format: "power {invalid}" });
      expect(result).toEqual([
        {
          message: mockMessages.extraPlaceHolder,
          reason: "invalid",
        } satisfies FormatError,
      ]);
    });

    test("returns error for multiple invalid placeholders and missing {name}", () => {
      const result = runDetectFormatErrors({
        format: "power {invalid1} and {invalid2} {value}",
        dataSource: { author: "test", module: "test", kind: "test" },
      });
      expect(result).toEqual([
        {
          message: mockMessages.missingName,
          reason: mockRule.itemNamePlaceHolder,
        },
        {
          message: mockMessages.extraPlaceHolder,
          reason: "invalid1",
        },
        {
          message: mockMessages.extraPlaceHolder,
          reason: "invalid2",
        },
      ] satisfies typeof result);
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
      expect(result).toEqual([]);
    });

    test("returns no error when {name} is present and dataSource exists", () => {
      const result = runDetectFormatErrors({
        format: "myItem {name}",
        dataSource: { author: "test", module: "test", kind: "test" },
      });
      expect(result).toEqual([]);
    });
    test("returns no error when both {name} and valid placeholder are present and dataSource exists", () => {
      const result = runDetectFormatErrors({
        format: "myItem {name} Power {value}",
        dataSource: { author: "test", module: "test", kind: "test" },
      });
      expect(result).toEqual([]);
    });
  });

  describe("error cases", () => {
    test("returns error when {name} is missing but dataSource exists", () => {
      const result = runDetectFormatErrors({
        format: "myItem Power {value}",
        dataSource: { author: "test", module: "test", kind: "test" },
      });
      expect(result).toEqual([
        {
          message: mockMessages.missingName,
          reason: mockRule.itemNamePlaceHolder,
        } satisfies FormatError,
      ]);
    });
    test("returns error when {name} is present but dataSource is missing", () => {
      const result = runDetectFormatErrors({
        format: "myItem {name}",
      });
      expect(result).toEqual([
        {
          message: mockMessages.missingSourceId,
          reason: mockRule.itemNamePlaceHolder,
        } satisfies FormatError,
      ]);
    });
    test("returns only one error when {name} is duplicated and dataSource is missing", () => {
      const result = runDetectFormatErrors({
        format: "myItem {name}{name}",
      });
      expect(result).toEqual([
        {
          message: mockMessages.missingSourceId,
          reason: mockRule.itemNamePlaceHolder,
        } satisfies FormatError,
      ]);
    });
  });
});
