import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike } from '../../../frame';
import { CHANGE_GOLD, Operation_PlusMinus } from '../../../../rpg';
export interface Command_ChangeGold extends EventCommandLike<typeof CHANGE_GOLD> {
    parameters: ParamArray_ChangeGold;
}
export type ParamArray_ChangeGold = [
    operation: ValueOf<Operation_PlusMinus>,
    operandType: number,
    operand: number
];
