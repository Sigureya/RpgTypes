import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike } from '../../../frame';
import { Designation } from '../../../../rpg';
import { Direction8 } from '../../../../utils';
export interface Command_TransferPlayer extends EventCommandLike<201> {
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
