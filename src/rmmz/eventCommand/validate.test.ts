import { describe, test, expect } from "vitest";
import type { Command_CommonEvent } from "./commands";
import { makeCommandCommonEvent } from "./commands";
import { isCommandCommonEvent } from "./validate";

const testInvalidPattern = (fn: (data: unknown) => boolean) => {
  test("Invalid command", () => {
    expect(null).not.toSatisfy(fn);
    expect(undefined).not.toSatisfy(fn);
    expect({}).not.toSatisfy(fn);
    expect({ code: "INVALID_CODE" }).not.toSatisfy(fn);
  });
};

describe("isCommandCommonEvent", () => {
  test("Valid command", () => {
    const command: Command_CommonEvent = makeCommandCommonEvent({
      eventId: 1,
    });
    expect(command).toSatisfy(isCommandCommonEvent);
  });
  testInvalidPattern(isCommandCommonEvent);
});
