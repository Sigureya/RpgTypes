import { describe, test, expect } from "vitest";
import { compileParams } from "./packing";
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
const getDefault = <T>({ default: def }: { default: T }) => def;

describe("compileProperties", () => {
  test("", () => {
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
  test("", () => {
    const result = compileParams(
      mockPersonStruct.params,
      getDefault<number | string>
    );
    const expected: Person = {
      name: "bob",
      age: 0,
    };
    expect(result).toEqual(expected);
  });
});
