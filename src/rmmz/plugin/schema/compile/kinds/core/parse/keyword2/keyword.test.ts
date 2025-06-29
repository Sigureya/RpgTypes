import { test, expect, describe } from "vitest";
import { compileParam, mapKeyword2 } from "./mapping";

interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

const mockRecord = {
  desc: "description",
} as const;

describe("mapKeywords", () => {
  const x = mapKeyword2(mockRecord, {
    age: (value): string => value,
  } satisfies Record<string, (value: string) => unknown>);
  test("", () => {
    expect(x).toEqual({});
  });
});
