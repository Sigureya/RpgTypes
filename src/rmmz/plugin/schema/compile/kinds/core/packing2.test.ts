import { describe, test, expect } from "vitest";
import { compileParams, paramToObject } from "./packing2";
import type { PrimitiveStructType } from "./pluginScehamType";

interface Person {
  name: string;
  age: number;
}

const mockPersonStruct: PrimitiveStructType<Person> = {
  struct: "Person",
  params: {
    name: { kind: "string", default: "bob" },
    age: { kind: "number", default: 0 },
  },
};

const getKind = ({ kind }: { kind: string }) => kind;

describe("compileProperties", () => {
  test("should compile params to their respective types", () => {
    const result: Record<keyof Person, string> = compileParams(
      mockPersonStruct.params,
      getKind
    );
    const expected: Record<keyof Person, string> = {
      name: "string",
      age: "number",
    };
    expect(result).toEqual(expected);
  });
});

describe("paramToObject", () => {
  test("should convert struct params to object with default values", () => {
    const result = paramToObject(mockPersonStruct.params);
    const expected: Person = {
      name: "bob",
      age: 0,
    };
    expect(result).toEqual(expected);
  });

  test("should handle empty params", () => {
    const emptyStruct: PrimitiveStructType<{}> = {
      struct: "Empty",
      params: {},
    };
    const result = paramToObject(emptyStruct.params);
    const expected: {} = {};
    expect(result).toEqual(expected);
  });
});
