import { describe, test, expect } from "vitest";
import { rmmzDataTypes, rmmzDataTypeArrays } from "./makeSchema";

describe("rmmzDataTypes", () => {
  test("", () => {
    const result = rmmzDataTypes();
    const set = new Set(result);
    expect(result.length).toBe(set.size);
  });
});

describe("rmmzDataTypeArrays", () => {
  test("", () => {
    const result = rmmzDataTypeArrays();
    const set = new Set(result);
    expect(result.length).toBe(set.size);
  });
  test("all items end with []", () => {
    const result = rmmzDataTypeArrays();
    result.forEach((item) => {
      expect(item).toSatisfy(() => item.endsWith("[]"));
    });
  });
  test("", () => {
    const setA = new Set(rmmzDataTypes().map((item) => `${item}[]`));
    const setB = new Set(rmmzDataTypeArrays());
    expect(setA).toEqual(setB);
  });
});
