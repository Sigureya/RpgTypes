import { EventCommandLike, TRANSFER_PLAYER } from '../../../../../libs/eventCommand';
import { Designation, Direction8 } from '../../../../utils';
export interface Command_TransferPlayer extends EventCommandLike<typeof TRANSFER_PLAYER> {
    parameters: ParamArray_TransferPlayer;
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
