import { EventCommandLike, CHANGE_ENEMY_TP, CHANGE_ENEMY_MP, CHANGE_ENEMY_HP } from '../../../../../libs/eventCommand';
import { Designation, Operation_AddSub } from '../../../../utils';
export interface Command_ChangeEnemyHP extends EventCommandLike<typeof CHANGE_ENEMY_HP> {
    parameters: ParamArray_ChangeEnemyHP;
}
export interface Command_ChangeEnemyMP extends EventCommandLike<typeof CHANGE_ENEMY_MP> {
    parameters: ParamArray_ChangeEnemyValue;
}
export interface Command_ChangeEnemyTP extends EventCommandLike<typeof CHANGE_ENEMY_TP> {
    parameters: ParamArray_ChangeEnemyValue;
}
export interface ParamObject_ChangeEnemyValue3 {
    enemyIndex: number;
    valueType: number;
    value: number;
}
export type ParamArray_ChangeEnemyValueTemplate<T extends {
    targetType: Designation["DIRECT"] | Designation["VARIABLE"];
    operation: Operation_AddSub["ADD"] | Operation_AddSub["SUB"];
}> = [
    index: number,
    operation: T["operation"],
    valueType: number,
    value: number
];
export type ParamObject_ChangeEnemyValue = {
    targetIndex?: number;
    operand: Operand;
};
interface Operand {
    mode: "variable" | "direct";
    value: number;
}
export type ParamObject_ChangeEnemyHP = ParamObject_ChangeEnemyValue & {
    allowDeath: boolean;
};
export type ParamArray_LoseAllEnemyMP = ParamArray_ChangeEnemyValueTemplate<{
    targetType: Designation["DIRECT"];
    operation: Operation_AddSub["SUB"];
}>;
export type ParamArray_GainEnemyMP = ParamArray_ChangeEnemyValueTemplate<{
    targetType: Designation["DIRECT"];
    operation: Operation_AddSub["ADD"];
}>;
export type ParamArray_ChangeEnemyValue = [
    index: number,
    operation: Operation_AddSub["ADD"] | Operation_AddSub["SUB"],
    valueType: number,
    value: number
];
export type ParamArray_ChangeEnemyHP = [
    targetType: Designation["DIRECT"] | Designation["VARIABLE"],
    index: number,
    operation: Operation_AddSub["ADD"] | Operation_AddSub["SUB"],
    valueType: number,
    value: number,
    allowDeath: boolean
];
export {};
