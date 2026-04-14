import { EventCommandLike, GET_LOCATION_INFO } from '../../../../../../libs';
export interface Command_GetTerrainTag extends EventCommandLike<typeof GET_LOCATION_INFO> {
    parameters: ParamArray_GetTerrainTag;
}
export interface Command_GetTerrainTagDirect extends EventCommandLike<typeof GET_LOCATION_INFO> {
    parameters: ParamArray_GetTerrainTagDirect;
}
export type ParamArray_GetTerrainTag = [
    variableId: number,
    modeTerrainTag: 0,
    designationVariable: 1,
    x: number,
    y: number
];
export type ParamArray_GetTerrainTagDirect = [
    variableId: number,
    modeTerrainTag: 0,
    designationDirect: 0,
    x: number,
    y: number
];
