import { Designation, Operation_AddSub, ValueOf } from './constants';
export type Param_ChangeEnemyParameters = [
    enemyId: number,
    operation: number,
    operandType: ValueOf<Designation>,
    operand: ValueOf<Operation_AddSub>,
    value: number
];
export type Param_EnemyIterate = [enemyId: number];
