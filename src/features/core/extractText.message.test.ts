import { test, expect, describe } from "vitest";
import { createMessageGroup } from "@RpgTypes/features/core/eventCommand/commandGroup";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "@RpgTypes/rmmz";
import {
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  SHOW_MESSAGE_BODY,
} from "@RpgTypes/rmmz";
import type { TextCommandParameter } from "./extract/text/eventCommand/types";
import { extractTextParamFromMessage } from "./extractGroupText";

describe("extractTextParamFromMessage", () => {
  test("single body", () => {
    const commands: [Command_ShowMessageHeader, Command_ShowMessageBody] = [
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
    const group = createMessageGroup(commands, 0);
    const result = extractTextParamFromMessage(group);
    expect(result).toEqual(expected);
  });
  test("mulit body", () => {
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
      value: ["xxx", "yyy"].join("\n"),
      paramIndex: 0,
    };
    const group = createMessageGroup(commands, 0);
    const result = extractTextParamFromMessage(group);
    expect(result).toEqual(expected);
  });
  test("text include nl", () => {
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

    const group = createMessageGroup(commands, 0);
    const result = extractTextParamFromMessage(group);
    expect(result).toEqual(expected);
  });
  test("missing body", () => {
    const command: Command_ShowMessageHeader = makeCommandShowMessage({
      speakerName: "abc",
    });
    const group = createMessageGroup([command], 0);
    const expected: TextCommandParameter = {
      speaker: "abc",
      code: SHOW_MESSAGE_BODY,
      value: "",
      paramIndex: 0,
    };
    const result = extractTextParamFromMessage(group);
    expect(result).toEqual(expected satisfies typeof result);
  });
});
