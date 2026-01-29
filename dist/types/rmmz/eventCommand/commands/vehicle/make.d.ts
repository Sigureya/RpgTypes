import { Command_ChangeVehicleBGM, Command_GetOnOffVehicle, ParamObject_ChangeVehicleBGM, Command_ChangeVehicleImage, ParamObject_ChangeVehicleImage, Command_SetVehicleLocation, ParamObject_SetVehicleLocation, ParamObject_SetVehicleLocationFromVariables } from './types';
export declare const makeCommandGetOnOffVehicle: (indent?: number) => Command_GetOnOffVehicle;
export declare const makeCommandChangeVehicleImage: (param: ParamObject_ChangeVehicleImage, indent?: number) => Command_ChangeVehicleImage;
export declare const makeCommandChangeVehicleBGM: (param: ParamObject_ChangeVehicleBGM, indent?: number) => Command_ChangeVehicleBGM;
export declare const makeCommandSetVehicleLocation: (param: ParamObject_SetVehicleLocation, indent?: number) => Command_SetVehicleLocation;
export declare const makeCommandSetVehicleLocationFromVariables: (param: ParamObject_SetVehicleLocationFromVariables, indent?: number) => Command_SetVehicleLocation;
