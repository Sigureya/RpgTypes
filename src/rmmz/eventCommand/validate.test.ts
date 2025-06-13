import { describe, test, expect } from "vitest";
import { makeCommandCommonEvent, type Command_CommonEvent } from "./commands";
import { makeCommandInputNumber } from "./commands/message/inputNumber/make";
import {
  makeCommandSetupChoice,
  makeCommandShowChoiceItem,
} from "./commands/message/setupChoice";
import { makeCommandShowMessage } from "./commands/message/showMessage/convert";
import {
  isCommandCommonEvent,
  isCommandInputNumber,
  isCommandShowChoiceItem,
  isCommandShowChoices,
  isCommandShowMessage,
} from "./validate";

const testInvalidPattern = (fn: (data: unknown) => boolean) => {
  test("Invalid command", () => {
    expect(fn(null)).toBe(false);
    expect(fn(undefined)).toBe(false);
    expect(fn({})).toBe(false);
    expect(fn({ code: "INVALID_CODE" })).toBe(false);
  });
};

describe("isCommandCommonEvent", () => {
  test("Valid command", () => {
    const command: Command_CommonEvent = makeCommandCommonEvent({
      eventId: 1,
    });
    expect(isCommandCommonEvent(command)).toBe(true);
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
    expect(isCommandShowChoices(command)).toBe(true);
  });
  testInvalidPattern(isCommandShowChoices);
});

describe("isCommandShowChoiceItem", () => {
  test("Valid command", () => {
    const command = makeCommandShowChoiceItem({
      index: 0,
      name: "Choice",
    });
    expect(isCommandShowChoiceItem(command)).toBe(true);
  });

  testInvalidPattern(isCommandShowChoiceItem);
});
describe("isCommandInputNumber", () => {
  test("Valid command", () => {
    const command = makeCommandInputNumber({
      variableId: 1,
      digits: 2,
    });
    expect(isCommandInputNumber(command)).toBe(true);
  });

  testInvalidPattern(isCommandInputNumber);
});

describe("isCommandShowMessage", () => {
  test("Valid command", () => {
    const command = makeCommandShowMessage({
      positionType: 0,
      facename: "Face",
      faceIndex: 0,
    });
    expect(isCommandShowMessage(command)).toBe(true);
  });

  testInvalidPattern(isCommandShowMessage);
});
