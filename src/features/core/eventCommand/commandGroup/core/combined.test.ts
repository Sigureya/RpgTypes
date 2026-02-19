import { describe, test, expect } from "vitest";
import { SCRIPT_EVAL, SCRIPT_EVAL_BODY } from "@RpgTypes/libs/eventCommand";
import type { Command_ScriptBody, Command_ScriptHeader } from "@RpgTypes/rmmz";
import { CombinedEventCommandGroup } from "./combined";

const createScriptHeader = (text: string): Command_ScriptHeader => {
  return {
    code: SCRIPT_EVAL,
    parameters: [text],
    indent: 0,
  };
};

const createScriptBody = (text: string): Command_ScriptBody => {
  return {
    code: SCRIPT_EVAL_BODY,
    parameters: [text],
    indent: 0,
  };
};

describe("CombinedEventCommandGroup - Edge Cases", () => {
  test("Empty bodies array", () => {
    const header: Command_ScriptHeader = {
      code: SCRIPT_EVAL,
      parameters: ["Header"],
      indent: 0,
    };
    const group = new CombinedEventCommandGroup(header, []);
    expect(group.getBodyText()).toBe("Header"); // ボディが空の場合、ヘッダーのテキストのみを返す
    expect(group.normalizedCommands()).toEqual([createScriptHeader("Header")]);
  });

  test("Single body with special characters", () => {
    const header: Command_ScriptHeader = createScriptHeader("Header");
    const body: Command_ScriptBody = createScriptBody("Body\nText");
    const group = new CombinedEventCommandGroup(header, [body]);
    expect(group.getBodyText()).toBe("Header\nBody\nText"); // ヘッダーとボディが正しく結合される
    expect(group.mergedBody()).toEqual({
      code: SCRIPT_EVAL,
      indent: 0,
      parameters: ["Header\nBody\nText"],
    });
  });

  test("Multiple bodies with special characters", () => {
    const header: Command_ScriptHeader = createScriptHeader("Header");
    const bodies: Command_ScriptBody[] = [
      createScriptBody("Body1"),
      createScriptBody("Body2"),
    ];
    const group = new CombinedEventCommandGroup(header, bodies);
    const expected: Command_ScriptHeader = {
      code: SCRIPT_EVAL,
      indent: 0,
      parameters: ["Header\nBody1\nBody2"],
    };
    expect(group.mergedBody()).toEqual(expected);
    expect(group.getBodyText()).toBe("Header\nBody1\nBody2"); // ヘッダーと複数のボディが正しく結合される
  });
});
