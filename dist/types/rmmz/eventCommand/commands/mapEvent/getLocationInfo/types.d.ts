import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike } from '../../../frame';
import { Designation, GET_LOCATION_INFO } from '../../../../rpg';
export interface Command_GetLocationInfo extends EventCommandLike<typeof GET_LOCATION_INFO> {
    parameters: ParamArray_GetLocationInfo;
}
export type ParamArray_GetLocationInfo = [
    variableId: number,
    mode: number,
    designation: ValueOf<Designation>,
    x: number,
    y: number
];
