import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandGainExp,
  makeCommandGainExpVariable,
  makeCommandLoseExp,
  makeCommandLoseExpVariable,
} from "@RpgTypes/rmmz/eventCommand/commands/actor/changeExp/make";
import type {
  Rmmz_Actor,
  Rmmz_Party,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import type { FakeActors, FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

type FakeParty = Pick<Rmmz_Party, "members">;

type FakeActor = Pick<Rmmz_Actor, (typeof KEYS)[number]>;

type FakeVariable = Pick<Rmmz_Variables, "value">;

const KEYS = [
  "addParam",
  "changeExp",
  "changeLevel",
  "currentExp",
  "currentLevel",
] as const satisfies (keyof Rmmz_Actor)[];

const createFakeMap = (): FakeMap => ({
  mapId: () => 211,
});

const createMockParty = (
  actors: MockedObject<FakeActor>[],
): MockedObject<FakeParty> => ({
  members: vi.fn().mockReturnValue(actors),
});

const createMockedActorsContainer = (
  actor: MockedObject<FakeActor>,
): MockedObject<FakeActors> => ({
  actor: vi.fn().mockReturnValue(actor),
});

const MOCK_VALUE_A = 211;
const MOCK_INDEX_A = 313;

const MOCK_VALUE_B = 209;
const MOCK_INDEX_B = 233;

const MOCK_VALUE_C = 811;

const MOCK_CURRENT_EXP_VALUE = 120000;

const createMockedVarible = (): MockedObject<FakeVariable> => ({
  value: vi.fn((x: number) => {
    if (x === MOCK_INDEX_A) {
      return MOCK_VALUE_A;
    }
    if (x === MOCK_INDEX_B) {
      return MOCK_VALUE_B;
    }
    return MOCK_VALUE_C;
  }),
});

const createMockedActor = (): MockedObject<FakeActor> => ({
  addParam: vi.fn(),
  changeExp: vi.fn(),
  changeLevel: vi.fn(),
  currentExp: vi.fn().mockReturnValue(MOCK_CURRENT_EXP_VALUE),
  currentLevel: vi.fn(),
});

interface MockObjects {
  actor: MockedObject<FakeActor>;
  member1: MockedObject<FakeActor>;
  member2: MockedObject<FakeActor>;
  party: MockedObject<FakeParty>;
  actorsContainer: MockedObject<FakeActors>;
  map: FakeMap;
  variable: MockedObject<FakeVariable>;
}

const createMockObjects = (): MockObjects => {
  const actor = createMockedActor();
  const member1 = createMockedActor();
  const member2 = createMockedActor();
  const party = createMockParty([member1, member2]);
  const actorsContainer = createMockedActorsContainer(actor);
  return {
    actor,
    member1,
    member2,
    party,
    actorsContainer,
    map: createFakeMap(),
    variable: createMockedVarible(),
  };
};

const stubGlobal = (objects: MockObjects) => {
  vi.stubGlobal("$gameParty", objects.party);
  vi.stubGlobal("$gameActors", objects.actorsContainer);
  vi.stubGlobal("$gameMap", objects.map);
  vi.stubGlobal("$gameVariables", objects.variable);
};

const runEvent = (command: EventCommand): MockObjects => {
  const mocks = createMockObjects();
  stubGlobal(mocks);
  const interpreter = new Game_Interpreter();
  interpreter.setup([command], 0);
  interpreter.executeCommand();
  return mocks;
};

interface MethodCalls {
  variableCall: number[];
  member: MemberFunctions<FakeActor>[];
  actor: MemberFunctions<FakeActor>[];
}

interface TestCase {
  name: string;
  command: EventCommand;
  commandLiteral: EventCommand;
  calls: MethodCalls;
}

const verifyMethodCalls = (
  mock: MockedObject<FakeActor>,
  expectedCalls: MemberFunctions<FakeActor>[],
) => {
  expectedCalls.forEach((c) => {
    expect(mock[c.fn]).toHaveBeenCalledOnce();
    expect(mock[c.fn]).toHaveBeenCalledWith(...c.args);
  });
  KEYS.filter((key) => expectedCalls.every((c) => c.fn !== key)).forEach(
    (key) => {
      expect(mock[key], `called:${key}`).not.toHaveBeenCalled();
    },
  );
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("command structure", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    describe("command execution", () => {
      test("variable calls", () => {
        const mocks = runEvent(testCase.commandLiteral);
        expect(mocks.variable.value).toHaveBeenCalledTimes(
          testCase.calls.variableCall.length,
        );
        testCase.calls.variableCall.forEach((variableId) => {
          expect(mocks.variable.value).toHaveBeenCalledWith(variableId);
        });
      });
      test("actor member calls", () => {
        const mocks = runEvent(testCase.commandLiteral);
        verifyMethodCalls(mocks.actor, testCase.calls.actor);
        verifyMethodCalls(mocks.member1, testCase.calls.member);
        verifyMethodCalls(mocks.member2, testCase.calls.member);
      });
    });
  });
};
const testCases: TestCase[] = [
  {
    name: "addExp",
    command: makeCommandGainExp({
      actorId: 1,
      value: 100,
      showMessaage: true,
    }),
    commandLiteral: {
      code: 315,
      indent: 0,
      parameters: [0, 1, 0, 0, 100, true],
    },
    calls: {
      variableCall: [],
      member: [],
      actor: [
        { fn: "currentExp", args: [] },
        {
          fn: "changeExp",
          args: [100 + MOCK_CURRENT_EXP_VALUE, true],
        },
      ],
    },
  },
  {
    name: "loseExp",
    command: makeCommandLoseExp({
      actorId: 1,
      value: 719,
      showMessaage: true,
    }),
    commandLiteral: {
      code: 315,
      indent: 0,
      parameters: [0, 1, 1, 0, 719, true],
    },
    calls: {
      variableCall: [],
      member: [],
      actor: [
        { fn: "currentExp", args: [] },
        {
          fn: "changeExp",
          args: [MOCK_CURRENT_EXP_VALUE - 719, true],
        },
      ],
    },
  },
  {
    name: "addExp with variable",
    command: makeCommandGainExpVariable({
      actorId: 1,
      variableId: MOCK_INDEX_A,
      showMessaage: true,
    }),
    commandLiteral: {
      code: 315,
      indent: 0,
      parameters: [0, 1, 0, 1, MOCK_INDEX_A, true],
    },
    calls: {
      variableCall: [MOCK_INDEX_A],
      member: [],
      actor: [
        { fn: "currentExp", args: [] },
        {
          fn: "changeExp",
          args: [MOCK_VALUE_A + MOCK_CURRENT_EXP_VALUE, true],
        },
      ],
    },
  },
  {
    name: "loseExp with variable",
    commandLiteral: {
      code: 315,
      indent: 0,
      parameters: [0, 1, 1, 1, MOCK_INDEX_B, true],
    },
    command: makeCommandLoseExpVariable({
      actorId: 1,
      variableId: MOCK_INDEX_B,
      showMessaage: true,
    }),
    calls: {
      variableCall: [MOCK_INDEX_B],
      member: [],
      actor: [
        { fn: "currentExp", args: [] },
        {
          fn: "changeExp",
          args: [MOCK_CURRENT_EXP_VALUE - MOCK_VALUE_B, true],
        },
      ],
    },
  },
];

describe("commandActorVariables", () => {
  testCases.forEach(runTestCase);
});
