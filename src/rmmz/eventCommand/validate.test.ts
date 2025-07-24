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
describe("isCommandInputNumber", () => {
  test("Valid command", () => {
    const command = makeCommandInputNumber({
      variableId: 1,
      digits: 2,
    });
    expect(command).toSatisfy(isCommandInputNumber);
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
    expect(command).toSatisfy(isCommandShowMessage);
  });

  testInvalidPattern(isCommandShowMessage);
});
