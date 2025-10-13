import { describe, test, expect } from "vitest";
import { JSONPathJS } from "jsonpath-js";
import type { JSONPathType } from "./jsonPathString";

interface Person {
  name: string;
  age: number;
}

describe("JSONPathType", () => {
  const mockPerson = {
    name: "Bob",
    age: 20,
  } as const satisfies Person;

  test("string param name", () => {
    const mockPath: JSONPathType<Person> = "$.age";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockPerson);
    expect(value).toEqual([20]);
  });
  test("number param age", () => {
    const mockPath: JSONPathType<Person> = "$.name";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockPerson);
    expect(value).toEqual(["Bob"]);
  });
});
