import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ControlVariables_FromSystem,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromSystemBattleCount,
  makeCommandVariableFromSystemEscapeCount,
  makeCommandVariableFromSystemPlayTime,
  makeCommandVariableFromSystemSaveCount,
  makeCommandVariableFromSystemTimer,
  makeCommandVariableFromSystemWinCount,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_System, Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_OLD_VALUE = 60;
const MOCK_PLAYTIME = 400;
const MOCK_TIMER_VALUE = 321;
const MOCK_SAVECOUNT = 600;
const MOCK_BATTLECOUNT = 700;
const MOCK_WINCOUNT = 800;
const MOCK_ESCAPECOUNT = 900;

type FakeSystem = Pick<
  Rmmz_System,
  "playtime" | "saveCount" | "battleCount" | "winCount" | "escapeCount"
>;

interface FakeTimer {
  seconds(): number;
}

interface FakeMap {
  mapId(): number;
}

const SYSTEM_FUNCTION_KEYS = [
  "playtime",
  "saveCount",
  "battleCount",
  "winCount",
  "escapeCount",
] as const satisfies (keyof FakeSystem)[];

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const createMockedSystem = (): MockedObject<FakeSystem> => ({
  playtime: vi.fn<FakeSystem["playtime"]>(() => MOCK_PLAYTIME),
  saveCount: vi.fn<FakeSystem["saveCount"]>(() => MOCK_SAVECOUNT),
  battleCount: vi.fn<FakeSystem["battleCount"]>(() => MOCK_BATTLECOUNT),
  winCount: vi.fn<FakeSystem["winCount"]>(() => MOCK_WINCOUNT),
  escapeCount: vi.fn<FakeSystem["escapeCount"]>(() => MOCK_ESCAPECOUNT),
});

const createMockedTimer = (): MockedObject<FakeTimer> => ({
  seconds: vi.fn().mockReturnValue(MOCK_TIMER_VALUE),
});

const createMockedMap = (): FakeMap => ({
  mapId: () => 1,
});

const createMockedObjects = () => {
  return {
    mockedVariables: createMockedVariable(),
    mockedSystem: createMockedSystem(),
    mockedTimer: createMockedTimer(),
    mockedMap: createMockedMap(),
  };
};

const stubGlobal = (mocks: ReturnType<typeof createMockedObjects>) => {
  vi.stubGlobal("$gameVariables", mocks.mockedVariables);
  vi.stubGlobal("$gameSystem", mocks.mockedSystem);
  vi.stubGlobal("$gameTimer", mocks.mockedTimer);
  vi.stubGlobal("$gameMap", mocks.mockedMap);
};

interface TestCase {
  description: string;
  command: Command_ControlVariables_FromSystem;
  commandLiteral: Command_ControlVariables_FromSystem;
  setValues: { id: number; value: number }[];
  systemCalls: (keyof FakeSystem)[];
  timerCalls: number;
}

const assertCalls = <T>(
  mock: T,
  called: ReadonlySet<string & keyof T>,
  allKeys: ReadonlyArray<string & keyof T>,
) => {
  allKeys.forEach((key) => {
    if (called.has(key)) {
      expect(mock[key], `call : ${key}`).toHaveBeenCalledTimes(1);
    } else {
      expect(mock[key], `not call : ${key}`).not.toHaveBeenCalled();
    }
  });
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.description, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });

    test("set variable value", () => {
      const mocks = createMockedObjects();
      stubGlobal(mocks);

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral as EventCommand], 0);
      interpreter.executeCommand();

      testCase.setValues.forEach((entry) => {
        expect(mocks.mockedVariables.value).toHaveBeenCalledWith(entry.id);
        expect(mocks.mockedVariables.setValue).toHaveBeenCalledWith(
          entry.id,
          entry.value,
        );
      });
      expect(mocks.mockedVariables.value).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      expect(mocks.mockedVariables.setValue).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      expect(randomInt).toHaveBeenCalledTimes(testCase.setValues.length);
    });

    test("function calls", () => {
      const mocks = createMockedObjects();
      stubGlobal(mocks);

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.command as EventCommand], 0);
      interpreter.executeCommand();

      assertCalls(
        mocks.mockedSystem,
        new Set(testCase.systemCalls),
        SYSTEM_FUNCTION_KEYS,
      );
      expect(mocks.mockedTimer.seconds).toHaveBeenCalledTimes(
        testCase.timerCalls,
      );
    });
  });
};

const testCases: TestCase[] = [
  {
    description: "playtime",
    command: makeCommandVariableFromSystemPlayTime({ startId: 2 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [2, 2, 0, 3, 7, 4],
    },
    setValues: [{ id: 2, value: MOCK_PLAYTIME }],
    systemCalls: ["playtime"],
    timerCalls: 0,
  },
  {
    description: "timer",
    command: makeCommandVariableFromSystemTimer({ startId: 3 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [3, 3, 0, 3, 7, 5],
    },
    setValues: [{ id: 3, value: MOCK_TIMER_VALUE }],
    systemCalls: [],
    timerCalls: 1,
  },
  {
    description: "save count",
    command: makeCommandVariableFromSystemSaveCount({ startId: 47 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [47, 47, 0, 3, 7, 6],
    },
    setValues: [{ id: 47, value: MOCK_SAVECOUNT }],
    systemCalls: ["saveCount"],
    timerCalls: 0,
  },
  {
    description: "battle count",
    command: makeCommandVariableFromSystemBattleCount({ startId: 52 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [52, 52, 0, 3, 7, 7],
    },
    setValues: [{ id: 52, value: MOCK_BATTLECOUNT }],
    systemCalls: ["battleCount"],
    timerCalls: 0,
  },
  {
    description: "win count",
    command: makeCommandVariableFromSystemWinCount({ startId: 63 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [63, 63, 0, 3, 7, 8],
    },
    setValues: [{ id: 63, value: MOCK_WINCOUNT }],
    systemCalls: ["winCount"],
    timerCalls: 0,
  },
  {
    description: "escape count",
    command: makeCommandVariableFromSystemEscapeCount({ startId: 78 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [78, 78, 0, 3, 7, 9],
    },
    setValues: [{ id: 78, value: MOCK_ESCAPECOUNT }],
    systemCalls: ["escapeCount"],
    timerCalls: 0,
  },
  {
    description: "playtime range write",
    command: makeCommandVariableFromSystemPlayTime({ startId: 90, endId: 92 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [90, 92, 0, 3, 7, 4],
    },
    setValues: [
      { id: 90, value: MOCK_PLAYTIME },
      { id: 91, value: MOCK_PLAYTIME },
      { id: 92, value: MOCK_PLAYTIME },
    ],
    systemCalls: ["playtime"],
    timerCalls: 0,
  },
];

describe("operateValue - system", () => {
  testCases.forEach(runTestCase);
});
