import { test, expect, describe } from "vitest";
import type { ClassifiedPluginParams } from "./classify";
import { classifyPluginParams } from "./classify";
import type { PluginStructSchemaArray } from "./core";

describe("classifyPluginParams", () => {
  const mockStructSchema: PluginStructSchemaArray = {
    struct: "MockStruct",
    params: [
      { name: "name", attr: { kind: "string", default: "defaultText" } },
      { name: "num", attr: { kind: "number", default: 42 } },
      { name: "isActive", attr: { kind: "boolean", default: true } },
      {
        name: "structRef",
        attr: { kind: "struct", struct: "AnotherStruct" },
      },
      {
        name: "stringArray",
        attr: { kind: "string[]", default: [] },
      },
      { name: "numArray", attr: { kind: "number[]", default: [1, 2, 3] } },
    ],
  };

  test("classifies params correctly", () => {
    const result = classifyPluginParams(mockStructSchema);
    const expected: ClassifiedPluginParams = {
      structs: [
        {
          name: "structRef",
          attr: { kind: "struct", struct: "AnotherStruct" },
        },
      ],
      scalaArrays: [
        { name: "stringArray", attr: { kind: "string[]", default: [] } },
        { name: "numArray", attr: { kind: "number[]", default: [1, 2, 3] } },
      ],
      scalas: [
        { name: "name", attr: { kind: "string", default: "defaultText" } },
        { name: "num", attr: { kind: "number", default: 42 } },
        { name: "isActive", attr: { kind: "boolean", default: true } },
      ],
      structArrays: [],
    };
    expect(result.scalas).toEqual(expected.scalas);
    expect(result.scalaArrays).toEqual(expected.scalaArrays);
    expect(result.structs).toEqual(expected.structs);
    expect(result.structArrays).toEqual(expected.structArrays);
    expect(result).toEqual(expected);
  });
});
