import type { AudioFileParams } from "@RpgTypes/libs";
import type {
  EventCommandLike,
  CHANGE_VEHICLE_BGM,
} from "@RpgTypes/libs/eventCommand";
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
