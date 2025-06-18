import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { compilePluginStruct } from "./compile";
import type { PluginStruct } from "./kinds";
import type { PluginTitles } from "./kinds/compileOption";

interface Numbers {
  floating: number;
  integer1: number;
  integer2: number;
  integer3: number;
  numberArray: number[];
  floatArray: number[];
}

const titles: PluginTitles = {
  moduleName: "moduleName",
  author: "author",
};

describe("compilePluginStruct -numbers", () => {
  const mockNumbersStruct = {
    structName: "Numbers",
    params: {
      floating: { kind: "number", default: 0.5, digit: 2 },
      integer1: { kind: "number", default: 42 },
      integer2: { kind: "number", default: 42, digit: 0 },
      integer3: { kind: "number", default: 42 },
      numberArray: { kind: "number[]", default: [1, 2, 3], digit: 0 },
      floatArray: { kind: "number[]", default: [1.1, 2.2, 3.3], digit: 2 },
    },
  } as const satisfies PluginStruct<Numbers>;
  const expectedNumbersSchema: JSONSchemaType<Numbers> = {
    title: "Numbers",
    type: "object",
    properties: {
      floating: { type: "number", default: 0.5 },
      integer1: { type: "integer", default: 42 },
      integer2: { type: "integer", default: 42 },
      integer3: { type: "integer", default: 42 },
      numberArray: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      floatArray: {
        type: "array",
        items: { type: "number" },
        default: [1.1, 2.2, 3.3],
      },
    },
    required: [
      "floating",
      "integer1",
      "integer2",
      "integer3",
      "numberArray",
      "floatArray",
    ],
    additionalProperties: false,
  };
  const resultNumbers = compilePluginStruct(titles, mockNumbersStruct, {});
  test("logs", () => {
    expect(resultNumbers.logs.length).toBe(
      Object.keys(mockNumbersStruct.params).length
    );
  });
  test("schema", () => {
    expect(resultNumbers.schema).toEqual(expectedNumbersSchema);
  });
});
