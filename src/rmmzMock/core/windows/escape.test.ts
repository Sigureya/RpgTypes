import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Rmmz_ActorsReadonly, Rmmz_Members } from "@RpgTypes/rmmzRuntime";
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
}

const createFakeParty = (): MockedObject<Rmmz_Members<FakeActor>> => {
  return {
    members: vi.fn().mockReturnValue([MOCK_ACTOR_ALICE, MOCK_ACTOR_BOB]),
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

const createMockedThis = (): MockedObject<FakeWindowBase> => {
  return {
    actorName: vi.fn((n: number) => `actorName${n}`),
    partyMemberName: vi.fn((n: number) => `partyMemberName${n}`),
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
  additonal: () => {};
}

const runTestCases = (testCases: TestCase) => {
  describe("", () => {
    test("Window_Base", () => {
      const textManager = createTextManager();
      vi.stubGlobal("TextManager", textManager);
      const self = createMockedThis();
      const result = Window_Base.prototype.convertEscapeCharacters.call(
        self,
        testCases.input,
      );
      expect(result).toBe(testCases.expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    input: "simple text",
    expected: "simple text",
    additonal: () => ({}),
  },
  {
    input: "\\N[1]",
    expected: "actorName1",
    additonal: () => ({}),
  },
];

testCases.forEach(runTestCases);
