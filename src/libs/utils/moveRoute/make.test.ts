import { describe, expect, test } from "vitest";
import {
  makeMoveCommandChangeBlendMode,
  makeMoveCommandChangeFrequency,
  makeMoveCommandChangeImage,
  makeMoveCommandChangeOpacity,
  makeMoveCommandChangeSpeed,
  makeMoveCommandJump,
  makeMoveCommandPlaySE,
  makeMoveCommandScript,
  makeMoveCommandSwitchOff,
  makeMoveCommandSwitchOn,
  makeMoveCommandWait,
} from "./make";
import {
  ROUTE_CHANGE_BLEND_MODE,
  ROUTE_CHANGE_FREQ,
  ROUTE_CHANGE_IMAGE,
  ROUTE_CHANGE_OPACITY,
  ROUTE_CHANGE_SPEED,
  ROUTE_JUMP,
  ROUTE_PLAY_SE,
  ROUTE_SCRIPT,
  ROUTE_SWITCH_OFF,
  ROUTE_SWITCH_ON,
  ROUTE_WAIT,
} from "./types";
import type {
  MoveRouteCommand_ChangeBlendMode,
  MoveRouteCommand_ChangeFrequency,
  MoveRouteCommand_ChangeImage,
  MoveRouteCommand_ChangeOpacity,
  MoveRouteCommand_ChangeSpeed,
  MoveRouteCommand_Jump,
  MoveRouteCommand_PlaySE,
  MoveRouteCommand_Script,
  MoveRouteCommand_SwitchOff,
  MoveRouteCommand_SwitchOn,
  MoveRouteCommand_Wait,
} from "./types/paramedCommands";

describe("makeMoveCommand", () => {
  test("makeMoveCommandJump", () => {
    const x = 5;
    const y = 10;
    const expected: MoveRouteCommand_Jump = {
      code: ROUTE_JUMP,
      parameters: [x, y],
    };
    const result = makeMoveCommandJump(x, y);
    expect(result).toEqual(expected);
  });

  test("makeMoveCommandWait", () => {
    const expected: MoveRouteCommand_Wait = {
      code: ROUTE_WAIT,
      parameters: [30],
    };
    const result = makeMoveCommandWait(30);
    expect(result).toEqual(expected);
  });

  test("makeMoveCommandSwitchOn", () => {
    const expected: MoveRouteCommand_SwitchOn = {
      code: ROUTE_SWITCH_ON,
      parameters: [7],
    };
    const result = makeMoveCommandSwitchOn(7);
    expect(result).toEqual(expected);
  });

  test("makeMoveCommandSwitchOff", () => {
    const expected: MoveRouteCommand_SwitchOff = {
      code: ROUTE_SWITCH_OFF,
      parameters: [7],
    };
    const result = makeMoveCommandSwitchOff(7);
    expect(result).toEqual(expected);
  });

  test("makeMoveCommandChangeSpeed", () => {
    const expected: MoveRouteCommand_ChangeSpeed = {
      code: ROUTE_CHANGE_SPEED,
      parameters: [5],
    };
    const result = makeMoveCommandChangeSpeed(5);
    expect(result).toEqual(expected);
  });

  test("makeMoveCommandChangeFrequency", () => {
    const expected: MoveRouteCommand_ChangeFrequency = {
      code: ROUTE_CHANGE_FREQ,
      parameters: [4],
    };
    const result = makeMoveCommandChangeFrequency(4);
    expect(result).toEqual(expected);
  });

  test("makeMoveCommandChangeImage", () => {
    const expected: MoveRouteCommand_ChangeImage = {
      code: ROUTE_CHANGE_IMAGE,
      parameters: ["Actor1", 3],
    };
    const result = makeMoveCommandChangeImage("Actor1", 3);
    expect(result).toEqual(expected);
  });

  test("makeMoveCommandChangeOpacity", () => {
    const expected: MoveRouteCommand_ChangeOpacity = {
      code: ROUTE_CHANGE_OPACITY,
      parameters: [128],
    };
    const result = makeMoveCommandChangeOpacity(128);
    expect(result).toEqual(expected);
  });

  test("makeMoveCommandChangeBlendMode", () => {
    const expected: MoveRouteCommand_ChangeBlendMode = {
      code: ROUTE_CHANGE_BLEND_MODE,
      parameters: [2],
    };
    const result = makeMoveCommandChangeBlendMode(2);
    expect(result).toEqual(expected);
  });

  test("makeMoveCommandPlaySE", () => {
    const se = { name: "bell", volume: 90, pitch: 100, pan: 0 };
    const expected: MoveRouteCommand_PlaySE<typeof se> = {
      code: ROUTE_PLAY_SE,
      parameters: [se],
    };
    const result = makeMoveCommandPlaySE(se);
    expect(result).toEqual(expected);
    expect(result.parameters[0]).toBe(se);
  });

  test("makeMoveCommandScript", () => {
    const expected: MoveRouteCommand_Script = {
      code: ROUTE_SCRIPT,
      parameters: ["this.jump(1, 1)"],
    };
    const result = makeMoveCommandScript("this.jump(1, 1)");
    expect(result).toEqual(expected);
  });
});
