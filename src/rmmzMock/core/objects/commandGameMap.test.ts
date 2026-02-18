import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandChangeBattleBackground } from "@RpgTypes/rmmz/eventCommand/commands/battle/background/make";
import { CHANGE_BATTLE_BACKGROUND } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Map } from "@RpgTypes/rmmzRuntime";

const KEYS = [
  "isScrolling",
  "startScroll",
  "refreshIfNeeded",
  "eraseEvent",
  "changeBattleback",
  "changeParallax",
  "changeTileset",
  "enableNameDisplay",
  "disableNameDisplay",
] as const satisfies (keyof Rmmz_Map)[];

type FakeMap = Pick<Rmmz_Map, "mapId" | (typeof KEYS)[number]>;

interface MapInitialArgs {
  isScrolling?: boolean;
  mapId?: number;
}

const createMockedMap = ({
  isScrolling = false,
  mapId = 123,
}: MapInitialArgs): MockedObject<FakeMap> => {
  return {
    mapId: vi.fn().mockReturnValue(mapId),
    changeBattleback: vi.fn(),
    changeParallax: vi.fn(),
    changeTileset: vi.fn(),
    disableNameDisplay: vi.fn(),
    enableNameDisplay: vi.fn(),
    eraseEvent: vi.fn(),
    refreshIfNeeded: vi.fn(),
    startScroll: vi.fn(),
    isScrolling: vi.fn().mockReturnValue(isScrolling),
  };
};

interface MethodCalls {
  map: MemberFunctions<FakeMap>[];
}

interface TestCase {
  name: string;
  command: EventCommand;
  commandLiteral: EventCommand;
  calls: MethodCalls;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("make", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "Change Battle Background",
    command: makeCommandChangeBattleBackground({}),
    commandLiteral: {
      code: CHANGE_BATTLE_BACKGROUND,
      indent: 0,
      parameters: ["", ""],
    },
    calls: {
      map: [{ fn: "changeBattleback", args: ["", ""] }],
    },
  },
];

testCases.forEach(runTestCase);
