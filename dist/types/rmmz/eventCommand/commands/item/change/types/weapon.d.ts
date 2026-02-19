import { EventCommandLike, CHANGE_WEAPONS } from '../../../../../../libs/eventCommand';
import { Operation_PlusMinus } from '../../../../../utils';
import { OPERAND_DIRECT, OPERAND_VARIABLE } from './constants';
export type Command_ChangeWeapons = EventCommandLike<typeof CHANGE_WEAPONS, ParamArray_ChangeWeapons>;
export interface Command_ChangeWeaponsByVariable extends EventCommandLike<typeof CHANGE_WEAPONS> {
    parameters: ParamArray_GainWeaponsVariable | ParamArray_LoseWeaponVariable;
}
export interface Command_ChangeWeaponsDirect extends EventCommandLike<typeof CHANGE_WEAPONS> {
    parameters: ParamArray_GainWeaponsDirect | ParamArray_LoseWeaponsDirect;
}
export interface ParamObject_ChangeWeaponsFullset {
    operation: Operation_PlusMinus["PLUS"] | Operation_PlusMinus["MINUS"];
    weaponId: number;
    value: number;
    operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
    includesEquip: boolean;
}
export type ParamArray_ChangeWeapons = ParamArray_GainWeaponsDirect | ParamArray_LoseWeaponsDirect | ParamArray_GainWeaponsVariable | ParamArray_LoseWeaponVariable;
export type ParamArray_ChangeWeaponsTemplate<T extends {
    operation: Operation_PlusMinus["PLUS"] | Operation_PlusMinus["MINUS"];
    operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
}> = [
    weaponId: number,
    operation: T["operation"],
    operand: T["operand"],
    value: number,
    includesEquip: boolean
];
export type ParamArray_GainWeaponsDirect = ParamArray_ChangeWeaponsTemplate<{
    operation: Operation_PlusMinus["PLUS"];
    operand: typeof OPERAND_DIRECT;
}>;
export type ParamArray_LoseWeaponsDirect = ParamArray_ChangeWeaponsTemplate<{
    operation: Operation_PlusMinus["MINUS"];
    operand: typeof OPERAND_DIRECT;
}>;
export type ParamArray_GainWeaponsVariable = ParamArray_ChangeWeaponsTemplate<{
    operation: Operation_PlusMinus["PLUS"];
    operand: typeof OPERAND_VARIABLE;
}>;
export type ParamArray_LoseWeaponVariable = ParamArray_ChangeWeaponsTemplate<{
    operation: Operation_PlusMinus["MINUS"];
    operand: typeof OPERAND_VARIABLE;
}>;
export interface ParamObject_ChangeWeapons {
    weaponId: number;
    value: number;
}
export interface ParamObject_ChangeWeaponsV {
    weaponId: number;
    variableId: number;
}
