import { describe, test, expect } from "vitest";
import { SHOW_CHOICES } from "@RpgTypes/libs/eventCommand";
import type { Command_ShowChoices } from "@RpgTypes/rmmz";
import { makeCommandSetupChoice } from "@RpgTypes/rmmz";
import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";
import { extractTextParamsFromChoice } from "./extractText";

describe("extractTextParamsFromChoice", () => {
  describe("", () => {
    const command: Command_ShowChoices = makeCommandSetupChoice({
      choices: [],
    });
    test("", () => {
      const result = extractTextParamsFromChoice(command);
      expect(result).toEqual([]);
    });
  });
  describe("", () => {
    const command: Command_ShowChoices = makeCommandSetupChoice({
      choices: ["choice1", "choice2"],
    });
    const expected: CommandParameter<string>[] = [
      { code: SHOW_CHOICES, value: "choice1", paramIndex: 0 },
      { code: SHOW_CHOICES, value: "choice2", paramIndex: 1 },
    ];
    test("", () => {
      const result = extractTextParamsFromChoice(command);
      expect(result).toEqual(expected);
    });
  });
});
