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
];

describe("isTextParam", () => {
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
