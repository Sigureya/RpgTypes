import { describe, test, expect } from "vitest";
import type {
  Command_ChangeActorProfile,
  Command_CommentHeader,
  Command_ShowChoices,
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  ExtractCommandByParam,
} from "@RpgTypes/rmmz";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  COMMENT_HEAD,
  makeCommandCommentHeader,
  SHOW_CHOICES,
} from "@RpgTypes/rmmz";
import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import { extractTextFromEventCommands } from "./getTextFromCommand";

describe("extractTextFromEventCommands", () => {
  describe("comment", () => {
    test("empty", () => {
      const command: Command_CommentHeader = {
        code: COMMENT_HEAD,
        parameters: [""],
        indent: 0,
      };
      const result = extractTextFromEventCommands([command]);
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
      const result = extractTextFromEventCommands([command]);
      const expected: CommandParameter<string>[] = [
        { code: COMMENT_HEAD, value: "comment", paramIndex: 0 },
      ];
      expect(result).toEqual(expected);
    });
    test("multi", () => {
      const command: Command_CommentHeader = {
        code: COMMENT_HEAD,
        parameters: ["comment"],
        indent: 0,
      };
      const mockTexts = ["aaa", "bbb", "ccc"];
      const bodies: Command_CommentHeader[] = mockTexts.map((text) =>
        makeCommandCommentHeader(text)
      );
      const result = extractTextFromEventCommands([command, ...bodies]);
      const expected: CommandParameter<string>[] = [
        { code: COMMENT_HEAD, value: "comment", paramIndex: 0 },
        { code: COMMENT_HEAD, value: "aaa", paramIndex: 0 },
        { code: COMMENT_HEAD, value: "bbb", paramIndex: 0 },
        { code: COMMENT_HEAD, value: "ccc", paramIndex: 0 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe("Character Modifications", () => {
    test("changeName", () => {
      const command: Command_ChangeActorName = {
        code: CHANGE_NAME,
        parameters: [1, "name"],
        indent: 0,
      };
      const result = extractTextFromEventCommands([command]);
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
      const result = extractTextFromEventCommands([command]);
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
      const result = extractTextFromEventCommands([command]);
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
      const result = extractTextFromEventCommands([command]);
      expect(result).toEqual([]);
      expect(result.length).toEqual(0);
    });
    test("showChoices", () => {
      const command: Command_ShowChoices = {
        code: SHOW_CHOICES,
        parameters: [["choice1", "choice2"], 0, 0, 0, 2],
        indent: 0,
      };
      const result = extractTextFromEventCommands([command]);
      const expected: CommandParameter<string>[] = [
        { code: SHOW_CHOICES, value: "choice1", paramIndex: 0 },
        { code: SHOW_CHOICES, value: "choice2", paramIndex: 1 },
      ];
      expect(result).toEqual(expected);
    });
  });
});
