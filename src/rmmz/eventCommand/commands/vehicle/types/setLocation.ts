import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Designation } from "@RpgTypes/rmmz/utils";

export interface Command_SetVehicleLocation extends EventCommandLike<202> {
  parameters: ParamArray_SetVehicleLocation;
}

export type ParamArray_SetVehicleLocation = [
  vehicleId: number,
  designation: ValueOf<Designation>,
  mapId: number,
  x: number,
  y: number
];
