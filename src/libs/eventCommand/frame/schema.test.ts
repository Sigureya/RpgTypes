import { describe, test, expect } from "vitest";
import { Ajv } from "ajv";
import { SCHEMA_COMMAND_UNKNOWN } from "./schema";
import type { EventCommandUnknown, EventCommandLike2 } from "./types";

const ajv = new Ajv();
const cccc = ajv.compile(SCHEMA_COMMAND_UNKNOWN);

const isCommandLike = (data: unknown): data is EventCommandUnknown => {
  return cccc(data);
};

describe("isCommandLike", () => {
  test("returns true for valid EventCommandBase object", () => {
    const validCommand: EventCommandUnknown = {
      code: 1,
      parameters: [],
      indent: 0,
    };

    expect(isCommandLike(validCommand)).toBe(true);
  });
  test("returns true for valid EventCommandBase object", () => {
    const validCommand: EventCommandLike2<number, [number]> = {
      code: 1,
      parameters: [6],
      indent: 0,
    };

    expect(isCommandLike(validCommand)).toBe(true);
  });

  test("returns false for null input", () => {
    expect(isCommandLike(null)).toBe(false);
  });

  test("returns false for non-object input", () => {
    expect(isCommandLike(42)).toBe(false);
    expect(isCommandLike("string")).toBe(false);
    expect(isCommandLike(true)).toBe(false);
  });

  test("returns false for object with missing properties", () => {
    const invalidCommand = {
      code: 1,
      parameters: [],
    };

    expect(isCommandLike(invalidCommand)).toBe(false);
  });

  test("returns false for object with extra properties", () => {
    const invalidCommand = {
      code: 1,
      parameters: [],
      indent: 0,
      extra: "extra",
    };

    expect(isCommandLike(invalidCommand)).toBe(false);
  });

  test("returns false for object with incorrect property types", () => {
    const invalidCommand1 = {
      code: "1",
      parameters: [],
      indent: 0,
    };

    const invalidCommand2 = {
      code: 1,
      parameters: "not an array",
      indent: 0,
    };

    const invalidCommand3 = {
      code: 1,
      parameters: [],
      indent: "0",
    };

    expect(isCommandLike(invalidCommand1)).toBe(false);
    expect(isCommandLike(invalidCommand2)).toBe(false);
    expect(isCommandLike(invalidCommand3)).toBe(false);
  });
});
