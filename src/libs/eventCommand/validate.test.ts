import { describe, test, expect } from "vitest";
import {
  isCommandCommonEvent,
  isCommandInputNumber,
  isCommandShowChoiceItem,
  isCommandShowChoices,
  isCommandShowMessage,
} from "./validate";
import * as Command from "./commands";
describe("isCommandCommonEvent", () => {
  test("Valid command", () => {
    const command: Command.Command2_CommonEvent =
      Command.makeCommand2_CommonEvent({
        eventId: 1,
      });
    expect(isCommandCommonEvent(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandCommonEvent(invalidCommand)).toBe(false);
  });
});

describe("isCommandShowChoices", () => {
  test("Valid command", () => {
    const command = Command.makeCommandSetupChoice({
      choices: [],
      cancelType: 0,
      defaultType: 0,
      positionType: 2,
      background: 0,
    });
    expect(isCommandShowChoices(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandShowChoices(invalidCommand)).toBe(false);
  });
});

describe("isCommandShowChoiceItem", () => {
  test("Valid command", () => {
    const command = Command.makeCommand2_ShowChoiceItem({
      index: 0,
      name: "Choice",
    });
    expect(isCommandShowChoiceItem(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandShowChoiceItem(invalidCommand)).toBe(false);
  });
});
describe("isCommandInputNumber", () => {
  test("Valid command", () => {
    const command = Command.makeCommandInputNumber({
      variableId: 1,
      digits: 2,
    });
    expect(isCommandInputNumber(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandInputNumber(invalidCommand)).toBe(false);
  });
});

describe("isCommandShowMessage", () => {
  test("Valid command", () => {
    const command = Command.makeCommandShowMessage({
      positionType: 0,
      facename: "Face",
      faceIndex: 0,
    });
    expect(isCommandShowMessage(command)).toBe(true);
  });

  test("Invalid command", () => {
    const invalidCommand = { code: "INVALID_CODE" };
    expect(isCommandShowMessage(invalidCommand)).toBe(false);
  });
});
