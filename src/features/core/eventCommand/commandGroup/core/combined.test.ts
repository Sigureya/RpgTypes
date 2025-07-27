import { describe, test, expect } from "vitest";
import type { Command_ScriptBody, Command_ScriptHeader } from "@RpgTypes/rmmz";
import {
  createEventCommand,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
} from "@RpgTypes/rmmz";
import { CombinedEventCommandGroup } from "./combined";

describe("CombinedEventCommandGroup - Edge Cases", () => {
  test("Empty bodies array", () => {
    const header: Command_ScriptHeader = createEventCommand(SCRIPT_EVAL, [
      "Header",
    ]);
    const group = new CombinedEventCommandGroup(header, []);
    expect(group.getBodyText()).toBe("Header"); // ボディが空の場合、ヘッダーのテキストのみを返す
    expect(group.normalizedCommands()).toEqual([
      createEventCommand(SCRIPT_EVAL, ["Header"]),
    ]);
  });

  test("Single body with special characters", () => {
    const header: Command_ScriptHeader = createEventCommand(SCRIPT_EVAL, [
      "Header",
    ]);
    const body: Command_ScriptBody = createEventCommand(SCRIPT_EVAL_BODY, [
      "Body\nText",
    ]);
    const group = new CombinedEventCommandGroup(header, [body]);
    expect(group.getBodyText()).toBe("Header\nBody\nText"); // ヘッダーとボディが正しく結合される
    expect(group.mergedBody()).toEqual({
      code: SCRIPT_EVAL,
      indent: 0,
      parameters: ["Header\nBody\nText"],
    });
  });

  test("Multiple bodies with special characters", () => {
    const header: Command_ScriptHeader = createEventCommand(SCRIPT_EVAL, [
      "Header",
    ]);
    const bodies: Command_ScriptBody[] = [
      createEventCommand(SCRIPT_EVAL_BODY, ["Body1"]),
      createEventCommand(SCRIPT_EVAL_BODY, ["Body2"]),
    ];
    const group = new CombinedEventCommandGroup(header, bodies);
    expect(group.getBodyText()).toBe("Header\nBody1\nBody2"); // ヘッダーと複数のボディが正しく結合される
    expect(group.mergedBody()).toEqual({
      code: SCRIPT_EVAL,
      indent: 0,
      parameters: ["Header\nBody1\nBody2"],
    });
  });
});
