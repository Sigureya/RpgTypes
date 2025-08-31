import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike2 } from '../../../frame';
import { Designation, Direction8 } from '../../../../rpg';
export interface Command_TransferPlayer extends EventCommandLike2<201> {
    parameters: ParamArray_TransferPlayer;
}
export type ParamArray_TransferPlayer = [
    designation: ValueOf<Designation>,
    mapId: number,
    x: number,
    y: number,
    direction: Direction8,
    fadeType: number
];
