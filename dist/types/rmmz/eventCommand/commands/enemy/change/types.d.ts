import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike } from '../../../frame';
import { Designation, Operation_AddSub } from '../../../../rpg';
export type ParamArray_ChangeEnemyValue = [
    enemyId: number,
    operation: number,
    operandType: ValueOf<Designation>,
    operand: ValueOf<Operation_AddSub>,
    value: number
];
export interface Command_ChangeEnemyHP extends EventCommandLike<331> {
    parameters: ParamArray_ChangeEnemyValue;
}
export interface Command_ChangeEnemyMP extends EventCommandLike<332> {
    parameters: ParamArray_ChangeEnemyValue;
}
export interface Command_ChangeEnemyTP extends EventCommandLike<342> {
    parameters: ParamArray_ChangeEnemyValue;
}
