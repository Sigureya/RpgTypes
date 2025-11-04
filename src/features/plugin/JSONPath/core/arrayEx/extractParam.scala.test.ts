import { describe, test, expect } from "vitest";
import type { PluginParamEx, ScalaParam } from "@RpgTypes/rmmz/plugin";
import { extractScalaParams } from "./extractParam";
import type { ScalaPathResult } from "./types/result";

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
  ] as const satisfies PluginParamEx<ScalaParam>[];

  test("path", () => {
    const result: ScalaPathResult[] = extractScalaParams(
      mockData,
      "$.person['name','age','isStudent']",
      schema,
      "Person"
    );
    const expected: ScalaPathResult[] = [
      {
        structName: "Person",
        value: "Alice",
        param: schema[0],
      },
      { structName: "Person", value: 30, param: schema[1] },
      { structName: "Person", value: false, param: schema[2] },
    ];
    expect(result).toEqual(expected);
  });

  test("array", () => {
    const result: ScalaPathResult[] = extractScalaParams(
      mockData,
      "$.students[*]['name','age','isStudent']",
      schema,
      "Person"
    );
    const expected: ScalaPathResult[] = [
      { structName: "Person", value: "Bob", param: schema[0] },
      { structName: "Person", value: 20, param: schema[1] },
      { structName: "Person", value: true, param: schema[2] },
      { structName: "Person", value: "Charlie", param: schema[0] },
      { structName: "Person", value: 22, param: schema[1] },
      { structName: "Person", value: true, param: schema[2] },
    ];
    expect(result).toEqual(expected);
  });
});
