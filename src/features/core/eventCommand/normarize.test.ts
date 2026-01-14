import { describe, expect, test } from "vitest";
import type { Command_ShowChoices, EventCommand } from "@RpgTypes/rmmz";
import { normalizeEventCommands } from "./normarize";

describe("normarizeEventCommands", () => {
  test("should normalize SHOW_CHOICES command by trimming end spaces", () => {
    const commands: Command_ShowChoices[] = [
      {
        code: 102,
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
        code: 102,
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
    test("message", () => {
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
  });
});
