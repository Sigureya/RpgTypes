import { describe, expect, test } from "vitest";
import { makeMoveCommandMove, makeMoveCommandsSimple } from "./make";
import {
  ROUTE_MOVE_DOWN,
  ROUTE_MOVE_LEFT,
  ROUTE_MOVE_RIGHT,
  ROUTE_MOVE_UP,
  ROUTE_MOVE_LOWER_L,
  ROUTE_MOVE_LOWER_R,
  ROUTE_MOVE_UPPER_L,
  ROUTE_MOVE_UPPER_R,
  ROUTE_MOVE_RANDOM,
  ROUTE_MOVE_TOWARD,
  ROUTE_MOVE_AWAY,
  ROUTE_MOVE_FORWARD,
  ROUTE_MOVE_BACKWARD,
} from "./types";
import type { MoveRouteLabels2 } from "./types/labels";
import type { MoveCommand_Move } from "./types/nonParamCommnads";

interface TestCase {
  input: keyof MoveRouteLabels2;
  expected: MoveCommand_Move["code"];
}

const runTestCases = (testCase: TestCase) => {
  describe(`case:${testCase.input} ,code:${testCase.expected}`, () => {
    test(`makeMoveCommandMove`, () => {
      const expected: MoveCommand_Move = {
        code: testCase.expected,
      };
      const result = makeMoveCommandMove(testCase.input);
      expect(result).toEqual(expected);
    });
    test(`makeMoveCommandsSimple`, () => {
      const expected: MoveCommand_Move[] = [{ code: testCase.expected }];
      const result = makeMoveCommandsSimple([testCase.input]);
      expect(result).toEqual(expected);
    });
  });
};

const testCases: TestCase[] = [
  { input: "moveDown", expected: ROUTE_MOVE_DOWN },
  { input: "moveLeft", expected: ROUTE_MOVE_LEFT },
  { input: "moveRight", expected: ROUTE_MOVE_RIGHT },
  { input: "moveUp", expected: ROUTE_MOVE_UP },
  { input: "moveLowerLeft", expected: ROUTE_MOVE_LOWER_L },
  { input: "moveLowerRight", expected: ROUTE_MOVE_LOWER_R },
  { input: "moveUpperLeft", expected: ROUTE_MOVE_UPPER_L },
  { input: "moveUpperRight", expected: ROUTE_MOVE_UPPER_R },
  { input: "moveRandom", expected: ROUTE_MOVE_RANDOM },
  { input: "moveToward", expected: ROUTE_MOVE_TOWARD },
  { input: "moveAway", expected: ROUTE_MOVE_AWAY },
  { input: "moveForward", expected: ROUTE_MOVE_FORWARD },
  { input: "moveBackward", expected: ROUTE_MOVE_BACKWARD },
];

describe("MoveCommand_Move", () => {
  testCases.forEach(runTestCases);
  test("makeMoveCommandsSimple with multiple inputs", () => {
    const input = testCases.map((testCase) => testCase.input);
    const expected = testCases.map(
      (testCase): MoveCommand_Move => ({ code: testCase.expected }),
    );
    const result = makeMoveCommandsSimple(input);
    expect(result).toEqual(expected);
  });
});
