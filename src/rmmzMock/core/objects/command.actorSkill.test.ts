import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  CHANGE_SKILL,
  makeCommandForgetSkill,
  makeCommandForgetSkillByVariable,
  makeCommandForgetSkillEach,
  makeCommandLearnSkill,
  makeCommandLearnSkillByVariable,
  makeCommandLearnSkillEach,
} from "@RpgTypes/rmmz/eventCommand";
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
  "learnSkill",
  "forgetSkill",
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
  learnSkill: vi.fn(),
  forgetSkill: vi.fn(),
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
  actorId: number[];
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
    const msg = `called:${c.fn}`;
    expect(mock[c.fn], msg).toHaveBeenCalled();
    expect(mock[c.fn], msg).toHaveBeenCalledWith(...c.args);
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
      const mocks = runEvent(testCase.commandLiteral);
      test("variable calls", () => {
        expect(mocks.variable.value).toHaveBeenCalledTimes(
          testCase.calls.variableCall.length,
        );
        testCase.calls.variableCall.forEach((variableId) => {
          expect(mocks.variable.value).toHaveBeenCalledWith(variableId);
        });
      });
      test("member calls", () => {
        if (testCase.calls.member.length > 0) {
          expect(mocks.party.members).toHaveBeenCalledOnce();
        } else {
          expect(mocks.party.members).not.toHaveBeenCalled();
        }
      });
      test("actorId calls", () => {
        expect(mocks.actorsContainer.actor).toHaveBeenCalledTimes(
          testCase.calls.actorId.length,
        );
        testCase.calls.actorId.forEach((actorId) => {
          expect(mocks.actorsContainer.actor).toHaveBeenCalledWith(actorId);
        });
      });

      test("actor method calls", () => {
        verifyMethodCalls(mocks.actor, testCase.calls.actor);
        verifyMethodCalls(mocks.member1, testCase.calls.member);
        verifyMethodCalls(mocks.member2, testCase.calls.member);
      });
    });
  });
};
const testCases: TestCase[] = [
  {
    name: "learn skill",
    command: makeCommandLearnSkill({
      actorId: 6,
      skillId: 43,
    }),
    commandLiteral: {
      code: CHANGE_SKILL,
      indent: 0,
      parameters: [0, 6, 0, 43],
    },
    calls: {
      actorId: [6],
      variableCall: [],
      member: [],
      actor: [{ fn: "learnSkill", args: [43] }],
    },
  },
  {
    name: "forget skill",
    command: makeCommandForgetSkill({
      actorId: 6,
      skillId: 143,
    }),
    commandLiteral: {
      code: CHANGE_SKILL,
      indent: 0,
      parameters: [0, 6, 1, 143],
    },
    calls: {
      actorId: [6],
      variableCall: [],
      member: [],
      actor: [{ fn: "forgetSkill", args: [143] }],
    },
  },
  {
    name: "learn skill each",
    command: makeCommandLearnSkillEach({
      skillId: 43,
    }),
    commandLiteral: {
      code: CHANGE_SKILL,
      indent: 0,
      parameters: [0, 0, 0, 43],
    },
    calls: {
      actorId: [],
      variableCall: [],
      member: [{ fn: "learnSkill", args: [43] }],
      actor: [],
    },
  },
  {
    name: "forget skill each",
    command: makeCommandForgetSkillEach({
      skillId: 143,
    }),
    commandLiteral: {
      code: CHANGE_SKILL,
      indent: 0,
      parameters: [0, 0, 1, 143],
    },
    calls: {
      actorId: [],
      variableCall: [],
      member: [{ fn: "forgetSkill", args: [143] }],
      actor: [],
    },
  },
  {
    name: "learn skill by variable",
    command: makeCommandLearnSkillByVariable({
      skillId: 43,
      variableId: MOCK_INDEX_A,
    }),
    commandLiteral: {
      code: CHANGE_SKILL,
      indent: 0,
      parameters: [1, MOCK_INDEX_A, 0, 43],
    },
    calls: {
      actorId: [MOCK_VALUE_A],
      variableCall: [MOCK_INDEX_A],
      member: [],
      actor: [{ fn: "learnSkill", args: [43] }],
    },
  },
  {
    name: "forget skill by variable",
    command: makeCommandForgetSkillByVariable({
      skillId: 143,
      variableId: MOCK_INDEX_B,
    }),
    commandLiteral: {
      code: CHANGE_SKILL,
      indent: 0,
      parameters: [1, MOCK_INDEX_B, 1, 143],
    },
    calls: {
      actorId: [MOCK_VALUE_B],
      variableCall: [MOCK_INDEX_B],
      member: [],
      actor: [{ fn: "forgetSkill", args: [143] }],
    },
  },
];

describe("commandActorVariables", () => {
  testCases.forEach(runTestCase);
});
