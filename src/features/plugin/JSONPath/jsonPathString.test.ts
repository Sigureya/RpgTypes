import { describe, test, expect } from "vitest";
import { JSONPathJS } from "jsonpath-js";
import type { JSONPathType } from "./jsonPathString";

interface Person {
  name: string;
  age: number;
  items: number[];
}

describe("JSONPathType", () => {
  const mockPerson = {
    name: "Bob",
    age: 20,
    items: [1, 2, 3],
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
  test("array param items", () => {
    const mockPath: JSONPathType<Person> = "$.items";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockPerson);
    expect(value).toEqual([[1, 2, 3]]);
  });

  test("array param items", () => {
    const mockPath: JSONPathType<Person> = `$.items[*]`;
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockPerson);
    expect(value).toEqual([1, 2, 3]);
  });
});

interface Family {
  father: Person;
  mother: Person;
  children: Person[];
  id: number;
}

describe("JSONPathType nested", () => {
  const mockFamily = {
    id: 211,
    father: { name: "Bob", age: 40, items: [1, 2, 3] },
    mother: { name: "Alice", age: 38, items: [4, 5, 6] },
    children: [
      { name: "Charlie", age: 10, items: [7, 8] },
      { name: "Daisy", age: 8, items: [9] },
    ],
  } as const satisfies Family;
  test("number param id", () => {
    const mockPath: JSONPathType<Family> = "$.id";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    expect(value).toEqual([211]);
  });

  test("string param name", () => {
    const mockPath: JSONPathType<Family> = "$.father.name";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    expect(value).toEqual(["Bob"]);
  });
  test("number param age", () => {
    const mockPath: JSONPathType<Family> = "$.mother.age";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    expect(value).toEqual([38]);
  });

  test("array param items", () => {
    const mockPath: JSONPathType<Family> = "$.father.items";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    expect(value).toEqual([[1, 2, 3]]);
  });
  test("array param items with wildcard", () => {
    const mockPath: JSONPathType<Family> = "$.father.items[*]";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    expect(value).toEqual([1, 2, 3]);
  });

  test("array param children", () => {
    const mockPath: JSONPathType<Family> = "$.children";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    expect(value).toEqual([mockFamily.children]);
  });

  test("array param children age with wildcard", () => {
    const mockPath: JSONPathType<Family> = "$.children[*].age";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    expect(value).toEqual([10, 8]);
  });
  test("array param children name with wildcard", () => {
    const mockPath: JSONPathType<Family> = "$.children[*].name";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    const expected: string[] = ["Charlie", "Daisy"];
    expect(value).toEqual(expected);
  });

  test("array param children items with wildcard", () => {
    const mockPath: JSONPathType<Family> = "$.children[*].items";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    const expected: number[][] = [[7, 8], [9]];
    expect(value).toEqual(expected);
  });

  test("array param children items with wildcard", () => {
    const mockPath: JSONPathType<Family> = "$.children[*].items[*]";
    const path = new JSONPathJS(mockPath);
    const value = path.find(mockFamily);
    const expected: number[] = [7, 8, 9];
    expect(value).toEqual(expected);
  });
});
