import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_VEHICLE_IMAGE } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeVehicleImage extends EventCommandLike<
  typeof CHANGE_VEHICLE_IMAGE
> {
  parameters: ParamArray_ChangeVehicleImage;
}

export type ParamArray_ChangeVehicleImage = [
  vehicleId: number,
  characterImage: string,
  characterIndex: number,
];

export interface ParamObject_ChangeVehicleImage {
  vehicleId: number;
  characterImage: string;
  characterIndex: number;
}
