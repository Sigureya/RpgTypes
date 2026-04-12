import { describe, test, expect } from "vitest";
import { makeCommandCommonEvent, type Command_CommonEvent } from "./commands";
import {
  makeCommandSetupChoice,
  makeCommandShowChoiceItem,
} from "./commands/message/setupChoice";
import {
  isCommandCommonEvent,
  isCommandShowChoiceItem,
  isCommandShowChoices,
} from "./validate";

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

describe("isCommandShowChoices", () => {
  test("Valid command", () => {
    const command = makeCommandSetupChoice({
      choices: [],
      cancelType: 0,
      defaultType: 0,
      positionType: 2,
      background: 0,
    });
    expect(command).toSatisfy(isCommandShowChoices);
  });
  testInvalidPattern(isCommandShowChoices);
});

describe("isCommandShowChoiceItem", () => {
  test("Valid command", () => {
    const command = makeCommandShowChoiceItem({
      index: 0,
      name: "Choice",
    });
    expect(command).toSatisfy(isCommandShowChoiceItem);
  });

  testInvalidPattern(isCommandShowChoiceItem);
});
