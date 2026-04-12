import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ControlVariables_FromMapCharactor } from "@RpgTypes/rmmz/eventCommand";
import {
  MAP_CHARACTOR_PARAM,
  makeCommandVariableFromMapCharactorDirection,
  makeCommandVariableFromMapCharactorScreenX,
  makeCommandVariableFromMapCharactorScreenY,
  makeCommandVariableFromMapCharactorX,
  makeCommandVariableFromMapCharactorY,
  OPERATION_ADD,
  OPERATION_SET,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_OLD_VALUE = 60;
const EVENT_ID = 1;
const TARGET_ID = 41;

const MOCK_X = 12;
const MOCK_Y = 34;
const MOCK_DIRECTION = 8;
const MOCK_SCREEN_X = 123;
const MOCK_SCREEN_Y = 456;

interface FakeMap {
  mapId(): number;
  event(id: number): FakeCharacter;
}

interface FakeParty {
  inBattle(): boolean;
}

interface FakeCharacter {
  x: number;
  y: number;
  direction(): number;
  screenX(): number;
  screenY(): number;
}

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const createMockCharacter = (): MockedObject<FakeCharacter> => ({
  x: MOCK_X,
  y: MOCK_Y,
  direction: vi.fn(() => MOCK_DIRECTION),
  screenX: vi.fn(() => MOCK_SCREEN_X),
  screenY: vi.fn(() => MOCK_SCREEN_Y),
});

const createMockMap = (character: FakeCharacter): MockedObject<FakeMap> => ({
  mapId: vi.fn(() => 1234),
  event: vi.fn((id: number) => {
    if (id !== EVENT_ID) {
      throw new Error("unexpected event id");
    }
    return character;
  }),
});

const createMockParty = (): MockedObject<FakeParty> => ({
  inBattle: vi.fn(() => false),
});

interface TestCase {
  description: string;
  command: Command_ControlVariables_FromMapCharactor;
  commandLiteral: Command_ControlVariables_FromMapCharactor;
  setValues: { id: number; value: number }[];
  additionalChecks?: (
    character: MockedObject<FakeCharacter>,
    map: MockedObject<FakeMap>,
  ) => void;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.description, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });

    test("set variable value", () => {
      const mockedVariables = createMockedVariable();
      const mockedCharacter = createMockCharacter();
      const mockedMap = createMockMap(mockedCharacter);
      const mockedParty = createMockParty();

      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameMap", mockedMap);
      vi.stubGlobal("$gameParty", mockedParty);
      vi.stubGlobal("$gamePlayer", mockedCharacter);

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], EVENT_ID);
      interpreter.executeCommand();

      testCase.setValues.forEach((entry) => {
        expect(mockedVariables.value).toHaveBeenCalledWith(entry.id);
        expect(mockedVariables.setValue).toHaveBeenCalledWith(
          entry.id,
          entry.value,
        );
      });
      expect(mockedVariables.value).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      expect(mockedVariables.setValue).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      expect(randomInt).toHaveBeenCalledTimes(testCase.setValues.length);

      testCase.additionalChecks?.(mockedCharacter, mockedMap);
    });
  });
};

const testCases: TestCase[] = [
  {
    description: "map charactor x set",
    command: makeCommandVariableFromMapCharactorX({
      startId: TARGET_ID,
      charactorId: EVENT_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [
        TARGET_ID,
        TARGET_ID,
        OPERATION_SET,
        3,
        5,
        EVENT_ID,
        MAP_CHARACTOR_PARAM.X,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_X }],
    additionalChecks: (_character, map) => {
      expect(map.event).toHaveBeenCalledWith(EVENT_ID);
    },
  },
  {
    description: "map charactor y set",
    command: makeCommandVariableFromMapCharactorY({
      startId: TARGET_ID,
      charactorId: EVENT_ID,
      operation: OPERATION_SET,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [
        TARGET_ID,
        TARGET_ID,
        OPERATION_SET,
        3,
        5,
        EVENT_ID,
        MAP_CHARACTOR_PARAM.Y,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_Y }],
  },
  {
    description: "map charactor direction set",
    command: makeCommandVariableFromMapCharactorDirection({
      startId: TARGET_ID,
      charactorId: EVENT_ID,
      operation: OPERATION_SET,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [
        TARGET_ID,
        TARGET_ID,
        OPERATION_SET,
        3,
        5,
        EVENT_ID,
        MAP_CHARACTOR_PARAM.DIRECTION,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_DIRECTION }],
    additionalChecks: (character) => {
      expect(character.direction).toHaveBeenCalledTimes(1);
    },
  },
  {
    description: "map charactor screenX set",
    command: makeCommandVariableFromMapCharactorScreenX({
      startId: TARGET_ID,
      charactorId: EVENT_ID,
      operation: OPERATION_SET,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [
        TARGET_ID,
        TARGET_ID,
        OPERATION_SET,
        3,
        5,
        EVENT_ID,
        MAP_CHARACTOR_PARAM.SCREEN_X,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_SCREEN_X }],
    additionalChecks: (character) => {
      expect(character.screenX).toHaveBeenCalledTimes(1);
    },
  },
  {
    description: "map charactor screenY add",
    command: makeCommandVariableFromMapCharactorScreenY({
      startId: TARGET_ID,
      charactorId: EVENT_ID,
      operation: OPERATION_ADD,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [
        TARGET_ID,
        TARGET_ID,
        OPERATION_ADD,
        3,
        5,
        EVENT_ID,
        MAP_CHARACTOR_PARAM.SCREEN_Y,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_OLD_VALUE + MOCK_SCREEN_Y }],
    additionalChecks: (character) => {
      expect(character.screenY).toHaveBeenCalledTimes(1);
    },
  },
];

describe("operateValue - mapCharactor", () => {
  testCases.forEach(runTestCase);
});
