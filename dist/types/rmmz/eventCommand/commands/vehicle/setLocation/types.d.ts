import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike2 } from '../../../frame';
import { Designation } from '../../../../rpg';
export interface Command_SetVehicleLocation extends EventCommandLike2<202> {
    parameters: ParamArray_SetVehicleLocation;
}
export type ParamArray_SetVehicleLocation = [
    vehicleId: number,
    designation: ValueOf<Designation>,
    mapId: number,
    x: number,
    y: number
];
