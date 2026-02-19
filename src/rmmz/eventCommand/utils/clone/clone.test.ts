import { describe, test, expect } from "vitest";
import type { EventCommandLike } from "@RpgTypes/libs/eventCommand";
import type { Command_CommonEvent } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandCommonEvent } from "@RpgTypes/rmmz/eventCommand";
import {
  cloneEventCommand,
  cloneParameters,
  isCloneableCommand,
} from "./clone";

const testCloneEventCommand = <P extends Array<number | boolean | string>>(
  command: EventCommandLike<number, P>,
  expected: EventCommandLike<number, P>,
) => {
  test("should be cloneable (isCloneableCommand returns true)", () => {
    expect(isCloneableCommand(command)).toBe(true);
  });
  test("cloneParameters returns a deep-equal but different array", () => {
    const param = cloneParameters(command.parameters);
    expect(param).toEqual(command.parameters);
    expect(param).not.toBe(command.parameters);
  });
  test("cloneEventCommand returns a deep-equal but different object", () => {
    const command2 = cloneEventCommand(command);
    expect(command2).toEqual(command);
    expect(command2).not.toBe(command);
    expect(command2.parameters).not.toBe(command.parameters);
  });
  test("cloneEventCommand returns expected structure", () => {
    const command2 = cloneEventCommand(command);
    expect(command2).toEqual(expected);
    expect(command2).not.toBe(expected);
    expect(command2.parameters).not.toBe(expected.parameters);
  });
};

describe("cloneEventCommand utility functions", () => {
  // describe("ShowMessage command", () => {
  //   const command = makeCommandShowMessage({
  //     facename: "face",
  //     faceIndex: 5,
  //     speakerName: "name",
  //     background: 0,
  //     positionType: 2,
  //   });
  //   testCloneEventCommand(command, {
  //     code: SHOW_MESSAGE,
  //     indent: 0,
  //     parameters: ["face", 5, 0, 2, "name"],
  //   } satisfies Command_ShowMessageHeader);
  // });

  describe("CommonEvent command", () => {
    const command = makeCommandCommonEvent(
      {
        eventId: 6,
      },
      9,
    );
    testCloneEventCommand(command, {
      code: 117,
      indent: 9,
      parameters: [6],
    } satisfies Command_CommonEvent);
  });
});
