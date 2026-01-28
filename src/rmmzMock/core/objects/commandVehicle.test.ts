import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandChangeVehicleImage,
  makeCommandGetOnOffVehicle,
} from "@RpgTypes/rmmz/eventCommand/commands/vehicle/make";
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

const callTestEx = <T>(
  mock: T,
  set: ReadonlySet<string & keyof T>,
  allKeys: ReadonlyArray<string & keyof T>,
) => {
  allKeys.forEach((key) => {
    if (set.has(key)) {
      expect(mock[key], `call - ${key}`).toHaveBeenCalledTimes(1);
    } else {
      expect(mock[key], `not call - ${key}`).not.toHaveBeenCalled();
    }
  });
};

type VehicleFn = {
  [K in keyof FakeVehicle]: { fn: K; arg: Parameters<FakeVehicle[K]> };
}[keyof FakeVehicle];

interface FunctionKeys {
  player: (keyof FakePlayer)[];
  map: (keyof FakeMap)[];
  vehicle: VehicleFn[];
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
      callTestEx<FakePlayer>(
        mocks.player,
        new Set(testCase.functionKeys.player),
        FUNCTION_KEYS_PLAYER,
      );
      callTestEx<FakeMap>(
        mocks.map.map,
        new Set(testCase.functionKeys.map),
        FUNCTION_KEYS_MAP,
      );
      callTestEx<FakeVehicle>(
        mocks.map.vehicle,
        new Set(testCase.functionKeys.vehicle.map((f) => f.fn)),
        FUNCTION_KEYS_VEHICLE,
      );
      testCase.functionKeys.vehicle.forEach((f) => {
        expect(mocks.map.vehicle[f.fn]).toHaveBeenCalledWith(...f.arg);
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
      player: ["getOnOffVehicle"],
      vehicle: [],
      map: [],
    },
  },
  {
    testName: "",
    commandLiteral: {
      code: 202,
      indent: 1,
      parameters: [0, 0, 0, 0, 0],
    },
    command: {
      code: 202,
      indent: 1,
      parameters: [0, 0, 0, 0, 0],
    },
    variableIds: [],
    functionKeys: {
      player: [],
      map: ["vehicle"],
      vehicle: [{ fn: "setLocation", arg: [0, 0, 0] }],
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
      map: ["vehicle"],
      vehicle: [{ fn: "setImage", arg: [MOCK_VHEICLE_NAME, 4] }],
    },
  },
];

testCases.forEach((tc) => runTestCase(tc));
