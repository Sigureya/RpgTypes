import { describe, test, expect } from "vitest";
import { kindsOfBoolean, kindsOfNumber, kindsOfString } from "./kindOfType";

describe("kindsOfString", () => {
  test("should return unique kinds of string", () => {
    const stringKinds = kindsOfString();
    const set = new Set(stringKinds);
    expect(stringKinds.length).toBe(set.size);
  });
});

describe("kindsOfBoolean", () => {
  test("should return unique kinds of boolean", () => {
    const booleanKinds = kindsOfBoolean();
    const set = new Set(booleanKinds);
    expect(booleanKinds.length).toBe(set.size);
  });
});

describe("kindsOfNumber", () => {
  test("should return unique kinds of number", () => {
    const numberKinds = kindsOfNumber();
    const set = new Set(numberKinds);
    expect(numberKinds.length).toBe(set.size);
  });
});
