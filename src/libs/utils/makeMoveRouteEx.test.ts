import { describe, expect, test } from "vitest";
import type { MoveRouteCommand } from "./makeMoveRouteEx";
import { makeMoveCommands } from "./makeMoveRouteEx";
import type { MoveRouteMakeExArray } from "./moveRoute";
import {
  ROUTE_CHANGE_BLEND_MODE,
  ROUTE_CHANGE_FREQ,
  ROUTE_CHANGE_IMAGE,
  ROUTE_CHANGE_OPACITY,
  ROUTE_CHANGE_SPEED,
  ROUTE_JUMP,
  ROUTE_MOVE_BACKWARD,
  ROUTE_MOVE_FORWARD,
  ROUTE_PLAY_SE,
  ROUTE_SCRIPT,
  ROUTE_SWITCH_OFF,
  ROUTE_SWITCH_ON,
  ROUTE_TURN_RIGHT,
  ROUTE_WAIT,
} from "./moveRoute";
import type { AudioFileParams } from "./types";

interface TestCase {
  name: string;
  input: MoveRouteMakeExArray<AudioFileParams>[];
  expected: MoveRouteCommand[];
}

const runTestCases = (testCase: TestCase) => {
  test(testCase.name, () => {
    const result = makeMoveCommands(testCase.input);
    expect(result).toEqual(testCase.expected);
  });
};

