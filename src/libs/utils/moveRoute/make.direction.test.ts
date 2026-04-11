import { describe, expect, test } from "vitest";
import { makeMoveCommandDirection, makeMoveCommandsSimple } from "./make";
import {
  ROUTE_TURN_180D,
  ROUTE_TURN_90D_L,
  ROUTE_TURN_90D_R,
  ROUTE_TURN_90D_R_L,
  ROUTE_TURN_AWAY,
  ROUTE_TURN_DOWN,
  ROUTE_TURN_LEFT,
  ROUTE_TURN_RANDOM,
  ROUTE_TURN_RIGHT,
  ROUTE_TURN_TOWARD,
  ROUTE_TURN_UP,
} from "./types";
import type { MoveRouteLabels3 } from "./types/labels";
import type { MoveCommand_Direction } from "./types/nonParamCommnads";

interface TestCase {
  input: keyof MoveRouteLabels3;
  expected: MoveCommand_Direction["code"];
}

const runTestCases = (testCase: TestCase) => {
  describe(`case:${testCase.input} ,code:${testCase.expected}`, () => {
    test(`makeMoveCommandDirection`, () => {
      const expected: MoveCommand_Direction = {
        code: testCase.expected,
      };
      const result = makeMoveCommandDirection(testCase.input);
      expect(result).toEqual(expected);
    });
    test(`makeMoveCommandsSimple`, () => {
      const expected: MoveCommand_Direction[] = [{ code: testCase.expected }];
      const result = makeMoveCommandsSimple([testCase.input]);
      expect(result).toEqual(expected);
    });
  });
};

const testCases: TestCase[] = [
  { input: "turnDown", expected: ROUTE_TURN_DOWN },
  { input: "turnLeft", expected: ROUTE_TURN_LEFT },
  { input: "turnRight", expected: ROUTE_TURN_RIGHT },
  { input: "turnUp", expected: ROUTE_TURN_UP },
  { input: "turn90DegreesRight", expected: ROUTE_TURN_90D_R },
  { input: "turn90DegreesLeft", expected: ROUTE_TURN_90D_L },
  { input: "turn180Degrees", expected: ROUTE_TURN_180D },
  { input: "turn90DegreesRightOrLeft", expected: ROUTE_TURN_90D_R_L },
  { input: "turnRandom", expected: ROUTE_TURN_RANDOM },
  { input: "turnToward", expected: ROUTE_TURN_TOWARD },
  { input: "turnAway", expected: ROUTE_TURN_AWAY },
];

describe("makeMoveCommandDirection", () => {
  testCases.forEach(runTestCases);
  test("makeMoveCommandsSimple with multiple inputs", () => {
    const input = testCases.map((testCase) => testCase.input);
    const expected = testCases.map(
      (testCase): MoveCommand_Direction => ({ code: testCase.expected }),
    );
    const result = makeMoveCommandsSimple(input);
    expect(result).toEqual(expected);
  });
});
