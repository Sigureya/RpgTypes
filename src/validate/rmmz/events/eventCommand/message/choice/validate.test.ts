import { describe, test, expect } from "vitest";
import type { Command_ShowChoices } from "@RpgTypes/rmmz";
import validate from "./choiceValidate";

describe("validateChoiceCommand", () => {
  test("Valid command", () => {
    const command: Command_ShowChoices = {
      indent: 0,
      code: 102,
      parameters: [["Choice 1", "Choice 2", "Choice 3"], 0, 0, 2, 0],
    };
    expect(command).toSatisfy(validate);
  });
});
