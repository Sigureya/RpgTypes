import { CHANGE_EXP } from "@RpgTypes/libs/eventCommand";
import type {
  ParamObject_ChangeExp,
  Command_ChangeExp,
  ParamArray_GainExp_Direct,
  ParamArray_LoseExp_Direct,
  ParamObject_ChangeExpFromVariable,
  ParamArray_GainExp_Variable,
  ParamArray_LoseExp_Variable,
} from "./types";

export const makeCommandGainExp = (
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
    param.value,
    param.showMessaage,
  ] satisfies ParamArray_GainExp_Direct,
});

export const makeCommandLoseExp = (
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
    param.value,
    param.showMessaage,
  ] satisfies ParamArray_LoseExp_Direct,
});

export const makeCommandGainExpVariable = (
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

export const makeCommandLoseExpVariable = (
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
