import { EventCommandLike } from '../../../frame';
import { CHANGE_HP, CHANGE_MP, CHANGE_TP } from '../../../../rpg';
import { TARGET_DIRECT, TARGET_VARIABLE } from './constants';
export interface Command_ChangeActorHP extends EventCommandLike<typeof CHANGE_HP> {
    parameters: ParamArray_ChangeActorHP;
}
export interface Command_ChangeActorMP extends EventCommandLike<typeof CHANGE_MP> {
    parameters: ParamArray_ChangeActorMP;
}
export interface Command_ChangeActorTP extends EventCommandLike<typeof CHANGE_TP> {
    parameters: ParamArray_ChangeActorTP;
}
export type ParamArray_ChangeActorValue = [
    targetType: typeof TARGET_DIRECT | typeof TARGET_VARIABLE,
    index: number,
    operation: number,
    valueType: number,
    value: number
];
export type ParamArray_ChangeActorMP = ParamArray_ChangeActorValue;
export type ParamArray_ChangeActorTP = ParamArray_ChangeActorValue;
export type ParamArray_ChangeActorHP = [
    targetType: typeof TARGET_DIRECT | typeof TARGET_VARIABLE,
    index: number,
    operation: number,
    valueType: number,
    value: number,
    allowDeath: boolean
];
export type ParamObject_ChangeActorValue = {
    targetType: "direct" | "variable";
    target: number;
    operand: Operand;
} | {
    targetType: "each";
    operand: Operand;
};
interface Operand {
    mode: "variable" | "direct";
    value: number;
}
export type ParamObject_ChangeActorHP = ParamObject_ChangeActorValue & {
    allowDeath: boolean;
};
export {};
