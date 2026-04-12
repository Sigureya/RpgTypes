import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import {
  makeCommandVariableFromMapId,
  makeCommandVariableFromRandom,
  makeCommandVariableFromVariable,
  OPERAND_VARIABLE,
  OPERATION_SET,
  type Command_ControlVariables,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_System, Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { FakeMap } from "./fakes/types";
import type { Game_Party } from "./rmmz_objects";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_MAP_ID = 123456 as const;

const MOCK_PLAYTIME = 400;
const MOCK_SAVECOUNT = 600;
const MOCK_BATTLECOUNT = 700;
const MOCK_WINCOUNT = 800;
const MOCK_ESCAPECOUNT = 900;

const MOCK_GOLD = 4980;
const MOCK_STEPS = 8976;

const MOCK_OLD_VALUE = 60;

const MOCK_PARTY_MEMBERS = [3, 1, 2] as const;

const MOCK_LAST_VALUE = 789;

const MOCK_TIMER_VALUE = 321;

const SYSTEM_FUNTION_KEYS = [
  "playtime",
  "saveCount",
  "battleCount",
  "winCount",
  "escapeCount",
] as const satisfies (keyof Rmmz_System)[];

const PARTY_FUNCTION_KEYS = [
  "gold",
  "steps",
  "gainGold",
  "loseGold",
  "members",
  "numItems",
  "size",
] as const satisfies (keyof Game_Party)[];

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

type FakeParty = Pick<Game_Party, (typeof PARTY_FUNCTION_KEYS)[number]>;

const createMockParty = (actorIds: number[]): MockedObject<FakeParty> => ({
  gainGold: vi.fn(),
  loseGold: vi.fn(),
  size: vi.fn().mockReturnValue(16),
  gold: vi.fn().mockReturnValue(MOCK_GOLD),
  steps: vi.fn().mockReturnValue(MOCK_STEPS),
  members: vi.fn().mockReturnValue(actorIds.map((id) => ({ id }))),
  numItems: vi.fn().mockImplementation((item) => {
    if (item === null) {
      return 0;
    }
    return 99;
  }),
});

interface FakeTemp {
  lastActionData(dataType: number): number;
}

interface FakeTimer {
  seconds(): number;
}

const createMockTemp = (): MockedObject<FakeTemp> => ({
  lastActionData: vi.fn().mockReturnValue(MOCK_LAST_VALUE),
});

const createMockTimer = (): MockedObject<FakeTimer> => ({
  seconds: vi.fn().mockReturnValue(MOCK_TIMER_VALUE),
});

const makeMockMap = (): FakeMap => ({
  mapId: () => MOCK_MAP_ID,
});

type FakeSystem = Pick<Rmmz_System, (typeof SYSTEM_FUNTION_KEYS)[number]>;

const createMokedSystem = (): MockedObject<FakeSystem> => ({
  playtime: vi.fn<FakeSystem["playtime"]>(() => MOCK_PLAYTIME),
  saveCount: vi.fn<FakeSystem["saveCount"]>(() => MOCK_SAVECOUNT),
  battleCount: vi.fn<FakeSystem["battleCount"]>(() => MOCK_BATTLECOUNT),
  winCount: vi.fn<FakeSystem["winCount"]>(() => MOCK_WINCOUNT),
  escapeCount: vi.fn<FakeSystem["escapeCount"]>(() => MOCK_ESCAPECOUNT),
});

const createMockedInterpreter = () => {
  const inter = new Game_Interpreter();
  const keys: (keyof Game_Interpreter)[] = ["gameDataOperand"];
  keys.forEach((key) => {
    vi.spyOn(inter, key);
  });
  return inter;
};

const createMockedObjects = () => {
  return {
    mockedMap: makeMockMap(),
    mockedVariables: createMockedVariable(),
    mockedSystem: createMokedSystem(),
    mockParty: createMockParty([...MOCK_PARTY_MEMBERS]),
    mockTemp: createMockTemp(),
    mockTimer: createMockTimer(),
  };
};

interface FunctionKeys {
  systems: (keyof FakeSystem)[];
  party: (keyof FakeParty)[];
}

interface TestCase {
  testName: string;
  fnCalls: FunctionKeys;
  valueCallCount?: number;
  setValues: {
    value: number;
    id: number;
  }[];
  // 変数操作コマンド。ここには生成関数の戻り値を置く
  command: Command_ControlVariables;
  // 数値直書き。生成関数のバグと値のバグを切り分けるためにある
  commandLiteral: Command_ControlVariables;
  additionalTests?: ((testCase: TestCase) => void)[];
}

const callTestEx = <T>(
  mock: T,
  set: ReadonlySet<string & keyof T>,
  allKeys: ReadonlyArray<string & keyof T>,
) => {
  allKeys.forEach((key) => {
    if (set.has(key)) {
      expect(mock[key], `call : ${key}`).toHaveBeenCalledTimes(1);
    } else {
      expect(mock[key], `not call : ${key}`).not.toHaveBeenCalled();
    }
  });
};

const stubGlobal = (mocks: ReturnType<typeof createMockedObjects>) => {
  vi.stubGlobal("$gameMap", mocks.mockedMap);
  vi.stubGlobal("$gameVariables", mocks.mockedVariables);
  vi.stubGlobal("$gameSystem", mocks.mockedSystem);
  vi.stubGlobal("$gameParty", mocks.mockParty);
  vi.stubGlobal("$gameTemp", mocks.mockTemp);
  vi.stubGlobal("$gameTimer", mocks.mockTimer);
};

const runTestCase = (testCase: TestCase) => {
  describe(`operateValue Test: ${testCase.testName}`, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    test("value set", () => {
      const mocks = createMockedObjects();
      stubGlobal(mocks);

      const randmomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randmomInt;

      const interpreter = createMockedInterpreter();
      interpreter.setup([testCase.commandLiteral], 0);
      interpreter.executeCommand();
      testCase.setValues.forEach((entry) => {
        expect(mocks.mockedVariables.value).toHaveBeenCalledWith(entry.id);
      });
      expect(mocks.mockedVariables.value).toHaveBeenCalledTimes(
        testCase.valueCallCount ?? testCase.setValues.length,
      );
      expect(mocks.mockedVariables.setValue).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      testCase.setValues.forEach((entry) => {
        expect(mocks.mockedVariables.setValue).toHaveBeenCalledWith(
          entry.id,
          entry.value,
        );
      });
      const randCallCount: number =
        1 +
        testCase.commandLiteral.parameters[1] -
        testCase.commandLiteral.parameters[0];
      expect(randmomInt).toHaveBeenCalledTimes(randCallCount);
    });
    test("function calls", () => {
      const mocks = createMockedObjects();
      stubGlobal(mocks);

      const interpreter = createMockedInterpreter();
      interpreter.setup([testCase.commandLiteral], 0);
      interpreter.executeCommand();
      callTestEx<FakeSystem>(
        mocks.mockedSystem,
        new Set(testCase.fnCalls.systems),
        SYSTEM_FUNTION_KEYS,
      );
      callTestEx<FakeParty>(
        mocks.mockParty,
        new Set(testCase.fnCalls.party),
        PARTY_FUNCTION_KEYS,
      );
    });
    describe.each(testCase.additionalTests ?? [])(
      "additional tests",
      (additionalTest) => {
        additionalTest(testCase);
      },
    );
  });
};

const testCases: TestCase[] = [
  {
    testName: "variable operand set",
    fnCalls: { party: [], systems: [] },
    valueCallCount: 2,
    setValues: [{ id: 33, value: MOCK_OLD_VALUE }],
    command: makeCommandVariableFromVariable(
      { startId: 33 },
      { variableId: 17, operand: OPERAND_VARIABLE },
      { operation: OPERATION_SET },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [33, 33, 0, 1, 17],
    },
  },
  {
    testName: "random operand set",
    fnCalls: { party: [], systems: [] },
    setValues: [{ id: 34, value: 2 }],
    command: makeCommandVariableFromRandom(
      { startId: 34 },
      { min: 2, max: 5 },
      { operation: OPERATION_SET },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [34, 34, 0, 2, 2, 5],
    },
  },

  {
    testName: "mapId",
    fnCalls: { party: [], systems: [] },
    setValues: [{ id: 201, value: MOCK_MAP_ID }],
    command: makeCommandVariableFromMapId({ startId: 201 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [201, 201, 0, 3, 7, 0],
    },
  },
];
describe("operateValue Tests", () => {
  testCases.forEach(runTestCase);
});
