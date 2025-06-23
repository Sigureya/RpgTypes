import { describe, test, expect } from "vitest";
import { reduceParams, paramsToObject } from "./paramsReduce";
import type { PluginStructType } from "./pluginEnties";

interface Person {
  name: string;
  age: number;
}

const mockPersonStruct: PluginStructType<Person> = {
  struct: "Person",
  params: {
    name: { kind: "string", default: "bob" },
    age: { kind: "number", default: 0 },
  },
};

const getKind = ({ kind }: { kind: string }) => kind;

describe("paramsReduce", () => {
  test("should compile params to their respective types", () => {
    const result: Record<keyof Person, string> = reduceParams(
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

describe("paramsToObject", () => {
  test("should convert struct params to object with default values", () => {
    const result = paramsToObject(mockPersonStruct.params);
    const expected: Person = {
      name: "bob",
      age: 0,
    };
    expect(result).toEqual(expected);
  });

  test("should handle empty params", () => {
    const emptyStruct: PluginStructType<{}> = {
      struct: "Empty",
      params: {},
    };
    const result = paramsToObject(emptyStruct.params);
    const expected: {} = {};
    expect(result).toEqual(expected);
  });
});
