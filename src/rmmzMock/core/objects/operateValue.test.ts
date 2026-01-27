import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ControlVariables } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandSystemPlaytime,
  makeCommandVariableFromConstant,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_System, Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn(),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const makeMockMap = (): FakeMap => ({
  mapId: () => 123456,
});

const SYSTEM_FUNTION_KEYS = [
  "playtime",
  "saveCount",
  "battleCount",
  "winCount",
  "escapeCount",
] as const satisfies (keyof Rmmz_System)[];

type FakeSystem = Pick<Rmmz_System, (typeof SYSTEM_FUNTION_KEYS)[number]>;

const MOCK_PLAYTIME = 400;
const MOCK_SAVECOUNT = 600;
const MOCK_BATTLECOUNT = 700;
const MOCK_WINCOUNT = 800;
const MOCK_ESCAPECOUNT = 900;

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
  };
};

interface FunctionKeys {
  systems: (keyof FakeSystem)[];
  variables: (keyof Rmmz_Variables)[];
}

interface TestCase {
  testName: string;
  fnCalles: FunctionKeys;
  command: Command_ControlVariables;
  commandLiteral: Command_ControlVariables;
  setValue: {
    value: number;
    id: number;
  };
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

const runTestCase = (testCase: TestCase) => {
  describe(`operateValue Test: ${testCase.testName}`, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    test("value set", () => {
      const { mockedMap, mockedSystem, mockedVariables } =
        createMockedObjects();

      vi.stubGlobal("$gameMap", mockedMap);
      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameSystem", mockedSystem);

      // @ts-ignore
      Math.randomInt = () => 0;

      const interpreter = createMockedInterpreter();
      interpreter.setup([testCase.command], 0);
      interpreter.executeCommand();
      expect(mockedVariables.value).toHaveBeenCalledWith(testCase.setValue.id);
      expect(mockedVariables.setValue).toHaveBeenCalledWith(
        testCase.setValue.id,
        testCase.setValue.value,
      );
    });
    test("function calls", () => {
      const { mockedMap, mockedSystem, mockedVariables } =
        createMockedObjects();
      vi.stubGlobal("$gameMap", mockedMap);
      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameSystem", mockedSystem);

      const interpreter = createMockedInterpreter();
      interpreter.setup([testCase.command], 0);
      interpreter.executeCommand();
      callTestEx<FakeSystem>(
        mockedSystem,
        new Set(testCase.fnCalles.systems),
        SYSTEM_FUNTION_KEYS,
      );
    });
  });
};

const testCases: TestCase[] = [
  {
    testName: "constant",
    fnCalles: { systems: [], variables: [] },
    setValue: { id: 1, value: 123 },
    command: makeCommandVariableFromConstant(
      {
        startId: 1,
      },
      { value: 123 },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [1, 1, 0, 0, 123],
    },
  },
  {
    testName: "playtime",
    fnCalles: { systems: ["playtime"], variables: [] },
    setValue: { id: 2, value: MOCK_PLAYTIME },
    command: makeCommandSystemPlaytime({ startId: 2 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [2, 2, 0, 3, 7, 4],
    },
  },
];

testCases.forEach(runTestCase);
