import type { EventCommandLike } from "@RpgTypes/libs/eventCommand";
import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Designation } from "@RpgTypes/rmmz/utils";
import type { VehicleType } from "./constants";

export interface Command_SetVehicleLocation extends EventCommandLike<202> {
  parameters: ParamArray_SetVehicleLocation;
}

export type ParamArray_SetVehicleLocation = [
  vehicleId: VehicleType,
  designation: ValueOf<Designation>,
  mapId: number,
  x: number,
  y: number,
];

export interface ParamObject_SetVehicleLocation {
  vehicleId: VehicleType;
  mapId: number;
  x: number;
  y: number;
}

export interface ParamObject_SetVehicleLocationFromVariables {
  vehicleId: VehicleType;
  variableMapId: number;
  variableX: number;
  variableY: number;
}
