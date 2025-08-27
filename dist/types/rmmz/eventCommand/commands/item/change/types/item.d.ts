import { ValueOf } from '../../../../../../libs/templates/valueOf';
import { EventCommandLike2 } from '../../../../frame';
import { CHANGE_ITEMS, Operation_PlusMinus } from '../../../../../rpg';
import { OPERAND_DIRECT, OPERAND_VARIABLE } from './constants';
export interface Command_ChangeItems extends EventCommandLike2<typeof CHANGE_ITEMS> {
    parameters: ParamArray_ChangeItems;
}
export type ParamArray_ChangeItems = [
    operation: ValueOf<Operation_PlusMinus>,
    itemId: number,
    value: number,
    direct: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE,
    includesEquip: boolean
];
export interface ParamObject_ChangeItemsFullset {
    operation: ValueOf<Operation_PlusMinus>;
    itemId: number;
    value: number;
    operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
    includesEquip: boolean;
}
export interface ParamObject_ChangeItems {
    itemId: number;
    value: number;
}
export interface ParamObject_ChangeItemsV {
    itemId: number;
    variableId: number;
}
