import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike } from '../../../frame';
import { Designation } from '../../../../utils';
export interface Command_SetVehicleLocation extends EventCommandLike<202> {
    parameters: ParamArray_SetVehicleLocation;
}
export type ParamArray_SetVehicleLocation = [
    vehicleId: number,
    designation: ValueOf<Designation>,
    mapId: number,
    x: number,
    y: number
];
