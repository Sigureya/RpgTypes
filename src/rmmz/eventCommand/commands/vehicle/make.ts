import { makeAudioFileParams } from "@RpgTypes/libs";
import type { CHANGE_VEHICLE_IMAGE } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ChangeVehicleBGM,
  Command_GetOnOffVehicle,
  ParamObject_ChangeVehicleBGM,
  Command_ChangeVehicleImage,
  ParamObject_ChangeVehicleImage,
  Command_SetVehicleLocation,
  ParamObject_SetVehicleLocation,
  ParamObject_SetVehicleLocationFromVariables,
} from "./types";

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

export const makeCommandChangeVehicleBGM = (
  param: ParamObject_ChangeVehicleBGM,
  indent: number = 0,
): Command_ChangeVehicleBGM => ({
  code: 140,
  indent,
  parameters: [param.vheicleId, makeAudioFileParams(param.bgm)],
});

export const makeCommandSetVehicleLocation = (
  param: ParamObject_SetVehicleLocation,
  indent: number = 0,
): Command_SetVehicleLocation => ({
  code: 202,
  indent,
  parameters: [param.vehicleId, 0, param.mapId, param.x, param.y],
});

export const makeCommandSetVehicleLocationFromVariables = (
  param: ParamObject_SetVehicleLocationFromVariables,
  indent: number = 0,
): Command_SetVehicleLocation => ({
  code: 202,
  indent,
  parameters: [
    param.vehicleId,
    1,
    param.variableMapId,
    param.variableX,
    param.variableY,
  ],
});
