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

const SRC_EVENT_ID = 18;

const MOCK_X = 12;
const MOCK_Y = 34;
const MOCK_DIRECTION = 8;
const MOCK_SCREEN_X = 123;
const MOCK_SCREEN_Y = 456;

interface FakeMap {
  mapId(): number;
  event(id: number): FakeCharacter | null;
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

const createMockMap = (
  character: FakeCharacter | null,
): MockedObject<FakeMap> => ({
  mapId: vi.fn(() => 1234),
  event: vi.fn(() => character),
});

const createMockParty = (): MockedObject<FakeParty> => ({
  inBattle: vi.fn(() => false),
});

interface TestCase {
  description: string;
  command: Command_ControlVariables_FromMapCharactor;
  commandLiteral: Command_ControlVariables_FromMapCharactor;
  setValues: { id: number; value: number }[];
  eventId: number;
  additionalChecks?: (
    character: MockedObject<FakeCharacter>,
    map: MockedObject<FakeMap>,
  ) => void;
}

const testCallXX = (
  testCase: TestCase,
  party: MockedObject<FakeParty>,
  variable: MockedObject<Rmmz_Variables>,
) => {
  expect(party.inBattle).toHaveBeenCalledOnce();
  expect(variable.value).toHaveBeenCalledTimes(testCase.setValues.length);
  expect(variable.setValue).toHaveBeenCalledTimes(testCase.setValues.length);
};

const testCallEventNull = (
  testCase: TestCase,
  mockedCharacter: MockedObject<FakeCharacter>,
  mockedVariables: MockedObject<Rmmz_Variables>,
) => {
  expect(mockedCharacter.direction).not.toHaveBeenCalled();
  expect(mockedCharacter.screenX).not.toHaveBeenCalled();
  expect(mockedCharacter.screenY).not.toHaveBeenCalled();
  expect(mockedVariables.value).toHaveBeenCalledWith(TARGET_ID);
  testCase.setValues.forEach((entry) => {
    expect(mockedVariables.setValue).toHaveBeenCalledWith(
      entry.id,
      expect.any(Number),
    );
  });
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.description, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    test("event not found", () => {
      const mockedMap = createMockMap(null);
      const mockedVariables = createMockedVariable();
      const mockedCharacter = createMockCharacter();
      const mockedParty = createMockParty();
      vi.stubGlobal("$gameParty", mockedParty);
      vi.stubGlobal("$gameMap", mockedMap);
      vi.stubGlobal("$gameVariables", mockedVariables);
      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], SRC_EVENT_ID);
      interpreter.executeCommand();
      testCallXX(testCase, mockedParty, mockedVariables);
      expect(randomInt).toHaveBeenCalledTimes(testCase.setValues.length);
      expect(mockedVariables.setValue).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      testCallEventNull(testCase, mockedCharacter, mockedVariables);
    });
    test("inBattle is true", () => {
      const mockedParty: MockedObject<FakeParty> = {
        inBattle: vi.fn(() => true),
      };
      const mockedVariables = createMockedVariable();
      const mockedCharacter = createMockCharacter();
      const mockedMap = createMockMap(mockedCharacter);
      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameMap", mockedMap);
      vi.stubGlobal("$gameParty", mockedParty);
      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], SRC_EVENT_ID);
      interpreter.executeCommand();
      testCallXX(testCase, mockedParty, mockedVariables);
      expect(randomInt).toHaveBeenCalledTimes(testCase.setValues.length);
      expect(mockedVariables.setValue).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      testCallEventNull(testCase, mockedCharacter, mockedVariables);
    });

    test("set variable value", () => {
      const mockedVariables = createMockedVariable();
      const mockedCharacter = createMockCharacter();
      const mockedMap = createMockMap(mockedCharacter);
      const mockedParty = createMockParty();

      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameMap", mockedMap);
      vi.stubGlobal("$gameParty", mockedParty);

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], testCase.eventId);
      interpreter.executeCommand();
      testCallXX(testCase, mockedParty, mockedVariables);
      expect(mockedMap.event).toHaveBeenCalledWith(testCase.eventId);
      expect(mockedMap.event).toHaveBeenCalledOnce();

      testCase.setValues.forEach((entry, index: number) => {
        expect(mockedVariables.value).toHaveBeenCalledWith(entry.id);
        expect(
          mockedVariables.setValue,
          `index of ${index}`,
        ).toHaveBeenCalledWith(entry.id, entry.value);
      });
      expect(randomInt).toHaveBeenCalledTimes(testCase.setValues.length);

      testCase.additionalChecks?.(mockedCharacter, mockedMap);
    });
  });
};

const testCases: TestCase[] = [
  {
    description: "map charactor x set",
    eventId: EVENT_ID,
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
    eventId: EVENT_ID,
    command: makeCommandVariableFromMapCharactorY({
      startId: TARGET_ID,
      endId: TARGET_ID + 2,
      charactorId: EVENT_ID,
      operation: OPERATION_SET,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [
        TARGET_ID,
        TARGET_ID + 2,
        OPERATION_SET,
        3,
        5,
        EVENT_ID,
        MAP_CHARACTOR_PARAM.Y,
      ],
    },
    setValues: [
      { id: TARGET_ID, value: MOCK_Y },
      { id: TARGET_ID + 1, value: MOCK_Y },
      { id: TARGET_ID + 2, value: MOCK_Y },
    ],
  },
  {
    description: "map charactor direction set",
    eventId: EVENT_ID,
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
    eventId: EVENT_ID,
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
    eventId: EVENT_ID,
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
  {
    description: "event self",
    eventId: SRC_EVENT_ID,
    command: makeCommandVariableFromMapCharactorX({
      startId: TARGET_ID,
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
        0,
        MAP_CHARACTOR_PARAM.X,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_X }],
    additionalChecks: (character) => {
      expect(character.x).toBe(MOCK_X);
    },
  },
  {
    description: "event self",
    eventId: SRC_EVENT_ID,
    command: makeCommandVariableFromMapCharactorY({
      startId: TARGET_ID,
      charactorId: 0,
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
        0,
        MAP_CHARACTOR_PARAM.Y,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_Y }],
    additionalChecks: (character) => {
      expect(character.y).toBe(MOCK_Y);
    },
  },
];

describe("operateValue - mapCharactor", () => {
  testCases.forEach(runTestCase);
});
