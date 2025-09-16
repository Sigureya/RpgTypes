import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ChangeEnemyHP,
  Command_ChangeEnemyMP,
  Command_ChangeEnemyTP,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandGainEnemyMP,
  makeCommandGainEnemyTP,
  makeCommandLoseEnemyMP,
} from "@RpgTypes/rmmz/eventCommand/commands/enemy/change/change";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_Unit } from "@RpgTypes/rmmzRuntime/objects/core/unit/unit";
import type { FakeBattler, FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";
type CommandTypes =
  | Command_ChangeEnemyHP
  | Command_ChangeEnemyMP
  | Command_ChangeEnemyTP;

const paramCalledWith = (
  command: CommandTypes,
  interpreter: Game_Interpreter
) => {
  expect(interpreter.iterateEnemyIndex).toHaveBeenCalledWith(
    command.parameters[0],
    expect.any(Function)
  );
  expect(interpreter.operateValue).toHaveBeenCalledWith(
    command.parameters[1],
    command.parameters[2],
    command.parameters[3]
  );
  const key: keyof Game_Interpreter = `command${command.code}`;
  expect(interpreter[key]).toHaveBeenCalledWith(command.parameters);
};

const variableCallWith = (
  mock: MockedObject<Rmmz_Variables>,
  record: Record<number, number>
) => {
  Object.entries(record).forEach(([k, v]) => {
    expect(mock.value).toHaveBeenCalledWith(Number(k));
    expect(mock.value).toHaveReturnedWith(v);
  });
};

type MokedTroop = MockedObject<
  Pick<Rmmz_Unit<MockedObject<FakeBattler>>, "members">
>;

const makeMockedTroop = (enemies: MockedObject<FakeBattler>[]): MokedTroop => {
  return {
    members: vi.fn(() => enemies),
  };
};

const makeMockBattler = (): MockedObject<FakeBattler> => {
  return {
    loseHp: vi.fn(),
    loseMp: vi.fn(),
    loseTp: vi.fn(),
    gainHp: vi.fn(),
    gainMp: vi.fn(),
    gainTp: vi.fn(),
    isAlive: vi.fn(() => true),
    isDead: vi.fn(() => false),
  };
};
const makeMockMap = (): FakeMap => ({
  mapId: () => 1,
});

interface MakeMocksResult {
  enemies: MockedObject<FakeBattler>[];
  mockMap: FakeMap;
  troop: MokedTroop;
  mockVariables: MockedObject<Rmmz_Variables>;
}
const makeMockVariables = (
  values: Record<number, number>
): MockedObject<Rmmz_Variables> => {
  return {
    clear: vi.fn(),
    value: vi.fn((id: number) => values[id] ?? NaN),
    setValue: vi.fn(),
    onChange: vi.fn(),
  };
};

const makeInterpreter = (command: EventCommand) => {
  const interpreter = new Game_Interpreter();
  vi.spyOn(interpreter, "operateValue");
  vi.spyOn(interpreter, "iterateEnemyIndex");

  vi.spyOn(interpreter, "command331");
  vi.spyOn(interpreter, "command332");
  vi.spyOn(interpreter, "command342");
  interpreter.setup([command], 0);
  return interpreter;
};

const makeMocks = (variables: Record<number, number> = {}): MakeMocksResult => {
  const enemies: MockedObject<FakeBattler>[] = [
    makeMockBattler(),
    makeMockBattler(),
    makeMockBattler(),
  ];
  const troop = makeMockedTroop(enemies);
  return {
    enemies,
    troop,
    mockMap: makeMockMap(),
    mockVariables: makeMockVariables(variables),
  };
};

const setupGlobal = (mock: MakeMocksResult) => {
  vi.stubGlobal("$gameMap", mock.mockMap);
  vi.stubGlobal("$gameTroop", mock.troop);
  vi.stubGlobal("$gameVariables", mock.mockVariables);
};

interface TestCase<T extends CommandTypes> {
  caseName: string;
  command: T;
  expected: T;
  targets: number[];
  value: number;
  fnName: keyof FakeBattler;
  variables?: Record<number, number>;
}

const runTestCase = <T extends CommandTypes>(testCase: TestCase<T>) => {
  describe(testCase.caseName, () => {
    test("make command", () => {
      expect(testCase.command).toEqual(testCase.expected);
    });
    test("run command", () => {
      const mock = makeMocks(testCase.variables ?? {});
      setupGlobal(mock);
      const interpreter = makeInterpreter(testCase.expected);
      interpreter.executeCommand();
      expect(mock.troop.members).toHaveBeenCalled();
      expect(interpreter.operateValue).toReturnWith(testCase.value);
      paramCalledWith(testCase.expected, interpreter);
      testCase.targets.forEach((i) => {
        expect(mock.enemies[i][testCase.fnName]).toHaveBeenCalledWith(
          testCase.value
        );
      });
      if (testCase.variables) {
        variableCallWith(mock.mockVariables, testCase.variables);
      }
    });
  });
};

const testCaseMP: TestCase<Command_ChangeEnemyMP>[] = [
  {
    caseName: "gain MP enemyIndex=2 value=455",
    command: makeCommandGainEnemyMP({
      targetIndex: 2,
      operand: { mode: "direct", value: 455 },
    }),
    expected: {
      code: 332,
      indent: 0,
      parameters: [2, 0, 0, 455],
    },
    targets: [2],
    value: 455,
    fnName: "gainMp",
  },
  {
    caseName: "gain MP enemyIndex=2 value=V[12]:815",
    command: makeCommandGainEnemyMP({
      targetIndex: 1,
      operand: { mode: "variable", value: 12 },
    }),
    expected: {
      code: 332,
      indent: 0,
      parameters: [1, 0, 1, 12],
    },
    variables: { 12: 815 },
    targets: [1],
    value: 815,
    fnName: "gainMp",
  },
  {
    caseName: "gain MP enemyIndex=each value=456",
    command: makeCommandGainEnemyMP({
      operand: { mode: "direct", value: 456 },
    }),
    expected: {
      code: 332,
      indent: 0,
      parameters: [-1, 0, 0, 456],
    },
    targets: [0, 1, 2],
    value: 456,
    fnName: "gainMp",
  },
  {
    caseName: "gain MP enemyIndex=each value=V[22]353",
    command: makeCommandGainEnemyMP({
      operand: { mode: "variable", value: 22 },
    }),
    expected: {
      code: 332,
      indent: 0,
      parameters: [-1, 0, 1, 22],
    },
    variables: { 22: 353 },
    targets: [0, 1, 2],
    value: 353,
    fnName: "gainMp",
  },

  {
    caseName: "lose MP enemyIndex=each value=V[13]:123",
    command: makeCommandLoseEnemyMP({
      operand: { mode: "variable", value: 13 },
    }),
    expected: {
      code: 332,
      indent: 0,
      parameters: [-1, 1, 1, 13],
    },
    variables: { 13: 123 },
    targets: [0, 1, 2],
    value: -123,
    fnName: "gainMp",
  },
];

testCaseMP.forEach(runTestCase);
