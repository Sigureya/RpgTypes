import { describe, test, expect } from "vitest";
import { kindsOfBoolean, kindsOfNumber, kindsOfString } from "./kindOfType";

const SELECT = "select" as const;

describe("kindsOfString", () => {
  test("returns unique string kinds", () => {
    const stringKinds = kindsOfString();
    const set = new Set(stringKinds);
    expect(stringKinds.length).toBe(set.size);
  });
  test("includes 'select' in string kinds", () => {
    expect(kindsOfString()).toContain(SELECT);
  });
});

describe("kindsOfNumber", () => {
  const numberKinds = kindsOfNumber();
  const set = new Set(numberKinds);
  test("returns unique number kinds", () => {
    expect(numberKinds.length).toBe(set.size);
  });
  test("includes 'select' in number kinds", () => {
    expect(numberKinds).toContain(SELECT);
  });
});

describe("kindsOfBoolean", () => {
  test("returns only 'boolean' as boolean kind", () => {
    expect(kindsOfBoolean()).toEqual(["boolean"]);
  });
});
