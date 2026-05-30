import { describe, expect, test, vi } from "vitest";
import type { PluginExtractedValue } from "@sigureya/rmmz-plugin-schema";
import { isTextParam, convertPluginParams } from "./conv";

const nonTextParams: PluginExtractedValue[] = [
  {
    value: 123,
    param: {
      name: "test",
      attr: {
        kind: "number",
        default: 0,
      },
    },
    rootName: "test",
    rootType: "param",
    structName: "Test",
  },
  {
    value: "$gameVariables.setValue(12, 24)",
    param: {
      name: "expr",
      attr: {
        kind: "string",
        default: "",
      },
    },
    rootName: "expr",
    rootType: "param",
    structName: "Test",
  },
  {
    value: "-----",
    param: {
      name: "bar",
      attr: {
        kind: "any",
        default: "----",
      },
    },
    rootName: "bar",
    rootType: "param",
    structName: "Test",
  },
  {
    value: " ----- ",
    param: {
      name: "bar",
      attr: {
        kind: "string",
        default: "----",
      },
    },
    rootName: "bar",
    rootType: "param",
    structName: "Test",
  },
  {
    value: "   ",
    param: {
      name: "empty",
      attr: {
        kind: "string",
        default: "",
      },
    },
    rootName: "baz",
    rootType: "param",
    structName: "Test",
  },
  {
    value: " 123,456  ",
    param: {
      name: "vec2",
      attr: {
        kind: "any",
        default: "123,456",
      },
    },
    rootName: "baz",
    rootType: "param",
    structName: "Test",
  },
  {
    value: " 12.3+456-789 ",
    param: {
      name: "formula",
      attr: {
        kind: "string",
        default: "",
      },
    },
    rootName: "baz",
    rootType: "param",
    structName: "Test",
  },
];

const textParams: PluginExtractedValue[] = [
  {
    value: `$gameVariables.setValue(15,"abc" )`,
    param: {
      name: "expr",
      attr: {
        kind: "string",
        default: "",
      },
    },
    rootName: "expr",
    rootType: "param",
    structName: "Test",
  },
];

describe("isTextParam", () => {
  textParams.forEach((param) => {
    test(`テキストパラメータはtrueを返す: ${param.value}`, () => {
      expect(isTextParam(param)).toBe(true);
    });
  });
  nonTextParams.forEach((param) => {
    test(`非テキストパラメータはfalseを返す: ${param.value}`, () => {
      expect(isTextParam(param)).toBe(false);
    });
  });
});

describe("convertPluginParams", () => {
  test("非テキストパラメータは除外される", () => {
    const hashFn = vi.fn((text: string) => text);
    const result = convertPluginParams(
      { params: nonTextParams, pluginName: "Test" },
      hashFn,
    );
    expect(result).toEqual([]);
    expect(hashFn).not.toHaveBeenCalled();
  });
});
