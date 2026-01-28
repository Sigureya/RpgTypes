import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_VEHICLE_IMAGE } from "@RpgTypes/rmmz/rpg";
import type { VehicleType } from "./constants";

export interface Command_ChangeVehicleImage extends EventCommandLike<
  typeof CHANGE_VEHICLE_IMAGE
> {
  parameters: ParamArray_ChangeVehicleImage;
}

export type ParamArray_ChangeVehicleImage = [
  vehicleId: VehicleType,
  characterImage: string,
  characterIndex: number,
];

export interface ParamObject_ChangeVehicleImage {
  vehicleId: VehicleType;
  characterImage: string;
  characterIndex: number;
}
