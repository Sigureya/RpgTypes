import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandChangeVehicleImage,
  makeCommandGetOnOffVehicle,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_Map,
  Rmmz_Variables,
  Rmmz_Vehicle,
} from "@RpgTypes/rmmzRuntime";
import type { Rmmz_PlayerCharactor } from "@RpgTypes/rmmzRuntime/objects/core/map/player";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_OLD_VALUE = 60;
const MOCK_MAP_ID = 1234;

const MOCK_VHEICLE_NAME = "mock vehicle";

const FUNCTION_KEYS_PLAYER = [
  "getOnOffVehicle",
] as const satisfies (keyof Rmmz_PlayerCharactor)[];

const FUNCTION_KEYS_VEHICLE = [
  "setLocation",
  "setImage",
] as const satisfies (keyof FakeVehicle)[];

const FUNCTION_KEYS_MAP = [
  "vehicle",
  "boat",
  "ship",
  "airship",
] as const satisfies (keyof FakeMap)[];

type FakePlayer = Pick<Rmmz_PlayerCharactor, "getOnOffVehicle">;
type FakeMap = Pick<
  Rmmz_Map,
  "mapId" | "vehicle" | "boat" | "ship" | "airship"
>;

type FakeVehicle = Pick<Rmmz_Vehicle, "setLocation" | "setImage">;

const createMockPlayer = (): MockedObject<FakePlayer> => ({
  getOnOffVehicle: vi.fn(),
});

const createMockVhicle = (): MockedObject<FakeVehicle> => ({
  setLocation: vi.fn(),
  setImage: vi.fn(),
});

interface MapBundle {
  map: MockedObject<FakeMap>;
  vehicle: MockedObject<FakeVehicle>;
}

const createMockMap = (): MapBundle => {
  const vehicle = createMockVhicle();
  return {
    vehicle,
    map: {
      mapId: vi.fn().mockReturnValue(MOCK_MAP_ID),
      vehicle: vi.fn().mockReturnValue(vehicle),
      boat: vi.fn().mockReturnValue(vehicle),
      ship: vi.fn().mockReturnValue(vehicle),
      airship: vi.fn().mockReturnValue(vehicle),
    },
  };
};

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const createMockObjects = () => {
  const m2 = createMockMap();
  return {
    player: createMockPlayer(),
    map: m2,
    variables: createMockedVariable(),
  };
};

const stubGlobals = (mocks: ReturnType<typeof createMockObjects>) => {
  vi.stubGlobal("$gamePlayer", mocks.player);
  vi.stubGlobal("$gameMap", mocks.map.map);
  vi.stubGlobal("$gameVariables", mocks.variables);
};
const callTestEx2 = <T>(
  mock: T,
  set: MemberFunctions<T>[],
  allKeys: ReadonlyArray<string & keyof T>,
) => {
  set.forEach((s) => {
    expect(mock[s.fn]).toHaveBeenCalledWith(...s.arg);
  });
  const setKeys = new Set(set.map((s) => s.fn));
  allKeys.forEach((key) => {
    if (setKeys.has(key)) {
      expect(mock[key], `call - ${key}`).toHaveBeenCalledTimes(1);
    } else {
      expect(mock[key], `not call - ${key}`).not.toHaveBeenCalled();
    }
  });
};

interface FunctionKeys {
  player: MemberFunctions<FakePlayer>[];
  map: MemberFunctions<FakeMap>[];
  vehicle: MemberFunctions<FakeVehicle>[];
}

interface TestCase {
  testName: string;
  variableIds: number[];
  command: EventCommand;
  commandLiteral: EventCommand;
  functionKeys: FunctionKeys;
}

const runTestCase = (testCase: TestCase) => {
  describe(`${testCase.testName} - Code:${testCase.commandLiteral.code}`, () => {
    test("make", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    test("exec", () => {
      const mocks = createMockObjects();
      stubGlobals(mocks);
      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], 0);
      interpreter.executeCommand();
      callTestEx2<FakePlayer>(
        mocks.player,
        testCase.functionKeys.player,
        FUNCTION_KEYS_PLAYER,
      );
      callTestEx2<FakeMap>(
        mocks.map.map,
        testCase.functionKeys.map,
        FUNCTION_KEYS_MAP,
      );
      callTestEx2<FakeVehicle>(
        mocks.map.vehicle,
        testCase.functionKeys.vehicle,
        FUNCTION_KEYS_VEHICLE,
      );
    });
  });
};

const testCases: TestCase[] = [
  {
    testName: "GetOnOffVehicle",
    variableIds: [],
    command: makeCommandGetOnOffVehicle(4),
    commandLiteral: {
      code: 206,
      indent: 4,
      parameters: [],
    },
    functionKeys: {
      player: [{ fn: "getOnOffVehicle", arg: [] }],
      vehicle: [],
      map: [],
    },
  },
  {
    testName: "Boat setLocation",
    commandLiteral: {
      code: 202,
      indent: 1,
      parameters: [0, 0, 123, 456, 789],
    },
    command: {
      code: 202,
      indent: 1,
      parameters: [0, 0, 123, 456, 789],
    },
    variableIds: [],
    functionKeys: {
      player: [],
      map: [{ fn: "vehicle", arg: [0] }],
      vehicle: [{ fn: "setLocation", arg: [123, 456, 789] }],
    },
  },
  {
    testName: "ChangeVehicleImage",
    commandLiteral: {
      code: 323,
      indent: 3,
      parameters: [1, MOCK_VHEICLE_NAME, 4],
    },
    command: makeCommandChangeVehicleImage(
      { vehicleId: 1, characterImage: MOCK_VHEICLE_NAME, characterIndex: 4 },
      3,
    ),
    variableIds: [],
    functionKeys: {
      player: [],
      map: [{ fn: "vehicle", arg: [1] }],
      vehicle: [{ fn: "setImage", arg: [MOCK_VHEICLE_NAME, 4] }],
    },
  },
  {
    testName: "ChangeVehicleImage",
    commandLiteral: {
      code: 323,
      indent: 3,
      parameters: [2, MOCK_VHEICLE_NAME, 6],
    },
    command: makeCommandChangeVehicleImage(
      { vehicleId: 2, characterImage: MOCK_VHEICLE_NAME, characterIndex: 6 },
      3,
    ),
    variableIds: [],
    functionKeys: {
      player: [],
      map: [{ fn: "vehicle", arg: [2] }],
      vehicle: [{ fn: "setImage", arg: [MOCK_VHEICLE_NAME, 6] }],
    },
  },
];

testCases.forEach((tc) => runTestCase(tc));
