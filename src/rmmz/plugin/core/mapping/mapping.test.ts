import type { MockedObject } from "vitest";
import { test, expect, describe, vi } from "vitest";
import type { MappingTable } from "./mapping";
import { applyMappingTable } from "./mapping";

interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

type SrcRecord = Record<keyof Person, string>;
type PersonFunc = MappingTable<Person>;

describe("mapKeywords", () => {
  const mcokFn: MockedObject<PersonFunc> = {
    age: vi.fn((value: string): number => {
      return parseInt(value, 10);
    }),
    isActive: vi.fn((value: string): boolean => {
      return value === "true";
    }),
    name: vi.fn((value: string): string => {
      return value;
    }),
  };
  const src: SrcRecord = {
    name: "John Doe",
    age: "30",
    isActive: "true",
  };
  const result = applyMappingTable(src, mcokFn);
  test("should map keywords to their respective functions", () => {
    const expected: Person = {
      name: "John Doe",
      age: 30,
      isActive: true,
    };
    expect(result).toEqual(expected);
  });
  test("should call each function with the correct value", () => {
    expect(mcokFn.name).toHaveBeenCalledWith(src.name);
    expect(mcokFn.age).toHaveBeenCalledWith(src.age);
    expect(mcokFn.isActive).toHaveBeenCalledWith(src.isActive);
  });
});
