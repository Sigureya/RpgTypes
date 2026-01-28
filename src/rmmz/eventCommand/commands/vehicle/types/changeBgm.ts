import type { AudioFileParams } from "@RpgTypes/libs";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_VEHICLE_BGM } from "@RpgTypes/rmmz/rpg";
import type { VehicleType } from "./constants";

export interface Command_ChangeVehicleBGM extends EventCommandLike<
  typeof CHANGE_VEHICLE_BGM
> {
  parameters: ParamArray_ChangeVehicleBGM;
}

export type ParamArray_ChangeVehicleBGM = [
  vheicleId: VehicleType,
  bgm: AudioFileParams,
];

export interface ParamObject_ChangeVehicleBGM {
  vheicleId: VehicleType;
  bgm: AudioFileParams;
}
