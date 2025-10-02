import { describe, test, expect } from "vitest";
import { structName } from "./struct";

describe("structName", () => {
  test("should extract struct name from valid struct type", () => {
    const result = structName("struct<Person>");
    expect(result).toBe("Person");
  });

  test("should return empty string for invalid struct type", () => {
    const result = structName("structPerson");
    expect(result).toBe("");
  });

  test("should return empty string for non-struct type", () => {
    const result = structName("number");
    expect(result).toBe("");
  });

  test("should handle empty input", () => {
    const result = structName("");
    expect(result).toBe("");
  });
});
