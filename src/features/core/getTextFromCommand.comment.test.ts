import { describe, test, expect } from "vitest";
import { COMMENT_HEAD } from "@RpgTypes/libs/eventCommand";
import type { Command_CommentHeader } from "@RpgTypes/rmmz";
import { makeCommandCommentHeader } from "@RpgTypes/rmmz";
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
        makeCommandCommentHeader(text),
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
});
