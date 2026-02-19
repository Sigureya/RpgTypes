import { EventCommandLike, CHANGE_ARMORS } from '../../../../../../libs/eventCommand';
import { ValueOf } from '../../../../../../libs/templates/valueOf';
import { Operation_PlusMinus } from '../../../../../utils';
import { OPERAND_DIRECT, OPERAND_VARIABLE } from './constants';
export type Command_ChangeArmors = EventCommandLike<typeof CHANGE_ARMORS, ParamArray_ChangeArmors>;
export interface Command_ChangeArmorsByVariable extends EventCommandLike<typeof CHANGE_ARMORS> {
    parameters: ParamArray_GainArmorsVariable | ParamArray_LoseArmorVariable;
}
export interface Command_ChangeArmorsDirect extends EventCommandLike<typeof CHANGE_ARMORS> {
    parameters: ParamArray_GainArmorsDirect | ParamArray_LoseArmorsDirect;
}
export interface ParamObject_ChangeArmorsFullset {
    operation: ValueOf<Operation_PlusMinus>;
    armorId: number;
    value: number;
    operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
    includesEquip: boolean;
}
export type ParamArray_ChangeArmors = ParamArray_GainArmorsDirect | ParamArray_LoseArmorsDirect | ParamArray_GainArmorsVariable | ParamArray_LoseArmorVariable;
type ParamArray_ChangeArmorsTemplate<T extends {
    operation: ValueOf<Operation_PlusMinus>;
    operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
}> = [
    armorId: number,
    operation: T["operation"],
    operand: T["operand"],
    value: number,
    includesEquip: boolean
];
export type ParamArray_GainArmorsDirect = ParamArray_ChangeArmorsTemplate<{
    operation: Operation_PlusMinus["PLUS"];
    operand: typeof OPERAND_DIRECT;
}>;
export type ParamArray_LoseArmorsDirect = ParamArray_ChangeArmorsTemplate<{
    operation: Operation_PlusMinus["MINUS"];
    operand: typeof OPERAND_DIRECT;
}>;
export type ParamArray_GainArmorsVariable = ParamArray_ChangeArmorsTemplate<{
    operation: Operation_PlusMinus["PLUS"];
    operand: typeof OPERAND_VARIABLE;
}>;
export type ParamArray_LoseArmorVariable = ParamArray_ChangeArmorsTemplate<{
    operation: Operation_PlusMinus["MINUS"];
    operand: typeof OPERAND_VARIABLE;
}>;
export interface ParamObject_ChangeArmors {
    armorId: number;
    value: number;
}
export interface ParamObject_ChangeArmorsV {
    armorId: number;
    variableId: number;
}
export {};
