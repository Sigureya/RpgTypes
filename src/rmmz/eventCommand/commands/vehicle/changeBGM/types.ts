import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_VEHICLE_BGM } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeVehicleBGM
  extends EventCommandLike2<typeof CHANGE_VEHICLE_BGM> {
  parameters: ParamArray_ChangeVehicleBGM;
}

export type ParamArray_ChangeVehicleBGM = [];
