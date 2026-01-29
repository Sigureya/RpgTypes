import { ValueOf } from '../../../../../../libs/templates/valueOf';
import { EventCommandLike } from '../../../../frame';
import { CHANGE_ITEMS } from '../../../../../rpg';
import { Operation_PlusMinus } from '../../../../../utils';
import { OPERAND_DIRECT, OPERAND_VARIABLE } from './constants';
export type Command_ChangeItems = EventCommandLike<typeof CHANGE_ITEMS, ParamArray_ChangeItems>;
export interface Command_ChangeItemsByVariable extends EventCommandLike<typeof CHANGE_ITEMS> {
    parameters: ParamArray_GainItemsVariable | ParamArray_LoseItemVariable;
}
export interface Command_ChangeItemsDirect extends EventCommandLike<typeof CHANGE_ITEMS> {
    parameters: ParamArray_GainItemsDirect | ParamArray_LoseItemsDirect;
}
export interface ParamObject_ChangeItemsFullset {
    operation: ValueOf<Operation_PlusMinus>;
    itemId: number;
    value: number;
    operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
}
export type ParamArray_ChangeItems = ParamArray_GainItemsDirect | ParamArray_LoseItemsDirect | ParamArray_GainItemsVariable | ParamArray_LoseItemVariable;
export type ParamArray_ChangeItemsTemplate<T extends {
    operation: ValueOf<Operation_PlusMinus>;
    operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
}> = [
    itemId: number,
    operation: T["operation"],
    operand: T["operand"],
    value: number
];
export type ParamArray_GainItemsDirect = ParamArray_ChangeItemsTemplate<{
    operation: Operation_PlusMinus["PLUS"];
    operand: typeof OPERAND_DIRECT;
}>;
export type ParamArray_LoseItemsDirect = ParamArray_ChangeItemsTemplate<{
    operation: Operation_PlusMinus["MINUS"];
    operand: typeof OPERAND_DIRECT;
}>;
export type ParamArray_GainItemsVariable = ParamArray_ChangeItemsTemplate<{
    operation: Operation_PlusMinus["PLUS"];
    operand: typeof OPERAND_VARIABLE;
}>;
export type ParamArray_LoseItemVariable = ParamArray_ChangeItemsTemplate<{
    operation: Operation_PlusMinus["MINUS"];
    operand: typeof OPERAND_VARIABLE;
}>;
export interface ParamObject_ChangeItems {
    itemId: number;
    value: number;
}
export interface ParamObject_ChangeItemsV {
    itemId: number;
    variableId: number;
}
