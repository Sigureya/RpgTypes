import { describe, expect, test, vi, type MockedObject } from "vitest";
import type { Command_BranchByTimer } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandBranchByTimerGreater,
  makeCommandBranchByTimerLess,
} from "@RpgTypes/rmmz/eventCommand/commands/flow/branch/make";
import type { Rmmz_Timer } from "@RpgTypes/rmmzRuntime";
import { evaluteBranchByTimer } from "@RpgTypes/rmmzFunctional/interpreter/command/branch/branch";
import { Game_Interpreter } from "./rmmz_objects";

const createMockTimer = (
  frames: number,
  working: boolean,
): MockedObject<Rmmz_Timer> => {
  return {
    start: vi.fn(),
    stop: vi.fn(),
    isWorking: vi.fn().mockReturnValue(working),
    frames: vi.fn().mockReturnValue(frames),
    seconds: vi.fn().mockReturnValue(Math.floor(frames / 60)),
  };
};

/**
 * @description 元実装の command111 は判定結果を _branch へ入れ、偽なら skipBranch する。
 * skipBranch が呼ばれたかどうかで判定結果を取り出す。
 */
const callOriginal = (
  command: Command_BranchByTimer,
  timer: MockedObject<Rmmz_Timer>,
): boolean => {
  vi.stubGlobal("$gameMap", { mapId: () => 1 });
  vi.stubGlobal("$gameTimer", timer);
  const interpreter = new Game_Interpreter();
  interpreter.setup([command, { code: 0, indent: 0, parameters: [] }], 0);
  vi.spyOn(interpreter, "skipBranch").mockImplementation(() => {});
  interpreter.command111(command.parameters);
  return (interpreter.skipBranch as ReturnType<typeof vi.fn>).mock.calls
    .length === 0;
};

interface TestCase {
  caseName: string;
  command: Command_BranchByTimer;
  frames: number;
  working: boolean;
  expected: boolean;
}

const testCases: TestCase[] = [
  {
    caseName: "タイマーが止まっていれば常に偽",
    command: makeCommandBranchByTimerGreater(0),
    frames: 600,
    working: false,
    expected: false,
  },
  {
    caseName: "10 秒以上。ちょうど 10 秒",
    command: makeCommandBranchByTimerGreater(10),
    frames: 600,
    working: true,
    expected: true,
  },
  {
    caseName: "10 秒以上。1 フレーム足りない",
    command: makeCommandBranchByTimerGreater(10),
    frames: 599,
    working: true,
    expected: false,
  },
  {
    caseName: "10 秒以上。十分に大きい",
    command: makeCommandBranchByTimerGreater(10),
    frames: 3600,
    working: true,
    expected: true,
  },
  {
    caseName: "10 秒以下。ちょうど 10 秒",
    command: makeCommandBranchByTimerLess(10),
    frames: 600,
    working: true,
    expected: true,
  },
  {
    caseName: "10 秒以下。1 フレーム超過",
    command: makeCommandBranchByTimerLess(10),
    frames: 601,
    working: true,
    expected: false,
  },
  {
    caseName: "10 秒以下。残り僅か",
    command: makeCommandBranchByTimerLess(10),
    frames: 1,
    working: true,
    expected: true,
  },
  {
    caseName: "0 秒以上は常に真",
    command: makeCommandBranchByTimerGreater(0),
    frames: 0,
    working: true,
    expected: true,
  },
];

describe("evaluteBranchByTimer", () => {
  testCases.forEach((testCase) => {
    describe(testCase.caseName, () => {
      test("Game_Interpreter.command111", () => {
        const timer = createMockTimer(testCase.frames, testCase.working);
        expect(callOriginal(testCase.command, timer)).toBe(testCase.expected);
      });
      test("function", () => {
        const timer = createMockTimer(testCase.frames, testCase.working);
        expect(
          evaluteBranchByTimer(testCase.command.parameters, timer),
        ).toBe(testCase.expected);
      });
    });
  });
});
