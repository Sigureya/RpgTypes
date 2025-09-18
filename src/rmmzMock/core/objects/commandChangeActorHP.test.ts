import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ChangeActorHP,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandGainActorHP,
  makeCommandLoseActorHP,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Actor, Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_ActorsTemplate } from "@RpgTypes/rmmzRuntime/objects/core/battler/actors";
import type { FakeMap } from "./fakes/types";
import { Game_Party, Game_Interpreter } from "./rmmz_objects";

type FakeActor = Pick<
  Rmmz_Actor,
  "actorId" | "gainHp" | "loseHp" | "isAlive" | "isDead"
>;
type MockedActors = MockedObject<Rmmz_ActorsTemplate<FakeActor>>;

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

const paramCalledWith = (
  command: Command_ChangeActorHP,
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
    gainHp: vi.fn(),
    isAlive: vi.fn(() => true),
    isDead: vi.fn(() => false),
  };
};
const makeMockActors = (actor: FakeActor[]): MockedActors => ({
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

type TestCase = TestCaseTemplate<Command_ChangeActorHP>;

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
const testCasesHP: TestCaseTemplate<Command_ChangeActorHP>[] = [
  {
    caseName: "gain HP actorId=1 value=123 allowDeath=false",
    command: {
      code: 311,
      indent: 0,
      parameters: [0, 1, 0, 0, 123, false],
    },
    expected: makeCommandGainActorHP({
      allowDeath: false,
      targetType: "direct",
      target: 1,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).toHaveBeenCalledWith(123);
      expect(a2.gainHp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "gain HP actorId=1 value=123 allowDeath=true",
    command: {
      code: 311,
      indent: 0,
      parameters: [0, 1, 0, 0, 123, true],
    },
    expected: makeCommandGainActorHP({
      allowDeath: true,
      targetType: "direct",
      target: 1,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).toHaveBeenCalledWith(123);
      expect(a2.gainHp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "gain HP actorId=1 value=V[81]:123 allowDeath=false",
    command: {
      code: 311,
      indent: 0,
      parameters: [0, 1, 0, 1, 81, false],
    },
    expected: makeCommandGainActorHP({
      allowDeath: false,
      targetType: "direct",
      target: 1,
      operand: { mode: "variable", value: 81 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    variableLiteral: { 81: 123 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).toHaveBeenCalledWith(123);
      expect(a2.gainHp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledWith(81);
      expect(v.value).toReturnWith(123);
    },
  },
  {
    caseName: "gain HP each value=123 allowDeath=false",
    command: {
      code: 311,
      indent: 0,
      parameters: [0, 0, 0, 0, 123, false],
    },
    expected: makeCommandGainActorHP({
      allowDeath: false,
      targetType: "each",
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => each(party),
    actors: { called: [1, 2], notCalled: [] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).toHaveBeenCalledWith(123);
      expect(a2.gainHp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "gain HP each value=123 allowDeath=true",
    command: {
      code: 311,
      indent: 0,
      parameters: [0, 0, 0, 0, 123, true],
    },
    expected: makeCommandGainActorHP({
      allowDeath: true,
      targetType: "each",
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => each(party),
    actors: { called: [1, 2], notCalled: [] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).toHaveBeenCalledWith(123);
      expect(a2.gainHp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "gain HP each value=V[81]:123 allowDeath=true",
    command: {
      code: 311,
      indent: 0,
      parameters: [0, 0, 0, 1, 81, true],
    },
    expected: makeCommandGainActorHP({
      allowDeath: true,
      targetType: "each",
      operand: { mode: "variable", value: 81 },
    }),
    members: (party) => each(party),
    actors: { called: [1, 2], notCalled: [] },
    variableLiteral: { 81: 123 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).toHaveBeenCalledWith(123);
      expect(a2.gainHp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(1);
      expect(v.value).toHaveBeenCalledWith(81);
      expect(v.value).toReturnWith(123);
    },
  },
  {
    caseName: "gain HP actorId=V[80] value=V[81] allowDeath=false",
    command: {
      code: 311,
      indent: 0,
      parameters: [1, 80, 0, 1, 81, false],
    },
    expected: makeCommandGainActorHP({
      allowDeath: false,
      targetType: "variable",
      target: 80,
      operand: { mode: "variable", value: 81 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 80: 2, 81: 123 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).not.toHaveBeenCalled();
      expect(a2.gainHp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(2);
      expect(v.value).toHaveBeenCalledWith(80);
      expect(v.value).toHaveBeenCalledWith(81);
      expect(v.value).toHaveReturnedWith(2);
      expect(v.value).toHaveReturnedWith(123);
    },
  },
  {
    caseName: "gain HP actorId=1 value=V[81]:123 allowDeath=true",
    command: {
      code: 311,
      indent: 0,
      parameters: [0, 1, 0, 1, 81, true],
    },
    expected: makeCommandGainActorHP({
      allowDeath: true,
      targetType: "direct",
      target: 1,
      operand: { mode: "variable", value: 81 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    variableLiteral: { 81: 123 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).toHaveBeenCalledWith(123);
      expect(a2.gainHp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledWith(81);
      expect(v.value).toReturnWith(123);
    },
  },
  {
    caseName: "gain HP each value=V[81]:123 allowDeath=false",
    command: {
      code: 311,
      indent: 0,
      parameters: [0, 0, 0, 1, 81, false],
    },
    expected: makeCommandGainActorHP({
      allowDeath: false,
      targetType: "each",
      operand: { mode: "variable", value: 81 },
    }),
    members: (party) => each(party),
    actors: { called: [1, 2], notCalled: [] },
    variableLiteral: { 81: 123 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).toHaveBeenCalledWith(123);
      expect(a2.gainHp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(1);
      expect(v.value).toHaveBeenCalledWith(81);
      expect(v.value).toReturnWith(123);
    },
  },

  {
    caseName: "gain HP actorId=V[80]:2 value=123 allowDeath=true",
    command: {
      code: 311,
      indent: 0,
      parameters: [1, 80, 0, 0, 123, true],
    },
    expected: makeCommandGainActorHP({
      allowDeath: true,
      targetType: "variable",
      target: 80,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 80: 2 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).not.toHaveBeenCalled();
      expect(a2.gainHp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(1);
      expect(v.value).toHaveBeenCalledWith(80);
      expect(v.value).toReturnWith(2);
    },
  },

  {
    caseName: "gain HP actorId=V[80]:2 value=V[81]:123 allowDeath=true",
    command: {
      code: 311,
      indent: 0,
      parameters: [1, 80, 0, 1, 81, true],
    },
    expected: makeCommandGainActorHP({
      allowDeath: true,
      targetType: "variable",
      target: 80,
      operand: { mode: "variable", value: 81 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 80: 2, 81: 123 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).not.toHaveBeenCalled();
      expect(a2.gainHp).toHaveBeenCalledWith(123);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(2);
      expect(v.value).toHaveBeenCalledWith(80);
      expect(v.value).toHaveBeenCalledWith(81);
      expect(v.value).toHaveReturnedWith(2);
      expect(v.value).toHaveReturnedWith(123);
    },
  }, // HP: lose（減少）パターン
  {
    caseName: "lose HP actorId=1 value=123 allowDeath=false",
    command: {
      code: 311,
      indent: 0,
      parameters: [0, 1, 1, 0, 123, false],
    },
    expected: makeCommandLoseActorHP({
      allowDeath: false,
      targetType: "direct",
      target: 1,
      operand: { mode: "direct", value: 123 },
    }),
    members: (party) => single(party),
    actors: { called: [1], notCalled: [2] },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).toHaveBeenCalledWith(-123);
      expect(a2.gainHp).not.toHaveBeenCalled();
    },
    usingVariables: (v) => {
      expect(v.value).not.toHaveBeenCalled();
    },
  },
  {
    caseName: "lose HP actorId=V[80]:2 value=V[81]:123 allowDeath=true",
    command: {
      code: 311,
      indent: 0,
      parameters: [1, 80, 1, 1, 81, true],
    },
    expected: makeCommandLoseActorHP({
      allowDeath: true,
      targetType: "variable",
      target: 80,
      operand: { mode: "variable", value: 81 },
    }),
    members: (party) => single(party),
    actors: { called: [2], notCalled: [1] },
    variableLiteral: { 80: 2, 81: 123 },
    changeValue: ([a1, a2]) => {
      expect(a1.gainHp).not.toHaveBeenCalled();
      expect(a2.gainHp).toHaveBeenCalledWith(-123);
    },
    usingVariables: (v) => {
      expect(v.value).toHaveBeenCalledTimes(2);
      expect(v.value).toHaveBeenCalledWith(80);
      expect(v.value).toHaveBeenCalledWith(81);
      expect(v.value).toHaveReturnedWith(2);
      expect(v.value).toHaveReturnedWith(123);
    },
  },
];

testCasesHP.forEach((tc) => runTestCase(tc));
