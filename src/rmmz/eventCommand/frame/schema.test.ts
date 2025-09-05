import { describe, test, expect } from "vitest";
import { Ajv } from "ajv";
import SCHEMA_COMMAND_UNKNOWN from "./schema";
import type { EventCommandUnknown, EventCommandLike } from "./types";

const ajv = new Ajv({ strict: true });
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

    expect(validCommand).toSatisfy(isCommandLike);
  });
  test("returns true for valid EventCommandBase object", () => {
    const validCommand: EventCommandLike<number, [number]> = {
      code: 1,
      parameters: [6],
      indent: 0,
    };

    expect(validCommand).toSatisfy(isCommandLike);
  });

  test("returns false for null input", () => {
    expect(null).not.toSatisfy(isCommandLike);
  });

  test("returns false for non-object input", () => {
    expect(42).not.toSatisfy(isCommandLike);
    expect("string").not.toSatisfy(isCommandLike);
    expect(true).not.toSatisfy(isCommandLike);
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

    expect(invalidCommand1).not.toSatisfy(isCommandLike);
    expect(invalidCommand2).not.toSatisfy(isCommandLike);
    expect(invalidCommand3).not.toSatisfy(isCommandLike);
  });
});
