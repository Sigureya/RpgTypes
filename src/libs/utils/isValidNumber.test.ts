import { describe, expect, test } from "vitest";
import { isValidNumber } from "./isValidNumber";

describe("isValidNumber", () => {
  test("should return true for valid numbers", () => {
    expect(isValidNumber(0)).toBe(true);
    expect(isValidNumber(42)).toBe(true);
    expect(isValidNumber(-1)).toBe(true);
    expect(isValidNumber(3.14)).toBe(true);
  });

  test("should return false for NaN", () => {
    expect(isValidNumber(NaN)).toBe(false);
  });

  test("should return false for non-number types", () => {
    expect(isValidNumber("string")).toBe(false);
    expect(isValidNumber("5")).toBe(false);
    expect(isValidNumber({})).toBe(false);
    expect(isValidNumber([])).toBe(false);
    expect(isValidNumber(null)).toBe(false);
    expect(isValidNumber(undefined)).toBe(false);
  });
});
