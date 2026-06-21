import { describe, test, expect } from "vitest";
import type {
  Command_ChangeActorName,
  Command_ChangeActorProfile,
  Command_ChangeActorNickName,
} from "@RpgTypes/rmmz";
import { isCommandChangeActorText } from "./varidate";

describe("isActorTextCommand", () => {
  test("Change Actor Name", () => {
    const command: Command_ChangeActorName = {
      indent: 0,
      code: 320,
      parameters: [1, "New Name"],
    };
    expect(command).toSatisfy(isCommandChangeActorText);
  });

  test("Change Actor Profile", () => {
    const command: Command_ChangeActorProfile = {
      indent: 0,
      code: 325,
      parameters: [6, "New Profile Text"],
    };
    expect(command).toSatisfy(isCommandChangeActorText);
  });

  test("Change Actor Nickname", () => {
    const command: Command_ChangeActorNickName = {
      indent: 0,
      code: 324,
      parameters: [5, "New Nickname"],
    };
    expect(command).toSatisfy(isCommandChangeActorText);
  });
});
