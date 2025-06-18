import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { compile } from "./compile";
import type { KindOfStruct } from "./kinds";

interface Numbers {
  floating: number;
  integer1: number;
  integer2: number;
  numberArray: number[];
  floatArray: number[];
}

describe("numbers", () => {
  const numbersStruct = {
    kind: "struct",
    struct: {
      structName: "Numbers",
      params: {
        floating: { kind: "number", default: 0.5, digit: 2 },
        integer1: { kind: "number", default: 42 },
        integer2: { kind: "number", default: 42, digit: 0 },
        numberArray: { kind: "number[]", default: [1, 2, 3], digit: 0 },
        floatArray: { kind: "number[]", default: [1.1, 2.2, 3.3], digit: 2 },
      },
    },
  } as const satisfies KindOfStruct<Numbers>;
  const expectedNumbersSchema: JSONSchemaType<Numbers> = {
    title: "Numbers",
    type: "object",
    properties: {
      floating: { type: "number", default: 0.5 },
      integer1: { type: "integer", default: 42 },
      integer2: { type: "integer", default: 42 },
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
    required: ["floating", "integer1", "integer2", "numberArray", "floatArray"],
    additionalProperties: false,
  };
  describe("compile", () => {
    const resultNumbers = compile("moduleName", numbersStruct, {});
    test("logs", () => {
      expect(resultNumbers.logs.length).toBe(5);
    });
    test("schema", () => {
      expect(resultNumbers.schema).toEqual(expectedNumbersSchema);
    });
  });
});
