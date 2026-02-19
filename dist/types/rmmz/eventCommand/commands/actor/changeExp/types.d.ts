import { CHANGE_EXP, EventCommandLike } from '../../../../../libs/eventCommand';
export interface Command_ChangeExp extends EventCommandLike<typeof CHANGE_EXP> {
    parameters: ParamArray_ChangeExp;
}
export type ParamArray_ChangeExp = ParamArray_GainExp_Direct | ParamArray_LoseExp_Direct | ParamArray_GainExp_Variable | ParamArray_LoseExp_Variable;
export type ParamArray_GainExp_Direct = [
    targetDirect: 0,
    actorId: number,
    operationPlus: 0,
    operandDirect: 0,
    value: number,
    showMessaage: boolean
];
export type ParamArray_LoseExp_Direct = [
    targetDirect: 0,
    actorId: number,
    operationMinus: 1,
    operandDirect: 0,
    value: number,
    showMessaage: boolean
];
export type ParamArray_GainExp_Variable = [
    targetDirect: 0,
    actorId: number,
    operationPlus: 0,
    operandDirect: 1,
    variableId: number,
    showMessaage: boolean
];
export type ParamArray_LoseExp_Variable = [
    targetDirect: 0,
    actorId: number,
    operationMinus: 1,
    operandDirect: 1,
    variableId: number,
    showMessaage: boolean
];
export interface ParamObject_ChangeExp {
    value: number;
    showMessaage: boolean;
    actorId: number;
}
export interface ParamObject_ChangeExpFromVariable {
    variableId: number;
    showMessaage: boolean;
    actorId: number;
}
