import { describe, test, expect } from "vitest";
import { classifyPluginParams } from "./classify";
import type {
  PluginStructSchemaArrayEx,
  ClassifiedPluginParams,
  ClassifiedPluginParamsEx,
} from "./types";

interface MockStruct {
  name: string;
  num: number;
  isActive: boolean;
  structRef: { id: number };
  stringArray: string[];
  numArray: number[];
}

describe("classifyPluginParams", () => {
  const mockStructSchema: PluginStructSchemaArrayEx<MockStruct> = {
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
    const result: ClassifiedPluginParams = classifyPluginParams(
      mockStructSchema.params
    );
    const expected: ClassifiedPluginParamsEx<MockStruct> = {
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
