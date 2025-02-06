import { Designation, Operation_AddSub, ValueOf } from './constants';
export type ChangeEnemyParameters = [
    enemyId: number,
    operation: number,
    operandType: ValueOf<Designation>,
    operand: ValueOf<Operation_AddSub>,
    value: number
];
