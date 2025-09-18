import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ChangeActorHP,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandGainActorMP,
  makeCommandGainActorTP,
  makeCommandLoseActorMP,
  makeCommandLoseActorTP,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_ActorsTemplate } from "@RpgTypes/rmmzRuntime/objects/core/battler/actors";
import type { FakeBattler, FakeMap } from "./fakes/types";
import { Game_Party, Game_Interpreter } from "./rmmz_objects";

type FakeActor = FakeBattler & { actorId(): number };
type MockedActors = MockedObject<Rmmz_ActorsTemplate<FakeBattler>>;

interface MakeMocksResult {
  mockBattler1: MockedObject<FakeActor>;
  mockBattler2: MockedObject<FakeActor>;
  mockActors: MockedActors;
  mockMap: FakeMap;
  mockParty: Game_Party;
  mockVariables: MockedObject<Rmmz_Variables>;
}

const each = (mockParty: Game_Party) => {
  expect(mockParty.members).toHaveBeenCalledTimes(1);
};

const single = (mockParty: Game_Party) => {
  expect(mockParty.members).not.toHaveBeenCalled();
};

type CommandTypes =
  | Command_ChangeActorHP
  | Command_ChangeActorMP
  | Command_ChangeActorTP;

const paramCalledWith = (
  command: CommandTypes,
  interpreter: Game_Interpreter
) => {
  expect(interpreter.iterateActorEx).toHaveBeenCalledWith(
    command.parameters[0],
    command.parameters[1],
    expect.any(Function)
  );
  expect(interpreter.operateValue).toHaveBeenCalledWith(
    command.parameters[2],
    command.parameters[3],
    command.parameters[4]
  );
  const key: keyof Game_Interpreter = `command${command.code}` as const;
  expect(interpreter[key]).toHaveBeenCalledWith(command.parameters);
};

interface ActorsCalledWith {
  called: number[];
  notCalled: number[];
}

const actorsCalled = (mockActors: MockedActors, ids: ActorsCalledWith) => {
  ids.called.forEach((id) => {
    expect(mockActors.actor).toHaveBeenCalledWith(id);
  });
  ids.notCalled.forEach((id) => {
    expect(mockActors.actor).not.toHaveBeenCalledWith(id);
  });
};

const makeInterpreter = (command: EventCommand) => {
  const interpreter = new Game_Interpreter();
  vi.spyOn(interpreter, "operateValue");
  vi.spyOn(interpreter, "iterateActorEx");
  vi.spyOn(interpreter, "iterateActorId");

  vi.spyOn(interpreter, "command311");
  vi.spyOn(interpreter, "command312");
  vi.spyOn(interpreter, "command326");
  interpreter.setup([command], 0);
  return interpreter;
};

