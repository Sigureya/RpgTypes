import { describe, test, expect } from "vitest";
import { mapKeys, mapKeysToObject } from "./replace";

interface SampleData {
  a: string;
  b: string;
  c: string;
  x: number;
}

describe("mapKeys", () => {
  test("should map keys and apply function", () => {
    const data: SampleData = {
      a: "foo",
      b: "bar",
      c: "baz",
      x: 42,
    };
    const keys = ["a", "c"] as const;
    const result = mapKeys(data, keys, (value, key) => `${key}:${value}`);
    expect(result).toEqual(["a:foo", "c:baz"]);
  });
});

describe("rrxxx", () => {
  test("should map keys and return object", () => {
    const data: SampleData = {
      a: "foo",
      b: "bar",
      c: "baz",
      x: 42,
    };
    const keys = ["a", "b"] as const;
    const result = mapKeysToObject(data, keys, (value, key) => [
      key,
      value.toUpperCase(),
    ]);
    expect(result).toEqual({ a: "FOO", b: "BAR" });
  });
});
