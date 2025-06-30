import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { PluginStructType } from "./kinds/core/pluginEntryTypes";
import type { PluginMeta } from "./kinds/pluginMeta/compileOption";
import { compilePluginStruct } from "./struct";
interface Numbers {
  floating: number;
  integer1: number;
  integer2: number;
  integer3: number;
  numberArray: number[];
  floatArray: number[];
}

const titles: PluginMeta = {
  moduleName: "moduleName",
  author: "author",
};

describe("compilePluginStruct -numbers", () => {
  const mockNumbersStruct = {
    struct: "Numbers",
    params: {
      floating: { kind: "number", default: 0.5, decimals: 2 },
      integer1: { kind: "number", default: 42 },
      integer2: { kind: "number", default: 42, decimals: 0 },
      integer3: { kind: "number", default: 42 },
      numberArray: { kind: "number[]", default: [1, 2, 3], decimals: 0 },
      floatArray: { kind: "number[]", default: [1.1, 2.2, 3.3], decimals: 2 },
    },
  } as const satisfies PluginStructType<Numbers>;
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
  describe("logs", () => {
    test("logs correct schema path for each property", () => {
      const logs = new Set(resultNumbers.logs.map((log) => log.path));
      const expected = new Set<string>(
        expectedNumbersSchema.required.map((key) => `moduleName.Numbers.${key}`)
      );
      expect(logs).toEqual(expected);
    });
  });

  test("generates correct JSONSchema for various number types", () => {
    expect(resultNumbers.schema).toEqual(expectedNumbersSchema);
  });
});
