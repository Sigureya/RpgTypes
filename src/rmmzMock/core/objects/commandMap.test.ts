import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandChangeBattleBackground,
  makeCommandChangeParallax,
  makeCommandHideMapName,
  makeCommandShowMapName,
} from "@RpgTypes/rmmz/eventCommand";
import {
  CHANGE_BATTLE_BACKGROUND,
  CHANGE_MAP_NAME_DISPLAY,
  CHANGE_PARALLAX,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Map } from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";

const MAP_METHOD_NAMES = [
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

type FakeMap = Pick<Rmmz_Map, "mapId" | (typeof MAP_METHOD_NAMES)[number]>;

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
    test("execute with relevant map calls", () => {
      const map = createMockedMap({});
      vi.stubGlobal("$gameMap", map);
      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.command], 0);
      interpreter.executeCommand();
      testCase.calls.map.forEach(({ fn, args }) => {
        expect(map[fn]).toHaveBeenCalledWith(...args);
      });
    });
    test("execute with irrelevant map calls", () => {
      const set = new Set(testCase.calls.map.map((c) => c.fn));
      const keys = MAP_METHOD_NAMES.filter((k) => !set.has(k));
      const map = createMockedMap({});
      vi.stubGlobal("$gameMap", map);
      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.command], 0);
      interpreter.executeCommand();
      keys.forEach((k) => {
        expect(map[k]).not.toHaveBeenCalled();
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "Change Battle Background",
    command: makeCommandChangeBattleBackground({
      background1: "bg1",
      background2: "bg2",
    }),
    commandLiteral: {
      code: CHANGE_BATTLE_BACKGROUND,
      indent: 0,
      parameters: ["bg1", "bg2"],
    },
    calls: {
      map: [{ fn: "changeBattleback", args: ["bg1", "bg2"] }],
    },
  },
  {
    name: "change parallax",
    command: makeCommandChangeParallax(
      {
        parallaxName: "parallax1",
        loopX: true,
        loopY: false,
        sx: 5,
        sy: 10,
      },
      0,
    ),
    commandLiteral: {
      code: CHANGE_PARALLAX,
      indent: 0,
      parameters: ["parallax1", true, false, 5, 10],
    },
    calls: {
      map: [{ fn: "changeParallax", args: ["parallax1", true, false, 5, 10] }],
    },
  },
  {
    name: "show name display",
    commandLiteral: {
      code: CHANGE_MAP_NAME_DISPLAY,
      indent: 0,
      parameters: [0],
    },
    command: makeCommandShowMapName(),
    calls: {
      map: [{ fn: "enableNameDisplay", args: [] }],
    },
  },
  {
    name: "hide name display",
    commandLiteral: {
      code: CHANGE_MAP_NAME_DISPLAY,
      indent: 0,
      parameters: [1],
    },
    command: makeCommandHideMapName(),
    calls: {
      map: [{ fn: "disableNameDisplay", args: [] }],
    },
  },
];

testCases.forEach(runTestCase);
