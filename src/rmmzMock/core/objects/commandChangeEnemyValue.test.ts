import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ChangeEnemyHP,
  Command_ChangeEnemyMP,
  Command_ChangeEnemyTP,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import { makeCommandGainEnemyMP } from "@RpgTypes/rmmz/eventCommand/commands/enemy/change/change";
import type { Rmmz_Enemy, Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_Troop } from "@RpgTypes/rmmzRuntime/objects/core/troop";
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
}

const runTestCase = <T extends CommandTypes>(testCase: TestCase<T>) => {
  describe(testCase.caseName, () => {
    test("", () => {
      expect(testCase.command).toEqual(testCase.expected);
    });
    test("", () => {
      const mock = makeMocks();
      setupGlobal(mock);
      const interpreter = makeInterpreter(testCase.command);
      interpreter.executeCommand();
      paramCalledWith(testCase.command, interpreter);
      testCase.targets.forEach((i) => {
        expect(mock.enemies[i][testCase.fnName]).toHaveBeenCalledWith(
          testCase.value
        );
      });
    });
  });
};

const testCaseMP: TestCase<Command_ChangeEnemyMP>[] = [
  {
    caseName: "gain MP enemyIndex=2 value=455",
    command: makeCommandGainEnemyMP({
      targetType: "direct",
      target: 0,
      operand: { mode: "direct", value: 455 },
    }),
    expected: {
      code: 332,
      indent: 0,
      parameters: [0, 0, 0, 455],
    },
    targets: [0],
    value: 455,
    fnName: "gainMp",
  },
];

testCaseMP.forEach(runTestCase);
