import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike2 } from '../../../frame';
import { Designation } from '../../../../rpg';
export interface Command_BattleProcessing extends EventCommandLike2<301> {
    parameters: [
        designation: ValueOf<Designation> | 2,
        troopId: number,
        canEscape: boolean,
        canLose: boolean
    ];
}
