import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";
import { resolveVehicleLocation, resolveTargetVehicle } from "./vehicle";
import type {
  Rmmz_MapVehicleContainer,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import {
  makeCommandSetVehicleLocation,
  makeCommandSetVehicleLocationFromVariables,
} from "@RpgTypes/rmmz/eventCommand";
import type { VehicleLocation } from "./types";

const createMockVariables = (): MockedObject<Rmmz_Variables> => {
  return {
    value: vi.fn((id: number) => id * 10),
    clear: vi.fn().mockThrow(new Error("not implemented")),
    setValue: vi.fn().mockThrow(new Error("not implemented")),
    onChange: vi.fn().mockThrow(new Error("not implemented")),
  };
};

const createMockedMap = <T>(
  data: T,
): MockedObject<Rmmz_MapVehicleContainer<T>> => {
  return {
    vehicle: vi.fn(() => data),
    ship: vi.fn().mockThrow(new Error("not implemented")),
    boat: vi.fn().mockThrow(new Error("not implemented")),
    airship: vi.fn().mockThrow(new Error("not implemented")),
  };
};

describe("resolveVehicleLocation", () => {
  test("direct location", () => {
    const command = makeCommandSetVehicleLocation({
      mapId: 1,
      x: 24,
      y: 63,
      vehicleId: 0,
    });
    const expected: VehicleLocation = { mapId: 1, x: 24, y: 63 };
    const variables = createMockVariables();
    const location = resolveVehicleLocation(command, variables);
    expect(location).toEqual(expected);
    expect(variables.value).not.toHaveBeenCalled();
    expect(variables.clear).not.toHaveBeenCalled();
    expect(variables.setValue).not.toHaveBeenCalled();
    expect(variables.onChange).not.toHaveBeenCalled();
  });
  test("location from variables", () => {
    const command = makeCommandSetVehicleLocationFromVariables({
      variableMapId: 5,
      variableX: 7,
      variableY: 13,
      vehicleId: 0,
    });
    const expected: VehicleLocation = { mapId: 50, x: 70, y: 130 };
    const variables = createMockVariables();
    const location = resolveVehicleLocation(command, variables);
    expect(location).toEqual(expected);
    expect(variables.value).toHaveBeenCalledTimes(3);
    expect(variables.value).toHaveBeenCalledWith(5);
    expect(variables.value).toHaveBeenCalledWith(7);
    expect(variables.value).toHaveBeenCalledWith(13);
    expect(variables.clear).not.toHaveBeenCalled();
    expect(variables.setValue).not.toHaveBeenCalled();
    expect(variables.onChange).not.toHaveBeenCalled();
  });
});

describe("resolveTargetVehicle", () => {
  test("resolve vehicle from map", () => {
    const mockVehicle = { id: 1, name: "Mock Vehicle" };
    const mockMap = createMockedMap(mockVehicle);
    const command = makeCommandSetVehicleLocation({
      mapId: 44,
      x: 44,
      y: 44,
      vehicleId: 1,
    });
    const vehicle = resolveTargetVehicle(command, mockMap);
    expect(vehicle).toBe(mockVehicle);
    expect(mockMap.vehicle).toHaveBeenCalledOnce();
    expect(mockMap.vehicle).toHaveBeenCalledWith(1);
    expect(mockMap.ship).not.toHaveBeenCalled();
    expect(mockMap.boat).not.toHaveBeenCalled();
    expect(mockMap.airship).not.toHaveBeenCalled();
  });
  test("null", () => {
    const mockMap = createMockedMap(null);
    const command = makeCommandSetVehicleLocation({
      mapId: 44,
      x: 44,
      y: 44,
      vehicleId: 2,
    });
    const vehicle = resolveTargetVehicle(command, mockMap);
    expect(vehicle).toBeNull();
    expect(mockMap.vehicle).toHaveBeenCalledOnce();
    expect(mockMap.vehicle).toHaveBeenCalledWith(2);
    expect(mockMap.ship).not.toHaveBeenCalled();
    expect(mockMap.boat).not.toHaveBeenCalled();
    expect(mockMap.airship).not.toHaveBeenCalled();
  });
});
