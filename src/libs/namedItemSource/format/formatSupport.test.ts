import { describe, test, expect } from "vitest";
import type {
  FormatError,
  FormatErrorLabels,
  FormatRule,
  FormatWithSource,
} from "./types";
import { detectFormatErros } from "./formatSupport";

const mockRule: FormatRule = {
  placeHolders: ["value"],
  itemNamePlaceHolder: "name",
};

const mockMessages: FormatErrorLabels = {
  missingName: "Missing name",
  missingSourceId: "Missing source ID",
  extraPlaceHolder: "Extra placeholder",
};

describe("", () => {
  const xxxx = (format: FormatWithSource) => {
    return detectFormatErros(format, mockRule, mockMessages);
  };
  test("", () => {
    const result = xxxx({ format: "power {value}" });
    expect(result).toEqual([]);
  });
  test("", () => {
    const result = xxxx({
      format: "myItem {name}",
      dataSource: { author: "test", module: "test", kind: "test" },
    });
    expect(result).toEqual([]);
  });
  test("", () => {
    const result = xxxx({
      format: "myItem {name}",
    });
    expect(result).toEqual([
      {
        message: mockMessages.missingSourceId,
        reason: "name",
      },
    ] satisfies FormatError[]);
  });
});
