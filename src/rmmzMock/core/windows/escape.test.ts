import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Rmmz_ActorsReadonly,
  Rmmz_Members,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { convertEscapeCharactersMzStyle } from "@RpgTypes/rpgNext/window";
import { Window_Base } from "./rmmz_windows";

interface FakeWindowBase {
  actorName(n: number): string;
  partyMemberName(n: number): string;
}

interface FakeActor {
  name(): string;
}

const MOCK_ACTOR_ALICE: FakeActor = {
  name: () => "Alice",
};

const MOCK_ACTOR_BOB: FakeActor = {
  name: () => "Bob",
};

interface TestMocks {
  actors: MockedObject<Rmmz_ActorsReadonly<FakeActor>>;
  party: MockedObject<Rmmz_Members<FakeActor>>;
  variables: MockedObject<Rmmz_Variables>;
}

const createVariableMock = (): MockedObject<Rmmz_Variables> => {
  return {
    value: vi.fn((variableId: number) => variableId * 2),
    clear: vi.fn(),
    setValue: vi.fn(),
    onChange: vi.fn(),
  };
};

const createFakeParty = (): MockedObject<Rmmz_Members<FakeActor>> => {
  return {
    members: vi.fn().mockReturnValue([MOCK_ACTOR_BOB, MOCK_ACTOR_ALICE]),
  };
};

const createFakeActors = (): MockedObject<Rmmz_ActorsReadonly<FakeActor>> => {
  return {
    actor: vi.fn((actorId: number) => {
      switch (actorId) {
        case 1:
          return MOCK_ACTOR_ALICE;
        case 2:
          return MOCK_ACTOR_BOB;
        default:
          return null;
      }
    }),
  };
};

const createMockedThis = (): FakeWindowBase => {
  return {
    actorName: (n: number) => {
      return Window_Base.prototype.actorName.call(null, n);
    },
    partyMemberName: (n: number) => {
      return Window_Base.prototype.partyMemberName.call(null, n);
    },
  };
};

const createTextManager = () => {
  return {
    currncyUnit: () => "currencyUnit",
  };
};

interface TestCase {
  input: string;
  expected: string;
  verifyCalls: (context: TestMocks) => void;
}

const runTestCases = (testCases: TestCase) => {
  describe(`input : ${testCases.input}`, () => {
    describe("convertEscapeCharactersMzStyle", () => {
      test("result", () => {
        const party = createFakeParty();
        const actors = createFakeActors();
        const textManager = createTextManager();
        const variables = createVariableMock();
        const result = convertEscapeCharactersMzStyle(
          testCases.input,
          actors,
          party,
          variables,
          textManager.currncyUnit(),
        );
        expect(result).toBe(testCases.expected);
      });
      test("calls", () => {
        const party = createFakeParty();
        const actors = createFakeActors();
        const textManager = createTextManager();
        const variables = createVariableMock();
        convertEscapeCharactersMzStyle(
          testCases.input,
          actors,
          party,
          variables,
          textManager.currncyUnit(),
        );
        testCases.verifyCalls({ actors, party, variables });
      });
    });
    describe("Window_Base", () => {
      test("result", () => {
        const party = createFakeParty();
        const actors = createFakeActors();
        const textManager = createTextManager();
        vi.stubGlobal("TextManager", textManager);
        vi.stubGlobal("$gameActors", actors);
        vi.stubGlobal("$gameParty", party);
        const self = createMockedThis();
        const result = Window_Base.prototype.convertEscapeCharacters.call(
          self,
          testCases.input,
        );
        expect(result).toBe(testCases.expected);
      });
      test("calls", () => {
        const party = createFakeParty();
        const actors = createFakeActors();
        const textManager = createTextManager();
        const variables = createVariableMock();
        vi.stubGlobal("TextManager", textManager);
        vi.stubGlobal("$gameActors", actors);
        vi.stubGlobal("$gameParty", party);
        vi.stubGlobal("$gameVariables", variables);
        const self = createMockedThis();
        Window_Base.prototype.convertEscapeCharacters.call(
          self,
          testCases.input,
        );
        testCases.verifyCalls({ actors, party, variables });
      });
      vi.resetAllMocks();
    });
  });
};

const testCases: TestCase[] = [
  {
    input: "simple text",
    expected: "simple text",
    verifyCalls: ({ actors, party }) => {
      expect(actors.actor).not.toHaveBeenCalled();
      expect(party.members).not.toHaveBeenCalled();
    },
  },
  {
    input: "\\V[1]",
    expected: "2",
    verifyCalls: (context) => {
      expect(context.actors.actor).not.toHaveBeenCalled();
      expect(context.party.members).not.toHaveBeenCalled();
      expect(context.variables.value).toHaveBeenCalledWith(1);
      expect(context.variables.value).toHaveBeenCalledOnce();
    },
  },
  {
    input: "\\V[\\V[32]]",
    expected: "128",
    verifyCalls: (context) => {
      expect(context.actors.actor).not.toHaveBeenCalled();
      expect(context.party.members).not.toHaveBeenCalled();
      expect(context.variables.value).toHaveBeenNthCalledWith(1, 32);
      expect(context.variables.value).toHaveBeenNthCalledWith(2, 64);
      expect(context.variables.value).toHaveBeenCalledTimes(2);
    },
  },
  {
    input: "\\N[1]",
    expected: "Alice",
    verifyCalls: ({ actors, party }) => {
      expect(actors.actor).toHaveBeenCalledWith(1);
      expect(actors.actor).toHaveBeenCalledOnce();
      expect(party.members).not.toHaveBeenCalled();
    },
  },
  {
    input: "\\N[1] and \\N[2]",
    expected: "Alice and Bob",
    verifyCalls: (context) => {
      expect(context.actors.actor).toHaveBeenCalledWith(1);
      expect(context.actors.actor).toHaveBeenCalledWith(2);
      expect(context.actors.actor).toHaveBeenCalledTimes(2);
      expect(context.party.members).not.toHaveBeenCalled();
      expect(context.variables.value).not.toHaveBeenCalled();
    },
  },
  {
    input: "\\N[1] and \\N[1]",
    expected: "Alice and Alice",
    verifyCalls: (context) => {
      expect(context.actors.actor).toHaveBeenCalledWith(1);
      // Window_Baseでは2回呼ばれている。新関数では1回にする構想があるため、検証外とする。
      // expect(context.actors.actor).toHaveBeenCalledOnce();
      expect(context.party.members).not.toHaveBeenCalled();
      expect(context.variables.value).not.toHaveBeenCalled();
    },
  },
  {
    input: "\\P[1]",
    expected: "Bob",
    verifyCalls: (context) => {
      expect(context.actors.actor).not.toHaveBeenCalled();
      expect(context.party.members).toHaveBeenCalledOnce();
      expect(context.variables.value).not.toHaveBeenCalled();
    },
  },
];

testCases.forEach(runTestCases);
