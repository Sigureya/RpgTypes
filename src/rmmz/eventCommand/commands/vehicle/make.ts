import type { CHANGE_VEHICLE_IMAGE } from "@RpgTypes/rmmz/rpg";
import type { Command_GetOnOffVehicle } from "./types";
import type {
  Command_ChangeVehicleImage,
  ParamObject_ChangeVehicleImage,
} from "./types/changeImage";

export const makeCommandGetOnOffVehicle = (
  indent: number = 0,
): Command_GetOnOffVehicle => ({
  code: 206,
  indent,
  parameters: [],
});

export const makeCommandChangeVehicleImage = (
  param: ParamObject_ChangeVehicleImage,
  indent: number = 0,
): Command_ChangeVehicleImage => ({
  code: 323 satisfies typeof CHANGE_VEHICLE_IMAGE,
  indent,
  parameters: [param.vehicleId, param.characterImage, param.characterIndex],
});
