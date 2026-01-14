import { describe, expect, test } from "vitest";
import type {
  Command_CommentBody,
  Command_CommentHeader,
  Command_ShowChoices,
  EventCommand,
} from "@RpgTypes/rmmz";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  SHOW_CHOICES,
  SHOW_MESSAGE_BODY,
} from "@RpgTypes/rmmz";
import { normalizeEventCommands } from "./normarize";

describe("normarizeEventCommands", () => {
  test("should normalize SHOW_CHOICES command by trimming end spaces", () => {
    const commands: Command_ShowChoices[] = [
      {
        code: SHOW_CHOICES,
        indent: 0,
        parameters: [
          ["Choice 1   ", "Choice 2    ", "Choice 3", " Choice 4"],
          0,
          0,
          0,
          0,
        ],
      },
    ];
    const expected: Command_ShowChoices[] = [
      {
        code: SHOW_CHOICES,
        indent: 0,
        parameters: [
          ["Choice 1", "Choice 2", "Choice 3", " Choice 4"],
          0,
          0,
          0,
          0,
        ],
      },
    ];
    const result: EventCommand[] = normalizeEventCommands(commands);
    expect(result).toEqual(expected);
  });
  describe("message", () => {
    test("missing header", () => {
      const commands: EventCommand[] = [
        {
          code: 401,
          indent: 0,
          parameters: ["Hello World!"],
        },
      ];
      const result = normalizeEventCommands(commands);
      expect(result).toEqual([]);
    });
    test("trimming end spaces", () => {
      const commands: EventCommand[] = [
        {
          code: 101,
          indent: 0,
          parameters: ["face", 0, 0, 0, "speaker  "],
        },
        {
          code: 401,
          indent: 0,
          parameters: ["Hello World!   "],
        },
      ];
      const expected: EventCommand[] = [
        {
          code: 101,
          indent: 0,
          parameters: ["face", 0, 0, 0, "speaker"],
        },
        {
          code: 401,
          indent: 0,
          parameters: ["Hello World!"],
        },
      ];
      const result: EventCommand[] = normalizeEventCommands(commands);
      expect(result).toEqual(expected);
    });
    test("message with multiple SHOW_MESSAGE_BODY commands should be merged and trimmed", () => {
      const commands: EventCommand[] = [
        {
          code: 101,
          indent: 0,
          parameters: ["face", 0, 0, 0, "speaker\n"],
        },
        {
          code: SHOW_MESSAGE_BODY,
          indent: 0,
          parameters: ["xxx  "],
        },
        {
          code: SHOW_MESSAGE_BODY,
          indent: 0,
          parameters: ["yyy\n"],
        },
      ];
      const expected: EventCommand[] = [
        {
          code: 101,
          indent: 0,
          parameters: ["face", 0, 0, 0, "speaker"],
        },
        {
          code: SHOW_MESSAGE_BODY,
          indent: 0,
          parameters: [["xxx", "yyy"].join("\n")],
        },
      ];
      const result: EventCommand[] = normalizeEventCommands(commands);
      expect(result).toEqual(expected);
    });
  });
  describe("change name/nickname/profile", () => {
    test("should normalize by trimming end spaces", () => {
      const commands: EventCommand[] = [
        { code: CHANGE_NAME, indent: 0, parameters: [1, "New Name   "] },
        { code: CHANGE_PROFILE, indent: 0, parameters: [1, "New Profile   "] },
        {
          code: CHANGE_NICKNAME,
          indent: 0,
          parameters: [1, "New Nickname    "],
        },
      ];
      const expected: EventCommand[] = [
        { code: CHANGE_NAME, indent: 0, parameters: [1, "New Name"] },
        { code: CHANGE_PROFILE, indent: 0, parameters: [1, "New Profile"] },
        { code: CHANGE_NICKNAME, indent: 0, parameters: [1, "New Nickname"] },
      ];
      const result: EventCommand[] = normalizeEventCommands(commands);
      expect(result).toEqual(expected);
    });
  });
  describe("comment", () => {
    test("should normalize comment by merging header and body and trimming end spaces", () => {
      const commands: [Command_CommentHeader, Command_CommentBody] = [
        {
          code: 108,
          indent: 0,
          parameters: ["comment header"],
        },
        {
          code: 408,
          indent: 0,
          parameters: ["comment body   "],
        },
      ];
      const expected: EventCommand[] = [
        {
          code: 108,
          indent: 0,
          parameters: [["comment header", "comment body"].join("\n")],
        },
      ];
      const result: EventCommand[] = normalizeEventCommands(commands);
      expect(result).toEqual(expected);
    });
  });
});
