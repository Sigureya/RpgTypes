import { ValueOf } from '../../../../../../libs/templates/valueOf';
import { EventCommandLike2 } from '../../../../frame';
import { CHANGE_WEAPONS, Operation_PlusMinus } from '../../../../../rpg';
import { OPERAND_DIRECT, OPERAND_VARIABLE } from './constants';
export interface Command_ChangeWeapons extends EventCommandLike2<typeof CHANGE_WEAPONS> {
    parameters: ParamArray_ChangeWeapons;
}
export interface ParamObject_ChangeWeaponsFullset {
    operation: ValueOf<Operation_PlusMinus>;
    weaponId: number;
    value: number;
    operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
    includesEquip: boolean;
}
export type ParamArray_ChangeWeapons = [
    operation: ValueOf<Operation_PlusMinus>,
    weaponId: number,
    value: number,
    direct: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE,
    includesEquip: boolean
];
export interface ParamObject_ChangeWeapons {
    weaponId: number;
    value: number;
}
export interface ParamObject_ChangeWeaponsV {
    weaponId: number;
    variableId: number;
}
