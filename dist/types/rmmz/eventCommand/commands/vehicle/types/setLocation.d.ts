import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike } from '../../../frame';
import { Designation } from '../../../../utils';
import { VehicleType } from './constants';
export interface Command_SetVehicleLocation extends EventCommandLike<202> {
    parameters: ParamArray_SetVehicleLocation;
}
export type ParamArray_SetVehicleLocation = [
    vehicleId: VehicleType,
    designation: ValueOf<Designation>,
    mapId: number,
    x: number,
    y: number
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
