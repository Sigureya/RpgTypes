import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { AudioFileParams, MemberFunctions } from "@RpgTypes/libs";
import { SET_VEHICLE_LOCATION } from "@RpgTypes/libs/eventCommand";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandChangeVehicleImage,
  makeCommandGetOnOffVehicle,
  makeCommandSetVehicleLocation,
  makeCommandSetVehicleLocationFromVariables,
  makeCommandChangeVehicleBGM,
  VEHICLE_BOAT,
  VEHICLE_SHIP,
} from "@RpgTypes/rmmz/eventCommand/commands/vehicle";
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
const MOCK_AUDIO = {
  name: "bgm_name",
  volume: 80,
  pitch: 100,
  pan: 0,
} as const satisfies AudioFileParams;
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

type FakeVehicle = Pick<Rmmz_Vehicle, "setLocation" | "setImage" | "setBgm">;

const createMockPlayer = (): MockedObject<FakePlayer> => ({
  getOnOffVehicle: vi.fn(),
});

const createMockVhicle = (): MockedObject<FakeVehicle> => ({
  setLocation: vi.fn(),
  setImage: vi.fn(),
  setBgm: vi.fn(),
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
const assertExactMemberCalls = <T>(
  mock: T,
  set: MemberFunctions<T>[],
  allKeys: ReadonlyArray<string & keyof T>,
) => {
  set.forEach((s) => {
    expect(mock[s.fn]).toHaveBeenCalledWith(...s.args);
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

const createTestWorld = (command: EventCommand) => {
  const mocks = createMockObjects();
  stubGlobals(mocks);
  const interpreter = new Game_Interpreter();
  interpreter.setup([command], 0);
  return { interpreter, mocks };
};

const runTestCase = (testCase: TestCase) => {
  describe(`${testCase.testName} - Code:${testCase.commandLiteral.code}`, () => {
    test("make", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    describe("exec", () => {
      test("map", () => {
        const { interpreter, mocks } = createTestWorld(testCase.commandLiteral);
        expect(mocks.map.map.mapId).toHaveBeenCalledOnce();
        interpreter.executeCommand();
        assertExactMemberCalls<FakeMap>(
          mocks.map.map,
          testCase.functionKeys.map,
          FUNCTION_KEYS_MAP,
        );
      });
      test("player", () => {
        const { interpreter, mocks } = createTestWorld(testCase.commandLiteral);
        interpreter.executeCommand();
        assertExactMemberCalls<FakePlayer>(
          mocks.player,
          testCase.functionKeys.player,
          FUNCTION_KEYS_PLAYER,
        );
      });
      test("vehicle", () => {
        const { interpreter, mocks } = createTestWorld(testCase.commandLiteral);
        interpreter.executeCommand();
        assertExactMemberCalls<FakeVehicle>(
          mocks.map.vehicle,
          testCase.functionKeys.vehicle,
          FUNCTION_KEYS_VEHICLE,
        );
      });
      test("variables", () => {
        const { interpreter, mocks } = createTestWorld(testCase.commandLiteral);
        interpreter.executeCommand();
        expect(mocks.variables.setValue).not.toHaveBeenCalled();
        expect(mocks.variables.clear).not.toHaveBeenCalled();
        expect(mocks.variables.onChange).not.toHaveBeenCalled();
        if (testCase.variableIds.length > 0) {
          testCase.variableIds.forEach((varId) => {
            expect(mocks.variables.value).toHaveBeenCalledWith(varId);
          });
        } else {
          expect(mocks.variables.value).not.toHaveBeenCalled();
        }
      });
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
      player: [{ fn: "getOnOffVehicle", args: [] }],
      vehicle: [],
      map: [],
    },
  },
  {
    testName: "Boat setLocation",
    commandLiteral: {
      code: 202,
      indent: 0,
      parameters: [0, 0, 123, 456, 789],
    },
    command: makeCommandSetVehicleLocation({
      vehicleId: VEHICLE_BOAT,
      mapId: 123,
      x: 456,
      y: 789,
    }),
    variableIds: [],
    functionKeys: {
      player: [],
      map: [{ fn: "vehicle", args: [0] }],
      vehicle: [{ fn: "setLocation", args: [123, 456, 789] }],
    },
  },
  {
    testName: "Boat setLocation from variables",
    commandLiteral: {
      code: 202,
      indent: 0,
      parameters: [VEHICLE_BOAT, 1, 41, 42, 43],
    },
    command: makeCommandSetVehicleLocationFromVariables({
      vehicleId: VEHICLE_BOAT,
      variableMapId: 41,
      variableX: 42,
      variableY: 43,
    }),
    variableIds: [41, 42, 43],
    functionKeys: {
      player: [],
      map: [{ fn: "vehicle", args: [VEHICLE_BOAT] }],
      vehicle: [
        {
          fn: "setLocation",
          args: [MOCK_OLD_VALUE, MOCK_OLD_VALUE, MOCK_OLD_VALUE],
        },
      ],
    },
  },
  {
    testName: "Ship setLocation",
    commandLiteral: {
      code: 202,
      indent: 0,
      parameters: [1, 0, 217, 231, 235],
    },
    command: makeCommandSetVehicleLocation({
      vehicleId: 1,
      mapId: 217,
      x: 231,
      y: 235,
    }),
    variableIds: [],
    functionKeys: {
      player: [],
      map: [{ fn: "vehicle", args: [VEHICLE_SHIP] }],
      vehicle: [{ fn: "setLocation", args: [217, 231, 235] }],
    },
  },
  {
    testName: "Ship setLocation from variables",
    commandLiteral: {
      code: SET_VEHICLE_LOCATION,
      indent: 0,
      parameters: [VEHICLE_SHIP, 1, 51, 52, 53],
    },
    command: makeCommandSetVehicleLocationFromVariables({
      vehicleId: VEHICLE_SHIP,
      variableMapId: 51,
      variableX: 52,
      variableY: 53,
    }),
    variableIds: [51, 52, 53],
    functionKeys: {
      player: [],
      map: [{ fn: "vehicle", args: [VEHICLE_SHIP] }],
      vehicle: [
        {
          fn: "setLocation",
          args: [MOCK_OLD_VALUE, MOCK_OLD_VALUE, MOCK_OLD_VALUE],
        },
      ],
    },
  },
  {
    testName: "ChangeVehicle bgm",
    commandLiteral: {
      code: 140,
      indent: 2,
      parameters: [VEHICLE_BOAT, MOCK_AUDIO],
    },

    command: makeCommandChangeVehicleBGM(
      { bgm: MOCK_AUDIO, vheicleId: VEHICLE_BOAT },
      2,
    ),
    variableIds: [],
    functionKeys: {
      player: [],
      map: [{ fn: "vehicle", args: [VEHICLE_BOAT] }],
      vehicle: [{ fn: "setBgm", args: [MOCK_AUDIO] }],
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
      map: [{ fn: "vehicle", args: [1] }],
      vehicle: [{ fn: "setImage", args: [MOCK_VHEICLE_NAME, 4] }],
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
      map: [{ fn: "vehicle", args: [2] }],
      vehicle: [{ fn: "setImage", args: [MOCK_VHEICLE_NAME, 6] }],
    },
  },
];

testCases.forEach((tc) => runTestCase(tc));
