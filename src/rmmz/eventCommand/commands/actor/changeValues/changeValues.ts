import { CHANGE_MP, CHANGE_TP, CHANGE_HP } from "@RpgTypes/rmmz/rpg";
import { OPERATION_MINUS, OPERATION_PLUS } from "./constants";
import type {
  Command_ChangeActorHP,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
  ParamArray_ChangeActorHP,
  ParamArray_ChangeActorValue,
  ParamObject_ChangeActorHP,
  ParamObject_ChangeActorValue,
} from "./types";

const OPERAND = {
  direct: 0,
  variable: 1,
} as const;

type Operation = typeof OPERATION_PLUS | typeof OPERATION_MINUS;

export const makeCommandGainActorHP = (
  params: ParamObject_ChangeActorHP,
  indent: number = 0
): Command_ChangeActorHP => {
  return {
    code: CHANGE_HP,
    indent,
    parameters: changeHpSingleDirect(OPERATION_PLUS, params),
  };
};

export const makeCommandLoseActorHP = (
  params: ParamObject_ChangeActorHP,
  indent: number = 0
): Command_ChangeActorHP => {
  return {
    code: CHANGE_HP,
    indent,
    parameters: changeHpSingleDirect(OPERATION_MINUS, params),
  };
};

export const makeCommandGainActorTP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorTP => {
  return {
    code: CHANGE_TP,
    indent,
    parameters: changeValueSingleDirect(OPERATION_PLUS, params),
  };
};

export const makeCommandLoseActorTP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorTP => {
  return {
    code: CHANGE_TP,
    indent,
    parameters: changeValueSingleDirect(OPERATION_MINUS, params),
  };
};

export const makeCommandGainActorMP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorMP => {
  return {
    code: CHANGE_MP,
    indent,
    parameters: changeValueSingleDirect(OPERATION_PLUS, params),
  };
};

export const makeCommandLoseActorMP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorMP => {
  return {
    code: CHANGE_MP,
    indent,
    parameters: changeValueSingleDirect(OPERATION_MINUS, params),
  };
};

const changeValueSingleDirect = (
  operation: Operation,
  params: ParamObject_ChangeActorValue
): ParamArray_ChangeActorValue => [
  OPERAND.direct,
  params.targetType === "each" ? 0 : params.target,
  operation,
  OPERAND[params.operand.mode],
  params.operand.value,
];

const changeHpSingleDirect = (
  operation: Operation,
  params: ParamObject_ChangeActorHP
): ParamArray_ChangeActorHP => [
  OPERAND.direct,
  params.targetType === "each" ? 0 : params.target,
  operation,
  OPERAND[params.operand.mode],
  params.operand.value,
  params.allowDeath,
];
