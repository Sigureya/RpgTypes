import { EventCommandLike, TRANSFER_PLAYER } from '../../../../../libs/eventCommand';
import { Designation, Direction8 } from '../../../../utils';
export type Command_TransferPlayer = Command_TransferPlayerDirect | Command_TransferPlayerVariable;
export interface Command_TransferPlayerDirect extends EventCommandLike<typeof TRANSFER_PLAYER> {
    parameters: ParamArray_TransferPlayerDirect;
}
export interface Command_TransferPlayerVariable extends EventCommandLike<typeof TRANSFER_PLAYER> {
    parameters: ParamArray_TransferPlayerVariable;
}
export interface ParamObject_TransferPlayer {
    mapId: number;
    x: number;
    y: number;
    direction: Direction8;
    fadeType: number;
}
export type ParamArray_TransferPlayer = ParamArray_TransferPlayerDirect | ParamArray_TransferPlayerVariable;
export type ParamArray_TransferPlayerDirect = [
    designation: Designation["DIRECT"],
    mapId: number,
    x: number,
    y: number,
    direction: Direction8,
    fadeType: number
];
export type ParamArray_TransferPlayerVariable = [
    designation: Designation["VARIABLE"],
    mapIdVariableId: number,
    xVariableId: number,
    yVariableId: number,
    direction: Direction8,
    fadeType: number
];
