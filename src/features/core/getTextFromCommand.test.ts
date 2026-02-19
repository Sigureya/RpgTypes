import { describe, test, expect } from "vitest";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  SHOW_CHOICES,
} from "@RpgTypes/libs/eventCommand";
import type {
  Command_ChangeActorProfile,
  Command_ShowChoices,
  Command_ChangeActorName,
  Command_ChangeActorNickName,
} from "@RpgTypes/rmmz";
import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import { extractTextFromEventCommands } from "./getTextFromCommand";

describe("extractTextFromEventCommands", () => {
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
