import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike } from '../../../frame';
import { Designation } from '../../../../rpg';
export interface Command_BattleProcessing extends EventCommandLike<301> {
    parameters: ParamArray_BattleProcessing;
}
export type ParamArray_BattleProcessing = [
    designation: ValueOf<Designation> | 2,
    troopId: number,
    canEscape: boolean,
    canLose: boolean
];
