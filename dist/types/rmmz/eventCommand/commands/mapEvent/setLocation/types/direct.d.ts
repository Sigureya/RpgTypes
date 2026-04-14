import { EventCommandLike, SET_EVENT_LOCATION } from '../../../../../../libs/eventCommand';
import { Direction8 } from '../../../../../utils';
export interface Command_SetEventLocationDirect extends EventCommandLike<typeof SET_EVENT_LOCATION> {
    parameters: ParamArray_SetEventLocationDirect;
}
export type SetEventLocationDirection = Direction8 | 0;
export type ParamArray_SetEventLocationDirect = [
    targetCharacterId: number,
    modeDirect: 0,
    x: number,
    y: number,
    direction: SetEventLocationDirection
];
export interface ParamObject_SetEventLocationDirect {
    targetCharacterId: number;
    x: number;
    y: number;
    direction: SetEventLocationDirection;
}
