import { describe, test, expect } from "vitest";
import type {
  Command_ChangeActorProfile,
  Command_CommentHeader,
  Command_ShowChoices,
  Command_ShowMessageBody,
  EventCommand,
  PickCommandByParam,
  Command_ShowMessageHeader,
  Command_ChangeActorName,
  Command_ChangeActorNickName,
} from "@RpgTypes/rmmz";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  COMMENT_HEAD,
  makeCommandShowMessage,
  SHOW_CHOICES,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
} from "@RpgTypes/rmmz";
import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import type { TextCommandParameter } from "./extract/text/eventCommand";
import { extractTextFromEventCommands } from "./getTextFromCommand";

const MockJoinedText = "The quick\nbrown fox\njumps over" as const;

const createMockCommand = <Code extends PickCommandByParam<[string]>["code"]>(
  code: Code,
  textList = ["The quick", "brown fox", "jumps over"]
): {
  code: Code;
  indent: number;
  parameters: [string];
}[] =>
  textList.map((s) => ({
    code,
    indent: 0,
    parameters: [s],
  }));

const flattenExtractedText = (s: EventCommand[]) =>
  extractTextFromEventCommands(s).flat();

describe.skip("extractTextFromEventCommands", () => {
  describe("showMessage", () => {
    test("empty", () => {
      const command: Command_ShowMessageHeader = makeCommandShowMessage({
        speakerName: "abc",
      });
      const result = flattenExtractedText([command]);
      expect(result).toEqual([]);
    });
    test("single", () => {
      const command: [Command_ShowMessageHeader, Command_ShowMessageBody] = [
        makeCommandShowMessage({
          speakerName: "speaker",
        }),
        {
          code: SHOW_MESSAGE_BODY,
          parameters: ["message"],
          indent: 0,
        },
      ];
      const result = flattenExtractedText(command);
      const expected: TextCommandParameter[] = [
        {
          speaker: "speaker",
          code: SHOW_MESSAGE_BODY,
          value: "message",
          paramIndex: 0,
        },
      ];
      expect(result).toEqual(expected);
    });
    test("multi", () => {
      const command: Command_ShowMessageHeader = makeCommandShowMessage({
        speakerName: "speaker",
      });
      const bodies: Command_ShowMessageBody[] =
        createMockCommand(SHOW_MESSAGE_BODY);
      const result = flattenExtractedText([command, ...bodies]);
      const expected: TextCommandParameter[] = [
        {
          speaker: "speaker",
          code: SHOW_MESSAGE_BODY,
          value: MockJoinedText,
          paramIndex: 0,
        },
      ];
      expect(result).toEqual(expected);
    });
    test("multi with empty", () => {
      const textList = ["", "The quick", "brown fox", "jumps over"];
      const bodies: Command_ShowMessageBody[] = createMockCommand(
        SHOW_MESSAGE_BODY,
        textList
      );
      const command: Command_ShowMessageHeader = {
        code: SHOW_MESSAGE,
        parameters: ["", 0, 0, 0, "speaker"],
        indent: 0,
      };
      const result = flattenExtractedText([command, ...bodies]);
      const expected: TextCommandParameter[] = [
        {
          speaker: "speaker",
          code: SHOW_MESSAGE_BODY,
          value: textList.join("\n"),
          paramIndex: 0,
        },
      ];
      expect(result).toEqual(expected);
    });
  });
  describe("comment", () => {
    test("empty", () => {
      const command: Command_CommentHeader = {
        code: COMMENT_HEAD,
        parameters: [""],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: COMMENT_HEAD, value: "", paramIndex: 0 },
      ];
      expect(result).toEqual(expected);
      expect(result.length).toEqual(1);
    });
    test("single", () => {
      const command: Command_CommentHeader = {
        code: COMMENT_HEAD,
        parameters: ["comment"],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: COMMENT_HEAD, value: "comment", paramIndex: 0 },
      ];
      expect(result).toEqual(expected);
    });
    test.skip("multi", () => {
      const command: Command_CommentHeader = {
        code: COMMENT_HEAD,
        parameters: ["comment"],
        indent: 0,
      };
      const bodies: Command_CommentHeader[] = createMockCommand(COMMENT_HEAD);
      const result = flattenExtractedText([command, ...bodies]);
      const expected: CommandParameter<string>[] = [
        { code: COMMENT_HEAD, value: "comment", paramIndex: 0 },
        {
          code: COMMENT_HEAD,
          value: MockJoinedText,
          paramIndex: 0,
        },
      ];
      expect(result[1]).toEqual(expected[1]);
    });
  });

  describe("Character Modifications", () => {
    test("changeName", () => {
      const command: Command_ChangeActorName = {
        code: CHANGE_NAME,
        parameters: [1, "name"],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: CHANGE_NAME, value: "name", paramIndex: 1 },
      ];
      expect(result).toEqual(expected);
    });
    test("changeNickname", () => {
      const command: Command_ChangeActorNickName = {
        code: CHANGE_NICKNAME,
        parameters: [1, "name"],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: CHANGE_NICKNAME, value: "name", paramIndex: 1 },
      ];
      expect(result).toEqual(expected);
    });
    test("changeProfile", () => {
      const command: Command_ChangeActorProfile = {
        code: CHANGE_PROFILE,
        parameters: [1, "name"],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: CHANGE_PROFILE, value: "name", paramIndex: 1 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe("showChoices", () => {
    test("empty", () => {
      const command: Command_ShowChoices = {
        code: SHOW_CHOICES,
        parameters: [[], 0, 0, 0, 2],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      expect(result).toEqual([]);
      expect(result.length).toEqual(0);
    });
    test("showChoices", () => {
      const command: Command_ShowChoices = {
        code: SHOW_CHOICES,
        parameters: [["choice1", "choice2"], 0, 0, 0, 2],
        indent: 0,
      };
      const result = flattenExtractedText([command]);
      const expected: CommandParameter<string>[] = [
        { code: SHOW_CHOICES, value: "choice1", paramIndex: 0 },
        { code: SHOW_CHOICES, value: "choice2", paramIndex: 1 },
      ];
      expect(result).toEqual(expected);
    });
  });
});
