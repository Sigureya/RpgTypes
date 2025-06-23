import { describe, test, expect } from "vitest";
import { makeCommandControlTimer } from "./make";
import type { Command_ControlTimer, Paramobject_ControlTimer } from "./types";

describe("makeCommandControlTimer", () => {
  test("should create a command with default values", () => {
    const command = makeCommandControlTimer({});
    const expected: Command_ControlTimer = {
      code: 124,
      indent: 0,
      parameters: [0, 0],
    };
    expect(command).toEqual(expected);
  });

  test("should create a command with specified operation and time", () => {
    const params: Paramobject_ControlTimer = { operation: "minus", time: 10 };
    const command = makeCommandControlTimer(params);
    const expected: Command_ControlTimer = {
      code: 124,
      indent: 0,
      parameters: [1, 10],
    };
    expect(command).toEqual(expected);
  });

  test("should handle invalid operation gracefully", () => {
    const params: Paramobject_ControlTimer = {
      operation: "plus" as any,
      time: 5,
    };
    const command = makeCommandControlTimer(params);
    const expected: Command_ControlTimer = {
      code: 124,
      indent: 0,
      parameters: [0, 5],
    };
    expect(command).toEqual(expected);
  });
});
