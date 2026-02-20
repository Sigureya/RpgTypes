import { CHANGE_EXP } from "@RpgTypes/libs";
import type {
  ParamObject_ChangeExp,
  Command_ChangeExp,
  ParamArray_GainExp_Direct,
  ParamArray_LoseExp_Direct,
  ParamObject_ChangeExpFromVariable,
  ParamArray_GainExp_Variable,
  ParamArray_LoseExp_Variable,
  Paramobject_ChangeExpV2,
  ParamArray_GainExp_TargetVariable,
  ParamArray_LoseExp_TargetVariable,
  Paramobject_ChangeExpVV,
  ParamArray_GainExp_TargetAndOperandVariable,
  ParamArray_LoseExp_TargetAndOperandVariable,
} from "./types";

// 直接アクター指定・値指定
export const makeCommandGainExpDirect = (
  param: ParamObject_ChangeExp,
  indent: number = 0,
): Command_ChangeExp => ({
  code: CHANGE_EXP,
  indent,
  parameters: [
    0,
    param.actorId,
    0,
    0,
    param.exp,
    param.showMessaage,
  ] satisfies ParamArray_GainExp_Direct,
});

export const makeCommandLoseExpDirect = (
  param: ParamObject_ChangeExp,
  indent: number = 0,
): Command_ChangeExp => ({
  code: CHANGE_EXP,
  indent,
  parameters: [
    0,
    param.actorId,
    1,
    0,
    param.exp,
    param.showMessaage,
  ] satisfies ParamArray_LoseExp_Direct,
});

// 直接アクター指定・変数指定
export const makeCommandGainExpByVariable = (
  param: ParamObject_ChangeExpFromVariable,
  indent: number = 0,
): Command_ChangeExp => ({
  code: CHANGE_EXP,
  indent,
  parameters: [
    0,
    param.actorId,
    0,
    1,
    param.variableId,
    param.showMessaage,
  ] satisfies ParamArray_GainExp_Variable,
});

export const makeCommandLoseExpByVariable = (
  param: ParamObject_ChangeExpFromVariable,
  indent: number = 0,
): Command_ChangeExp => ({
  code: CHANGE_EXP,
  indent,
  parameters: [
    0,
    param.actorId,
    1,
    1,
    param.variableId,
    param.showMessaage,
  ] satisfies ParamArray_LoseExp_Variable,
});

// アクターを変数で指定・値指定
export const makeCommandGainExpTargetVariable = (
  param: Paramobject_ChangeExpV2,
  indent: number = 0,
): Command_ChangeExp => ({
  code: CHANGE_EXP,
  indent,
  parameters: [
    1,
    param.targetVariableId,
    0,
    0,
    param.value,
    param.showMessaage,
  ] satisfies ParamArray_GainExp_TargetVariable,
});

export const makeCommandLoseExpTargetVariable = (
  param: Paramobject_ChangeExpV2,
  indent: number = 0,
): Command_ChangeExp => ({
  code: CHANGE_EXP,
  indent,
  parameters: [
    1,
    param.targetVariableId,
    1,
    0,
    param.value,
    param.showMessaage,
  ] satisfies ParamArray_LoseExp_TargetVariable,
});

// アクター・増減値ともに変数指定
export const makeCommandGainExpTargetAndOperandVariable = (
  param: Paramobject_ChangeExpVV,
  indent: number = 0,
): Command_ChangeExp => ({
  code: CHANGE_EXP,
  indent,
  parameters: [
    1,
    param.targetVariableId,
    0,
    1,
    param.operandVariableId,
    param.showMessaage,
  ] satisfies ParamArray_GainExp_TargetAndOperandVariable,
});

export const makeCommandLoseExpTargetAndOperandVariable = (
  param: Paramobject_ChangeExpVV,
  indent: number = 0,
): Command_ChangeExp => ({
  code: CHANGE_EXP,
  indent,
  parameters: [
    1,
    param.targetVariableId,
    1,
    1,
    param.operandVariableId,
    param.showMessaage,
  ] satisfies ParamArray_LoseExp_TargetAndOperandVariable,
});
