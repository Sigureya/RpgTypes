import type { Command_SetVehicleLocation } from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_MapVehicleContainer,
  Rmmz_Vehicle,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import type { VehicleLocation } from "./types";

export const setVehicleLocation = (
  command: Command_SetVehicleLocation,
  map: Rmmz_MapVehicleContainer<Rmmz_Vehicle>,
  variables: Rmmz_Variables,
): void => {
  const vehicle = resolveTargetVehicle(command, map);
  if (vehicle) {
    const { mapId, x, y } = resolveVehicleLocation(command, variables);
    vehicle.setLocation(mapId, x, y);
  }
};

export const resolveTargetVehicle = <T>(
  command: Command_SetVehicleLocation,
  map: Rmmz_MapVehicleContainer<T>,
): T | null => {
  return map.vehicle(command.parameters[0]);
};

export const resolveVehicleLocation = (
  command: Command_SetVehicleLocation,
  variables: Rmmz_Variables,
): VehicleLocation => {
  if (command.parameters[1] === 0) {
    return {
      mapId: command.parameters[2],
      x: command.parameters[3],
      y: command.parameters[4],
    };
  }
  return {
    mapId: variables.value(command.parameters[2]),
    x: variables.value(command.parameters[3]),
    y: variables.value(command.parameters[4]),
  };
};
