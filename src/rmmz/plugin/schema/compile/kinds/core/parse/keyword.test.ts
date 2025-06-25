import { test, expect, describe } from "vitest";
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
  test("should map keywords using the provided function table", () => {
    const result = mapKeywords<Person>(mockTokens, {
      name: (value): string => value,
      age: (value): number => parseInt(value, 10),
      isActive: (value): boolean => value === "true",
    });
    const expected: Person = {
      name: "bob",
      age: 30,
      isActive: true,
    };
    expect(result).toEqual(expected);
  });
});