const testCases: TestCase[] = [
  {
    name: "empty input",
    input: [],
    expected: [],
  },
  {
    name: "single forward move",
    input: [["moveForward", 1]],
    expected: [{ code: ROUTE_MOVE_FORWARD }],
  },
  {
    name: "single forward move by code",
    input: [[ROUTE_MOVE_FORWARD, 1]],
    expected: [{ code: ROUTE_MOVE_FORWARD }],
  },
  {
    name: "single moveBackward move",
    input: [["moveBackward", 3]],
    expected: [
      { code: ROUTE_MOVE_BACKWARD },
      { code: ROUTE_MOVE_BACKWARD },
      { code: ROUTE_MOVE_BACKWARD },
    ],
  },
  {
    name: "single moveBackward move by code",
    input: [[ROUTE_MOVE_BACKWARD, 3]],
    expected: [
      { code: ROUTE_MOVE_BACKWARD },
      { code: ROUTE_MOVE_BACKWARD },
      { code: ROUTE_MOVE_BACKWARD },
    ],
  },
  {
    name: "turn direction command",
    input: [["turnRight", 2]],
    expected: [{ code: ROUTE_TURN_RIGHT }, { code: ROUTE_TURN_RIGHT }],
  },
  {
    name: "turn direction command by code",
    input: [[ROUTE_TURN_RIGHT, 2]],
    expected: [{ code: ROUTE_TURN_RIGHT }, { code: ROUTE_TURN_RIGHT }],
  },
  {
    name: "jump command",
    input: [["jump", 3, 5]],
    expected: [{ code: ROUTE_JUMP, parameters: [3, 5] }],
  },
  {
    name: "jump command by code",
    input: [[ROUTE_JUMP, 3, 5]],
    expected: [{ code: ROUTE_JUMP, parameters: [3, 5] }],
  },
  {
    name: "wait command",
    input: [["wait", 30]],
    expected: [{ code: ROUTE_WAIT, parameters: [30] }],
  },
  {
    name: "wait command by code",
    input: [[ROUTE_WAIT, 30]],
    expected: [{ code: ROUTE_WAIT, parameters: [30] }],
  },
  {
    name: "switch on command",
    input: [["switchOn", 7]],
    expected: [{ code: ROUTE_SWITCH_ON, parameters: [7] }],
  },
  {
    name: "switch on command by code",
    input: [[ROUTE_SWITCH_ON, 7]],
    expected: [{ code: ROUTE_SWITCH_ON, parameters: [7] }],
  },
  {
    name: "switch off command",
    input: [["switchOff", 7]],
    expected: [{ code: ROUTE_SWITCH_OFF, parameters: [7] }],
  },
  {
    name: "switch off command by code",
    input: [[ROUTE_SWITCH_OFF, 7]],
    expected: [{ code: ROUTE_SWITCH_OFF, parameters: [7] }],
  },
  {
    name: "change speed command",
    input: [["changeSpeed", 5]],
    expected: [{ code: ROUTE_CHANGE_SPEED, parameters: [5] }],
  },
  {
    name: "change speed command by code",
    input: [[ROUTE_CHANGE_SPEED, 5]],
    expected: [{ code: ROUTE_CHANGE_SPEED, parameters: [5] }],
  },
  {
    name: "change frequency command",
    input: [["changeFrequency", 4]],
    expected: [{ code: ROUTE_CHANGE_FREQ, parameters: [4] }],
  },
  {
    name: "change frequency command by code",
    input: [[ROUTE_CHANGE_FREQ, 4]],
    expected: [{ code: ROUTE_CHANGE_FREQ, parameters: [4] }],
  },
  {
    name: "change image command",
    input: [["changeImage", "Actor1", 3]],
    expected: [{ code: ROUTE_CHANGE_IMAGE, parameters: ["Actor1", 3] }],
  },
  {
    name: "change image command by code",
    input: [[ROUTE_CHANGE_IMAGE, "Actor1", 3]],
    expected: [{ code: ROUTE_CHANGE_IMAGE, parameters: ["Actor1", 3] }],
  },
  {
    name: "change opacity command",
    input: [["changeOpacity", 128]],
    expected: [{ code: ROUTE_CHANGE_OPACITY, parameters: [128] }],
  },
  {
    name: "change opacity command by code",
    input: [[ROUTE_CHANGE_OPACITY, 128]],
    expected: [{ code: ROUTE_CHANGE_OPACITY, parameters: [128] }],
  },
  {
    name: "change blend mode command",
    input: [["changeBlendMode", 2]],
    expected: [{ code: ROUTE_CHANGE_BLEND_MODE, parameters: [2] }],
  },
  {
    name: "change blend mode command by code",
    input: [[ROUTE_CHANGE_BLEND_MODE, 2]],
    expected: [{ code: ROUTE_CHANGE_BLEND_MODE, parameters: [2] }],
  },
  {
    name: "play sound effect command",
    input: [["playSe", { name: "bell", volume: 90, pitch: 100, pan: 0 }]],
    expected: [
      {
        code: ROUTE_PLAY_SE,
        parameters: [{ name: "bell", volume: 90, pitch: 100, pan: 0 }],
      },
    ],
  },
  {
    name: "play sound effect command by code",
    input: [[ROUTE_PLAY_SE, { name: "bell", volume: 90, pitch: 100, pan: 0 }]],
    expected: [
      {
        code: ROUTE_PLAY_SE,
        parameters: [{ name: "bell", volume: 90, pitch: 100, pan: 0 }],
      },
    ],
  },
  {
    name: "script command",
    input: [["script", "this.jump(1, 1)"]],
    expected: [{ code: ROUTE_SCRIPT, parameters: ["this.jump(1, 1)"] }],
  },
  {
    name: "script command by code",
    input: [[ROUTE_SCRIPT, "this.jump(1, 1)"]],
    expected: [{ code: ROUTE_SCRIPT, parameters: ["this.jump(1, 1)"] }],
  },
  {
    name: "mixed commands",
    input: [
      ["moveForward", 2],
      ["wait", 30],
      ["turnRight", 1],
      ["jump", 2, 3],
    ],
    expected: [
      { code: ROUTE_MOVE_FORWARD },
      { code: ROUTE_MOVE_FORWARD },
      { code: ROUTE_WAIT, parameters: [30] },
      { code: ROUTE_TURN_RIGHT },
      { code: ROUTE_JUMP, parameters: [2, 3] },
    ],
  },
];

describe("makeMoveCommands", () => {
  testCases.forEach(runTestCases);
});
