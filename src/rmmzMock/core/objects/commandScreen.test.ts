import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandSetWeatherEffect } from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Message, Rmmz_Party } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_Screen } from "@RpgTypes/rmmzRuntime/objects/core/screeen";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

type FakeParty = Pick<Rmmz_Party, "inBattle">;
type FakeMessage = Pick<Rmmz_Message, "isBusy">;

type FakeScreen = Pick<
  Rmmz_Screen,
  "changeWeather" | "startFlash" | "startShake"
>;

const createFakeMap = (): FakeMap => ({
  mapId: () => 1,
});

const createMockParty = (inBattle: boolean): MockedObject<FakeParty> => ({
  inBattle: vi.fn().mockReturnValue(inBattle),
});

const createMockMessage = (isBusy: boolean): MockedObject<FakeMessage> => ({
  isBusy: vi.fn().mockReturnValue(isBusy),
});

const createMockScreen = (): MockedObject<FakeScreen> => ({
  changeWeather: vi.fn(),
  startFlash: vi.fn(),
  startShake: vi.fn(),
});

interface MockedObjects {
  map: FakeMap;
  party: MockedObject<FakeParty>;
  message: MockedObject<FakeMessage>;
  screen: MockedObject<FakeScreen>;
}

interface MockArgs {
  messageIsBusy: boolean;
  partyInBattle: boolean;
}

const createObjects = (args: MockArgs): MockedObjects => {
  const mockMap = createFakeMap();
  const mockScreen = createMockScreen();
  const mockParty = createMockParty(args.partyInBattle);
  const mockMessage = createMockMessage(args.messageIsBusy);
  return {
    map: mockMap,
    party: mockParty,
    message: mockMessage,
    screen: mockScreen,
  };
};

const stubGlobal = (objects: MockedObjects) => {
  vi.stubGlobal("$gameMap", objects.map);
  vi.stubGlobal("$gameParty", objects.party);
  vi.stubGlobal("$gameMessage", objects.message);
  vi.stubGlobal("$gameScreen", objects.screen);
};

const assertExactMemberCalls = <T>(
  mock: T,
  expected: MemberFunctions<T>[],
  allKeys: readonly (keyof T & string)[],
) => {
  expected.forEach((e) => {
    expect(mock[e.fn]).toHaveBeenCalledWith(...e.arg);
  });

  const called = new Set(expected.map((e) => e.fn));
  allKeys.forEach((key) => {
    if (called.has(key)) {
      expect(mock[key]).toHaveBeenCalledTimes(1);
    } else {
      expect(mock[key]).not.toHaveBeenCalled();
    }
  });
};

interface TestCase {
  name: string;
  command: EventCommand;
  commandLiteral: EventCommand;
  args: MockArgs;
  fn: {
    screen: MemberFunctions<FakeScreen>[];
    message: MemberFunctions<FakeMessage>[];
    party: MemberFunctions<FakeParty>[];
  };
}

const runTestCase = (testCase: TestCase) => {
  describe(`command ${testCase.commandLiteral.code}${testCase.name}`, () => {
    test("make", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });

    test("exec", () => {
      const mocks = createObjects(testCase.args);
      stubGlobal(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], 0);
      interpreter.executeCommand();
      assertExactMemberCalls(mocks.screen, testCase.fn.screen, [
        "changeWeather",
        "startFlash",
        "startShake",
      ]);
      assertExactMemberCalls(mocks.message, testCase.fn.message, ["isBusy"]);
      assertExactMemberCalls(mocks.party, testCase.fn.party, ["inBattle"]);
    });
  });
};

const testCases: TestCase[] = [
  {
    name: " Set Weather Effect",
    args: { messageIsBusy: false, partyInBattle: false },
    command: makeCommandSetWeatherEffect({
      type: "rain",
      power: 5,
      duration: 10,
      wait: true,
    }),
    commandLiteral: {
      code: 236,
      indent: 0,
      parameters: ["rain", 5, 10, true],
    },
    fn: {
      message: [],
      party: [{ fn: "inBattle", arg: [] }],
      screen: [{ fn: "changeWeather", arg: ["rain", 5, 10] }],
    },
  },
  {
    name: " Set Weather Effect",
    args: { messageIsBusy: false, partyInBattle: true },
    command: makeCommandSetWeatherEffect({
      type: "rain",
      power: 5,
      duration: 10,
      wait: true,
    }),
    commandLiteral: {
      code: 236,
      indent: 0,
      parameters: ["rain", 5, 10, true],
    },
    fn: {
      message: [],
      party: [{ fn: "inBattle", arg: [] }],
      screen: [],
    },
  },
  {
    name: " Set Weather Effect without waiting",
    command: makeCommandSetWeatherEffect({
      type: "storm",
      power: 8,
      duration: 20,
      wait: false,
    }),
    commandLiteral: {
      code: 236,
      indent: 0,
      parameters: ["storm", 8, 20, false],
    },
    args: { messageIsBusy: false, partyInBattle: false },
    fn: {
      message: [],
      party: [{ fn: "inBattle", arg: [] }],
      screen: [{ fn: "changeWeather", arg: ["storm", 8, 20] }],
    },
  },
];

testCases.forEach((testCase) => {
  runTestCase(testCase);
});
