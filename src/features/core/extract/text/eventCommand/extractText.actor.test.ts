import { describe, test, expect } from "vitest";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
} from "@RpgTypes/libs/eventCommand";
import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "@RpgTypes/rmmz/eventCommand";
import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/utils/pickParam";
import { extractTextFromActorCommand } from "./extractText";

describe("extractTextFromActorCommand", () => {
  test("changeName", () => {
    const command: Command_ChangeActorName = {
      code: CHANGE_NAME,
      parameters: [1, "name"],
      indent: 0,
    };
    const expected: CommandParameter<string> = {
      code: CHANGE_NAME,
      value: "name",
      paramIndex: 1,
    };
    const result = extractTextFromActorCommand(command);
    expect(result).toEqual(expected);
  });
  test("changeNickname", () => {
    const command: Command_ChangeActorNickName = {
      code: CHANGE_NICKNAME,
      parameters: [1, "name"],
      indent: 0,
    };
    const expected: CommandParameter<string> = {
      code: CHANGE_NICKNAME,
      value: "name",
      paramIndex: 1,
    };
    const result = extractTextFromActorCommand(command);
    expect(result).toEqual(expected);
  });
  test("changeProfile", () => {
    const command: Command_ChangeActorProfile = {
      code: CHANGE_PROFILE,
      parameters: [1, "name"],
      indent: 0,
    };
    const expected: CommandParameter<string> = {
      code: CHANGE_PROFILE,
      value: "name",
      paramIndex: 1,
    };
    const result = extractTextFromActorCommand(command);
    expect(result).toEqual(expected);
  });
});
