import type { CHANGE_EXP, EventCommandLike } from "@RpgTypes/libs/eventCommand";

export interface Command_ChangeExp extends EventCommandLike<typeof CHANGE_EXP> {
  parameters: ParamArray_ChangeExp;
}

export type ParamArray_ChangeExp =
  | ParamArray_GainExp_Direct
  | ParamArray_LoseExp_Direct
  | ParamArray_GainExp_Variable
  | ParamArray_LoseExp_Variable
  | ParamArray_GainExp_TargetAndOperandVariable
  | ParamArray_LoseExp_TargetAndOperandVariable
  | ParamArray_GainExp_TargetVariable
  | ParamArray_LoseExp_TargetVariable;

export type ParamArray_GainExp_Direct = [
  targetDirect: 0,
  actorId: number,
  operationPlus: 0,
  operandDirect: 0,
  value: number,
  showMessaage: boolean,
];

export type ParamArray_LoseExp_Direct = [
  targetDirect: 0,
  actorId: number,
  operationMinus: 1,
  operandDirect: 0,
  value: number,
  showMessaage: boolean,
];

export type ParamArray_GainExp_Variable = [
  targetDirect: 0,
  actorId: number,
  operationPlus: 0,
  operandDirect: 1,
  variableId: number,
  showMessaage: boolean,
];

export type ParamArray_LoseExp_Variable = [
  targetDirect: 0,
  actorId: number,
  operationMinus: 1,
  operandDirect: 1,
  variableId: number,
  showMessaage: boolean,
];

export type ParamArray_GainExp_TargetVariable = [
  targetVariable: 1,
  targetVariableId: number,
  operationPlus: 0,
  operandVariable: 0,
  value: number,
  showMessaage: boolean,
];

export type ParamArray_LoseExp_TargetVariable = [
  targetVariable: 1,
  targetVariableId: number,
  operationMinus: 1,
  operandVariable: 0,
  value: number,
  showMessaage: boolean,
];

export type ParamArray_GainExp_TargetAndOperandVariable = [
  targetVariable: 1,
  targetVariableId: number,
  operationPlus: 0,
  operandVariable: 1,
  valueVariableId: number,
  showMessaage: boolean,
];

export type ParamArray_LoseExp_TargetAndOperandVariable = [
  targetVariable: 1,
  targetVariableId: number,
  operationMinus: 1,
  operandVariable: 1,
  valueVariableId: number,
  showMessaage: boolean,
];

export interface ParamObject_ChangeExp {
  exp: number;
  showMessaage: boolean;
  actorId: number;
}

export interface ParamObject_ChangeExpFromVariable {
  variableId: number;
  showMessaage: boolean;
  actorId: number;
}

export interface Paramobject_ChangeExpV2 {
  targetVariableId: number;
  value: number;
  showMessaage: boolean;
}

export interface Paramobject_ChangeExpVV {
  targetVariableId: number;
  operandVariableId: number;
  showMessaage: boolean;
}
