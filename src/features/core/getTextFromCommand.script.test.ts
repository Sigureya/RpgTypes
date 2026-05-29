import { describe, expect, test } from "vitest";
import type { Command_ScriptHeader } from "@RpgTypes/rmmz";
import type { TextCommandParameter } from "./extract";
import { extractTextFromEventCommands } from "./getTextFromCommand";

describe("extractTextFromEventCommands", () => {
  test("empty", () => {
    const result = extractTextFromEventCommands([]);
    expect(result).toEqual([]);
  });
  test("non text command", () => {
    const command: Command_ScriptHeader = {
      code: 355,
      parameters: ["not a script command"],
      indent: 0,
    };
    const result = extractTextFromEventCommands([command]);
    expect(result).toEqual([]);
  });
  test("", () => {
    const command: Command_ScriptHeader = {
      code: 355,
      parameters: [`console.log("xyz");`],
      indent: 0,
    };
    const result = extractTextFromEventCommands([command]);
    const expected: TextCommandParameter[] = [
      {
        code: 355,
        value: `console.log("xyz");`,
        paramIndex: 0,
      },
    ];
    expect(result).toEqual(expected);
  });
  test("", () => {
    const commands: Command_ScriptHeader = {
      code: 355,
      parameters: ["console.log(`xyz`);"],
      indent: 0,
    };
    const result = extractTextFromEventCommands([commands]);
    const expected: TextCommandParameter[] = [
      {
        code: 355,
        value: "console.log(`xyz`);",
        paramIndex: 0,
      },
    ];
    expect(result).toEqual(expected);
  });
  test("", () => {
    const command: Command_ScriptHeader = {
      code: 355,
      parameters: ["console.log('xyz');"],
      indent: 0,
    };
    const result = extractTextFromEventCommands([command]);
    const expected: TextCommandParameter[] = [
      {
        code: 355,
        value: "console.log('xyz');",
        paramIndex: 0,
      },
    ];
    expect(result).toEqual(expected);
  });
});