const makeMockBattler = (id: number): MockedObject<FakeActor> => {
  return {
    actorId: vi.fn(() => id),
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
const makeMockActors = (
  actor: ({ actorId(): number } & FakeBattler)[]
): MockedActors => ({
  actor: vi.fn((id: number) => actor.find((a) => a.actorId() === id) || null),
  initialize: vi.fn(),
});

const makeMockParty = (actorIds: number[]): Game_Party => {
  const party = new Game_Party();
  party._actors = [...actorIds];
  vi.spyOn(party, "members");
  return party;
};

interface MockParam {
  variables?: Record<number, number>;
}
const makeMockMap = (): FakeMap => ({
  mapId: () => 1,
});

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

const makeMocks = ({ variables }: MockParam): MakeMocksResult => {
  const mockBattler1 = makeMockBattler(1);
  const mockBattler2 = makeMockBattler(2);
  const mockActors = makeMockActors([mockBattler1, mockBattler2]);
  const mockMap = makeMockMap();
  const mockParty = makeMockParty([1, 2]);
  const mockVariables = makeMockVariables(variables ?? {});
  return {
    mockBattler1,
    mockActors,
    mockMap,
    mockParty,
    mockBattler2,
    mockVariables,
  };
};
const setupGlobal = (mocks: MakeMocksResult) => {
  vi.stubGlobal("$gameActors", mocks.mockActors);
  vi.stubGlobal("$gameParty", mocks.mockParty);
  vi.stubGlobal("$gameMap", mocks.mockMap);
  vi.stubGlobal("$gameVariables", mocks.mockVariables);
};

interface TestCaseTemplate<Command> {
  caseName: string;
  command: Command;
  expected: Command;
  variableLiteral?: Record<number, number>;
  members: (party: Game_Party) => void;
  actors: ActorsCalledWith;
  changeValue: (battlers: MockedObject<FakeActor>[]) => void;
  usingVariables: (v: MockedObject<Rmmz_Variables>) => void;
}

type TestCase =
  | TestCaseTemplate<Command_ChangeActorHP>
  | TestCaseTemplate<Command_ChangeActorMP>
  | TestCaseTemplate<Command_ChangeActorTP>;

const runTestCase = (testCase: TestCase) => {
  describe(testCase.caseName, () => {
    test("make command", () => {
      expect(testCase.command).toEqual(testCase.expected);
    });
    test("exec", () => {
      const mock = makeMocks({ variables: testCase.variableLiteral });
      setupGlobal(mock);
      const interpreter = makeInterpreter(testCase.command);
      const result: boolean = interpreter.executeCommand();
      expect(result).toBe(true);
      testCase.members(mock.mockParty);
      paramCalledWith(testCase.command, interpreter);
      actorsCalled(mock.mockActors, testCase.actors);
      testCase.usingVariables(mock.mockVariables);
      testCase.changeValue([mock.mockBattler1, mock.mockBattler2]);
    });
  });
};

const testCasesMP: TestCaseTemplate<Command_ChangeActorMP>[] = [
  {
    caseName: "gain MP actorId=1 value=123",
    command: {
      code: 312,
      indent: 0,
      parameters: [0, 1, 0, 0, 123],
    },
    expected: makeCommandGainActorMP({
      targetType: "direct",
      target: 1,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainMp).toHaveBeenCalledWith(123);
      expect(a2.gainMp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "gain MP target=each value=123",
    command: {
      code: 312,
      indent: 0,
      parameters: [0, 0, 0, 0, 123],
    },
    expected: makeCommandGainActorMP({
      targetType: "each",
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => each(party),
    actors: { called: [1, 2], notCalled: [] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainMp).toHaveBeenCalledWith(123);
      expect(a2.gainMp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "gain MP actorId=V[90]:2 value=123",
    command: {
      code: 312,
      indent: 0,
      parameters: [1, 90, 0, 0, 123],
    },
    expected: makeCommandGainActorMP({
      targetType: "variable",
      target: 90,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 90: 2 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainMp).not.toHaveBeenCalled();
      expect(a2.gainMp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(1);
      expect(v.value).toHaveBeenCalledWith(90);
      expect(v.value).toHaveReturnedWith(2);
    },
  },
  {
    caseName: "gain MP actorId=1 value=V[91]:77",
    command: {
      code: 312,
      indent: 0,
      parameters: [0, 1, 0, 1, 91],
    },
    expected: makeCommandGainActorMP({
      targetType: "direct",
      target: 1,
      operand: { mode: "variable", value: 91 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    variableLiteral: { 91: 77 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainMp).toHaveBeenCalledWith(77);
      expect(a2.gainMp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledWith(91);
      expect(v.value).toHaveReturnedWith(77);
    },
  },

  {
    caseName: "gain MP target=each value=V[55]:217",
    command: {
      code: 312,
      indent: 0,
      parameters: [0, 0, 0, 1, 55],
    },
    expected: makeCommandGainActorMP({
      targetType: "each",
      operand: { mode: "variable", value: 55 },
    }),
    members: (party) => each(party),
    actors: { called: [1, 2], notCalled: [] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainMp).toHaveBeenCalledWith(217);
      expect(a2.gainMp).toHaveBeenCalledWith(217);
    },
    variableLiteral: { 55: 217 },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(1);
      expect(v.value).toHaveBeenCalledWith(55);
      expect(v.value).toReturnWith(217);
    },
  },
  {
    caseName: "gain MP actorId=V[90]:2 value=V[91]:77",
    command: {
      code: 312,
      indent: 0,
      parameters: [1, 90, 0, 1, 91],
    },
    expected: makeCommandGainActorMP({
      targetType: "variable",
      target: 90,
      operand: { mode: "variable", value: 91 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 90: 2, 91: 77 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainMp).not.toHaveBeenCalled();
      expect(a2.gainMp).toHaveBeenCalledWith(77);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(2);
      expect(v.value).toHaveBeenCalledWith(90);
      expect(v.value).toHaveBeenCalledWith(91);
      expect(v.value).toHaveReturnedWith(2);
      expect(v.value).toHaveReturnedWith(77);
    },
  },
  {
    caseName: "lose MP actorId=V[90]:2 value=V[91]:77",
    command: {
      code: 312,
      indent: 0,
      parameters: [1, 90, 1, 1, 91],
    },
    expected: makeCommandLoseActorMP({
      targetType: "variable",
      target: 90,
      operand: { mode: "variable", value: 91 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 90: 2, 91: 77 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainMp).not.toHaveBeenCalled();
      expect(a2.gainMp).toHaveBeenCalledWith(-77);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(2);
      expect(v.value).toHaveBeenCalledWith(90);
      expect(v.value).toHaveBeenCalledWith(91);
      expect(v.value).toHaveReturnedWith(2);
      expect(v.value).toHaveReturnedWith(77);
    },
  },
  {
    caseName: "lose MP actorId=1 value=123",
    command: {
      code: 312,
      indent: 0,
      parameters: [0, 1, 1, 0, 123],
    },
    expected: makeCommandLoseActorMP({
      targetType: "direct",
      target: 1,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainMp).toHaveBeenCalledWith(-123);
      expect(a2.gainMp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "lose MP actorId=V[90]:2 value=V[91]:77",
    command: {
      code: 312,
      indent: 0,
      parameters: [1, 90, 1, 1, 91],
    },
    expected: makeCommandLoseActorMP({
      targetType: "variable",
      target: 90,
      operand: { mode: "variable", value: 91 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 90: 2, 91: 77 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainMp).not.toHaveBeenCalled();
      expect(a2.gainMp).toHaveBeenCalledWith(-77);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(2);
      expect(v.value).toHaveBeenCalledWith(90);
      expect(v.value).toHaveBeenCalledWith(91);
      expect(v.value).toHaveReturnedWith(2);
      expect(v.value).toHaveReturnedWith(77);
    },
  },
];

const testCasesTP: TestCaseTemplate<Command_ChangeActorTP>[] = [
  {
    caseName: "gain TP actorId=1 value=123",
    command: {
      code: 326,
      indent: 0,
      parameters: [0, 1, 0, 0, 123],
    },
    expected: makeCommandGainActorTP({
      targetType: "direct",
      target: 1,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainTp).toHaveBeenCalledWith(123);
      expect(a2.gainTp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "gain TP actorId=V[88]:2 value=123",
    command: {
      code: 326,
      indent: 0,
      parameters: [1, 88, 0, 0, 123],
    },
    expected: makeCommandGainActorTP({
      targetType: "variable",
      target: 88,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [0] },
    variableLiteral: { 88: 2 },
    changeValue: ([a1, a2]) => {
      expect(a2.gainTp).toHaveBeenCalledWith(123);
      expect(a1.gainTp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).toBeCalledTimes(1);
      expect(v.value).toBeCalledWith(88);
      expect(v.value).toReturnWith(2);
    },
  },
  {
    caseName: "gain TP actorId=1 value=V[64]:231",
    command: {
      code: 326,
      indent: 0,
      parameters: [0, 1, 0, 1, 64],
    },
    expected: makeCommandGainActorTP({
      targetType: "direct",
      target: 1,
      operand: { mode: "variable", value: 64 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainTp).toHaveBeenCalledWith(231);
      expect(a2.gainTp).not.toHaveBeenCalled();
    },
    variableLiteral: { 64: 231 },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledWith(64);
      expect(v.value).toReturnWith(231);
    },
  },
  {
    caseName: "gain TP target=each value=123",
    command: {
      code: 326,
      indent: 0,
      parameters: [0, 0, 0, 0, 123],
    },
    expected: makeCommandGainActorTP({
      targetType: "each",
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => each(party),
    actors: { called: [1, 2], notCalled: [] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainTp).toHaveBeenCalledWith(123);
      expect(a2.gainTp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "gain TP target=each value=V[72]:231",
    command: {
      code: 326,
      indent: 0,
      parameters: [0, 0, 0, 1, 72],
    },
    expected: makeCommandGainActorTP({
      targetType: "each",
      operand: { mode: "variable", value: 72 },
    }),
    members: (party) => each(party),
    actors: { called: [1, 2], notCalled: [] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainTp).toHaveBeenCalledWith(231);
      expect(a2.gainTp).toHaveBeenCalledWith(231);
    },
    variableLiteral: { 72: 231 },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(1);
      expect(v.value).toHaveBeenCalledWith(72);
      expect(v.value).toReturnWith(231);
    },
  },
  {
    caseName: "gain TP actorId=V[99]:2 value=V[100]:88",
    command: {
      code: 326,
      indent: 0,
      parameters: [1, 99, 0, 1, 100],
    },
    expected: makeCommandGainActorTP({
      targetType: "variable",
      target: 99,
      operand: { mode: "variable", value: 100 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 99: 2, 100: 88 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainTp).not.toHaveBeenCalled();
      expect(a2.gainTp).toHaveBeenCalledWith(88);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(2);
      expect(v.value).toHaveBeenCalledWith(99);
      expect(v.value).toHaveBeenCalledWith(100);
      expect(v.value).toHaveReturnedWith(2);
      expect(v.value).toHaveReturnedWith(88);
    },
  },
  {
    caseName: "lose TP actorId=1 value=123",
    command: {
      code: 326,
      indent: 0,
      parameters: [0, 1, 1, 0, 123],
    },
    expected: makeCommandLoseActorTP({
      targetType: "direct",
      target: 1,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainTp).toHaveBeenCalledWith(-123);
      expect(a2.gainTp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "lose TP actorId=V[99]:2 value=V[100]:88",
    command: {
      code: 326,
      indent: 0,
      parameters: [1, 99, 1, 1, 100],
    },
    expected: makeCommandLoseActorTP({
      targetType: "variable",
      target: 99,
      operand: { mode: "variable", value: 100 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 99: 2, 100: 88 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainTp).not.toHaveBeenCalled();
      expect(a2.gainTp).toHaveBeenCalledWith(-88);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(2);
      expect(v.value).toHaveBeenCalledWith(99);
      expect(v.value).toHaveBeenCalledWith(100);
      expect(v.value).toHaveReturnedWith(2);
      expect(v.value).toHaveReturnedWith(88);
    },
  },
];

testCasesMP.forEach((tc) => runTestCase(tc));
testCasesTP.forEach((tc) => runTestCase(tc));
