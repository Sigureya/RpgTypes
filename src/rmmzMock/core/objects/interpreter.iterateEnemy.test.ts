import type { MockedFunction, MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";
import { Game_Interpreter } from "./rmmz_objects";
import type { Rmmz_Members } from "@RpgTypes/rmmzRuntime";
import { iterateEnemyIndex } from "@RpgTypes/rmmzFunctional";

const createMembers = <T>(members: T[]): MockedObject<Rmmz_Members<T>> => {
  return {
    members: vi.fn().mockReturnValue(members),
  };
};

interface TestCase {
  name: string;
  mockBattlers: number[];
  index: number;
  expectedArg: number[];
}

const xxxx = (
  testCase: TestCase,
  troop: MockedObject<Rmmz_Members<number>>,
  mockFn: MockedFunction<(e: number) => void>,
) => {
  expect(troop.members).toHaveBeenCalledOnce();
  expect(mockFn).toHaveBeenCalledTimes(testCase.expectedArg.length);
  const argx = mockFn.mock.calls.map((call) => call[0]);
  expect(argx).toEqual(testCase.expectedArg);
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("function", () => {
      const mockTroop = createMembers(testCase.mockBattlers);
      const mockFn = vi.fn();
      iterateEnemyIndex(mockTroop, testCase.index, mockFn);
      xxxx(testCase, mockTroop, mockFn);
    });
    test("Game_Interpreter", () => {
      const mockTroop = createMembers(testCase.mockBattlers);
      const mockFn = vi.fn();
      vi.stubGlobal("$gameTroop", mockTroop);
      Game_Interpreter.prototype.iterateEnemyIndex.call(
        null,
        testCase.index,
        mockFn,
      );
      xxxx(testCase, mockTroop, mockFn);
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "index = -1: => iterate all",
    index: -1,
    mockBattlers: [651, 251, 351],
    expectedArg: [651, 251, 351],
  },
  {
    name: "index = 0 :=> iterate specific",
    index: 0,
    mockBattlers: [201, 233, 209],
    expectedArg: [201],
  },
  {
    name: "index = 1 :=> iterate specific",
    index: 1,
    mockBattlers: [201, 233, 209],
    expectedArg: [233],
  },
  {
    name: "index = 999 :=> iterate specific",
    index: 999,
    mockBattlers: [201, 233, 209],
    expectedArg: [],
  },
];

describe("interpreter.iterateEnemyIndex", () => {
  testCases.forEach(runTestCase);
});
