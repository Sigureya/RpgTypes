import { describe, test, expect } from "vitest";
import type { PluginParam, ScalaParam } from "@RpgTypes/rmmz/plugin";
import type { ScalaPathResult } from "./extractedTypes";
import { extractScalaParams } from "./extractParam";

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

interface MockData {
  person: Person;
  students: Person[];
}

describe("extractScalaParams", () => {
  const mockData = {
    person: {
      name: "Alice",
      age: 30,
      isStudent: false,
    },
    students: [
      { name: "Bob", age: 20, isStudent: true },
      { name: "Charlie", age: 22, isStudent: true },
    ],
  } as const satisfies MockData;
  const schema = [
    { name: "name", attr: { kind: "string", default: "" } },
    { name: "age", attr: { kind: "number", default: 0 } },
    { name: "isStudent", attr: { kind: "boolean", default: false } },
  ] as const satisfies PluginParam<ScalaParam>[];

  test("path", () => {
    const result: ScalaPathResult[] = extractScalaParams(
      mockData,
      "$.person['name','age','isStudent']",
      schema
    );
    const expected: ScalaPathResult[] = [
      { value: "Alice", param: schema[0] },
      { value: 30, param: schema[1] },
      { value: false, param: schema[2] },
    ];
    expect(result).toEqual(expected);
  });

  test("array", () => {
    const result: ScalaPathResult[] = extractScalaParams(
      mockData,
      "$.students[*]['name','age','isStudent']",
      schema
    );
    const expected: ScalaPathResult[] = [
      { value: "Bob", param: schema[0] },
      { value: 20, param: schema[1] },
      { value: true, param: schema[2] },
      { value: "Charlie", param: schema[0] },
      { value: 22, param: schema[1] },
      { value: true, param: schema[2] },
    ];
    expect(result).toEqual(expected);
  });
});
