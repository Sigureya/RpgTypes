import { CHANGE_MP, CHANGE_TP, CHANGE_HP } from "@RpgTypes/rmmz/rpg";
import { OPERATION_MINUS, OPERATION_PLUS } from "./constants";
import type {
  Command_ChangeActorHP,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
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
    parameters: [
      0,
      params.targetType === "each" ? -1 : params.target,
      OPERATION_PLUS,
      OPERAND[params.operand.mode],
      params.operand.value,
      params.allowDeath,
    ],
  };
};

export const makeCommandLoseActorHP = (
  params: ParamObject_ChangeActorHP,
  indent: number = 0
): Command_ChangeActorHP => {
  return {
    code: CHANGE_HP,
    indent,
    parameters: [
      ...VALIABLE_FUNCTION_TABLE[params.targetType](params, OPERATION_MINUS),
      params.allowDeath,
    ],
  };
};

export const makeCommandGainActorTP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorTP => {
  return {
    code: CHANGE_TP,
    indent,
    parameters: VALIABLE_FUNCTION_TABLE[params.targetType](
      params,
      OPERATION_PLUS
    ),
  };
};

export const makeCommandLoseActorTP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorTP => {
  return {
    code: CHANGE_TP,
    indent,
    parameters: VALIABLE_FUNCTION_TABLE[params.targetType](
      params,
      OPERATION_MINUS
    ),
  };
};

export const makeCommandGainActorMP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorMP => {
  return {
    code: CHANGE_MP,
    indent,
    parameters: VALIABLE_FUNCTION_TABLE[params.targetType](
      params,
      OPERATION_PLUS
    ),
  };
};

export const makeCommandLoseActorMP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorMP => {
  return {
    code: CHANGE_MP,
    indent,
    parameters: VALIABLE_FUNCTION_TABLE[params.targetType](
      params,
      OPERATION_MINUS
    ),
  };
};

const targetEach = (
  params: ParamObject_ChangeActorValue,
  operation: Operation
): ParamArray_ChangeActorValue => {
  return [
    OPERAND.direct,
    -1, // each
    operation,
    OPERAND[params.operand.mode],
    params.operand.value,
  ];
};

const targetDirect = (
  params: ParamObject_ChangeActorValue,
  operation: Operation
): ParamArray_ChangeActorValue => {
  return [
    OPERAND.direct,
    params.target,
    operation,
    OPERAND[params.operand.mode],
    params.operand.value,
  ];
};

const targetValiable = (
  params: ParamObject_ChangeActorValue,
  operation: Operation
): ParamArray_ChangeActorValue => {
  return [
    OPERAND.variable,
    params.target,
    operation,
    OPERAND[params.operand.mode],
    params.operand.value,
  ];
};

const VALIABLE_FUNCTION_TABLE = {
  direct: targetDirect,
  variable: targetValiable,
  each: targetEach,
} as const;
