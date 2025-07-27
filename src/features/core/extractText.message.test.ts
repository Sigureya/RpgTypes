import { test, expect, describe } from "vitest";
import { createMessageGroup } from "@RpgTypes/features/core/eventCommand/commandGroup";
import type { Command_ShowMessageHeader, EventCommand } from "@RpgTypes/rmmz";
import {
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  SHOW_MESSAGE_BODY,
} from "@RpgTypes/rmmz";
import type { TextCommandParameter } from "./extract/text/eventCommand/types";
import { extractTextParamFromMessage } from "./extractGroupText";

const test2 = (command: EventCommand[], expected: TextCommandParameter) => {
  test("", () => {
    const group = createMessageGroup(command, 0);
    const result = extractTextParamFromMessage(group);
    expect(result satisfies typeof expected).toEqual(expected);
  });
};

describe("extractTextParamFromMessage", () => {
  describe("", () => {
    const commands = [
      makeCommandShowMessage({
        speakerName: "abc",
      }),
      makeCommandShowMessageBody("xxx"),
    ];
    const expected: TextCommandParameter = {
      speaker: "abc",
      code: SHOW_MESSAGE_BODY,
      value: "xxx",
      paramIndex: 0,
    };
    test2(commands, expected);
  });
  describe("", () => {
    const commands = [
      makeCommandShowMessage({
        speakerName: "abc",
      }),
      makeCommandShowMessageBody("xxx "),
      makeCommandShowMessageBody("yyy"),
    ];
    const expected: TextCommandParameter = {
      speaker: "abc",
      code: SHOW_MESSAGE_BODY,
      value: "xxx\nyyy",
      paramIndex: 0,
    };
    test2(commands, expected);
  });
  describe("", () => {
    const commands = [
      makeCommandShowMessage({
        speakerName: "abc",
      }),
      makeCommandShowMessageBody("xxx\nyyy"),
    ];
    const expected: TextCommandParameter = {
      speaker: "abc",
      code: SHOW_MESSAGE_BODY,
      value: "xxx\nyyy",
      paramIndex: 0,
    };
    test2(commands, expected);
  });
});
describe("", () => {
  const command: Command_ShowMessageHeader = makeCommandShowMessage({
    speakerName: "abc",
  });
  test("", () => {
    const group = createMessageGroup([command], 0);
    const result = extractTextParamFromMessage(group);
    expect(result).toEqual({
      speaker: "abc",
      code: SHOW_MESSAGE_BODY,
      value: "",
      paramIndex: 0,
    } satisfies typeof result);
  });
});
