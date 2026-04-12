import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ControlVariables_FromMapCharactor } from "@RpgTypes/rmmz/eventCommand";
import {
  MAP_CHARACTOR_PARAM,
  makeCommandVariableFromMapPlayerDirection,
  makeCommandVariableFromMapPlayerScreenX,
  makeCommandVariableFromMapPlayerScreenY,
  makeCommandVariableFromMapPlayerX,
  makeCommandVariableFromMapPlayerY,
  OPERATION_ADD,
  OPERATION_SET,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_OLD_VALUE = 60;
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

const createMockMap = (): MockedObject<FakeMap> => ({
  mapId: vi.fn(() => 1234),
  event: vi.fn(() => {
    throw new Error("map.event should not be called for map player");
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

const testCommonCalls = (
  testCase: TestCase,
  party: MockedObject<FakeParty>,
  variable: MockedObject<Rmmz_Variables>,
  map: MockedObject<FakeMap>,
) => {
  expect(party.inBattle).toHaveBeenCalledOnce();
  expect(variable.value).toHaveBeenCalledTimes(testCase.setValues.length);
  expect(variable.setValue).toHaveBeenCalledTimes(testCase.setValues.length);
  expect(map.event).not.toHaveBeenCalled();
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.description, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });

    test("inBattle is true", () => {
      const mockedParty: MockedObject<FakeParty> = {
        inBattle: vi.fn(() => true),
      };
      const mockedVariables = createMockedVariable();
      const mockedCharacter = createMockCharacter();
      const mockedMap = createMockMap();

      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameMap", mockedMap);
      vi.stubGlobal("$gameParty", mockedParty);
      vi.stubGlobal("$gamePlayer", mockedCharacter);

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], 1);
      interpreter.executeCommand();

      testCommonCalls(testCase, mockedParty, mockedVariables, mockedMap);
      expect(mockedCharacter.direction).not.toHaveBeenCalled();
      expect(mockedCharacter.screenX).not.toHaveBeenCalled();
      expect(mockedCharacter.screenY).not.toHaveBeenCalled();
      expect(randomInt).toHaveBeenCalledTimes(testCase.setValues.length);
      testCase.setValues.forEach((entry) => {
        expect(mockedVariables.setValue).toHaveBeenCalledWith(
          entry.id,
          expect.any(Number),
        );
      });
    });

    test("set variable value", () => {
      const mockedVariables = createMockedVariable();
      const mockedCharacter = createMockCharacter();
      const mockedMap = createMockMap();
      const mockedParty = createMockParty();

      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameMap", mockedMap);
      vi.stubGlobal("$gameParty", mockedParty);
      vi.stubGlobal("$gamePlayer", mockedCharacter);

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], 1);
      interpreter.executeCommand();

      testCommonCalls(testCase, mockedParty, mockedVariables, mockedMap);
      testCase.setValues.forEach((entry, index) => {
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
    description: "map player x set",
    command: makeCommandVariableFromMapPlayerX({
      startId: TARGET_ID,
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
        -1,
        MAP_CHARACTOR_PARAM.X,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_X }],
    additionalChecks: (character) => {
      expect(character.x).toBe(MOCK_X);
    },
  },
  {
    description: "map player y set range",
    command: makeCommandVariableFromMapPlayerY({
      startId: TARGET_ID,
      endId: TARGET_ID + 2,
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
        -1,
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
    description: "map player direction set",
    command: makeCommandVariableFromMapPlayerDirection({
      startId: TARGET_ID,
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
        -1,
        MAP_CHARACTOR_PARAM.DIRECTION,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_DIRECTION }],
    additionalChecks: (character) => {
      expect(character.direction).toHaveBeenCalledTimes(1);
    },
  },
  {
    description: "map player screenX set",
    command: makeCommandVariableFromMapPlayerScreenX({
      startId: TARGET_ID,
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
        -1,
        MAP_CHARACTOR_PARAM.SCREEN_X,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_SCREEN_X }],
    additionalChecks: (character) => {
      expect(character.screenX).toHaveBeenCalledTimes(1);
    },
  },
  {
    description: "map player screenY add",
    command: makeCommandVariableFromMapPlayerScreenY({
      startId: TARGET_ID,
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
        -1,
        MAP_CHARACTOR_PARAM.SCREEN_Y,
      ],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_OLD_VALUE + MOCK_SCREEN_Y }],
    additionalChecks: (character) => {
      expect(character.screenY).toHaveBeenCalledTimes(1);
    },
  },
];

describe("operateValue - mapPlayer", () => {
  testCases.forEach(runTestCase);
});
