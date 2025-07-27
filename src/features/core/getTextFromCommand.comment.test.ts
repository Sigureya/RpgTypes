import { describe, test, expect } from "vitest";
import type { Command_CommentHeader, EventCommand } from "@RpgTypes/rmmz";
import { COMMENT_HEAD, makeCommandCommentHeader } from "@RpgTypes/rmmz";
import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import { extractTextFromEventCommands } from "./getTextFromCommand";

const flattenExtractedText = (s: EventCommand[]) =>
  extractTextFromEventCommands(s).flat();

describe("extractTextFromEventCommands", () => {
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
      const result = flattenExtractedText([command, ...bodies]);
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
