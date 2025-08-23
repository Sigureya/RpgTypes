import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike2 } from '../../../frame';
import { CHANGE_GOLD, Operation_PlusMinus } from '../../../../rpg';
export interface Command_ChangeGold2 extends EventCommandLike2<typeof CHANGE_GOLD> {
    parameters: [
        operation: ValueOf<Operation_PlusMinus>,
        operandType: number,
        operand: number
    ];
}
