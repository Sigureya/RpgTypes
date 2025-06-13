import { describe, test, expect } from "vitest";
import type {
  Command_CommonEvent,
  Command_ShowMessageHeader,
} from "@RpgTypes/eventCommand";
import {
  makeCommandCommonEvent,
  makeCommandShowMessage,
  type EventCommandLike2,
} from "@RpgTypes/eventCommand";
import { SHOW_MESSAGE } from "src/rpg";
import {
  cloneEventCommand,
  cloneParameters,
  isCloneableCommand,
} from "./clone";

const testCloneEventCommand = <P extends Array<number | boolean | string>>(
  command: EventCommandLike2<number, P>,
  expected: EventCommandLike2<number, P>
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
  describe("ShowMessage command", () => {
    const command = makeCommandShowMessage({
      facename: "face",
      faceIndex: 5,
      speakerName: "name",
      background: 0,
      positionType: 2,
    });
    testCloneEventCommand(command, {
      code: SHOW_MESSAGE,
      indent: 0,
      parameters: ["face", 5, 0, 2, "name"],
    } satisfies Command_ShowMessageHeader);
  });

  describe("CommonEvent command", () => {
    const command = makeCommandCommonEvent(
      {
        eventId: 6,
      },
      9
    );
    testCloneEventCommand(command, {
      code: 117,
      indent: 9,
      parameters: [6],
    } satisfies Command_CommonEvent);
  });
});
