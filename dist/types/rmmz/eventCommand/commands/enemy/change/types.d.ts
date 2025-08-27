import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike2 } from '../../../frame';
import { Designation, Operation_AddSub } from '../../../../rpg';
export type ParamArray_ChangeEnemyParameters = [
    enemyId: number,
    operation: number,
    operandType: ValueOf<Designation>,
    operand: ValueOf<Operation_AddSub>,
    value: number
];
export interface Command_ChangeEnemyHP extends EventCommandLike2<331> {
    parameters: ParamArray_ChangeEnemyParameters;
}
export interface Command_ChangeEnemyMP extends EventCommandLike2<332> {
    parameters: ParamArray_ChangeEnemyParameters;
}
