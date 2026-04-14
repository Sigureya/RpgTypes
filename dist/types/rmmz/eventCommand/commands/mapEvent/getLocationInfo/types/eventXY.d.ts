import { EventCommandLike, GET_LOCATION_INFO } from '../../../../../../libs';
export interface Command_GetEventIdXY extends EventCommandLike<typeof GET_LOCATION_INFO, ParamArray_GetEventIdXY> {
    parameters: ParamArray_GetEventIdXY;
}
export interface Command_GetEventIdXyDirect extends EventCommandLike<typeof GET_LOCATION_INFO, ParamArray_GetEventIdXyDirect> {
    parameters: ParamArray_GetEventIdXyDirect;
}
export type ParamArray_GetEventIdXY = [
    variableId: number,
    modeEventId: 1,
    designationVariable: 1,
    x: number,
    y: number
];
export type ParamArray_GetEventIdXyDirect = [
    variableId: number,
    modeEventId: 1,
    designationDirect: 0,
    x: number,
    y: number
];
