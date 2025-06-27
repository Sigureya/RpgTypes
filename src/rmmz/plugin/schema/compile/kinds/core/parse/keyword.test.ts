import { test, expect, describe } from "vitest";
import type { MappingTable } from "./keyword";
import { mapKeywords } from "./keyword";
import type { Token } from "./types/token";

const mockTokens: Token[] = [
  { keyword: "name", value: "bob" },
  { keyword: "age", value: "30" },
  { keyword: "isActive", value: "true" },
];

interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

describe("mapKeywords", () => {
  const mockFnTable = {
    name: (value): string => value,
    age: (value): number => parseInt(value, 10),
    isActive: (value): boolean => value === "true",
  } satisfies MappingTable<Person>;

  test("should map keywords using the provided function table", () => {
    const result = mapKeywords(mockTokens, mockFnTable);
    const expected: Person = {
      name: "bob",
      age: 30,
      isActive: true,
    };
    expect(result).toEqual(expected);
  });
  test("should return an empty object for no tokens", () => {
    const result = mapKeywords([], mockFnTable);
    const expected = {};
    expect(result).toEqual(expected);
  });
});
