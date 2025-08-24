import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import { CHANGE_MP, CHANGE_TP, CHANGE_HP } from "@RpgTypes/rmmz/rpg";
import { OPERATION_MINUS, OPERATION_PLUS } from "./constants";
import type {
  Command_ChangeActorHP,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
  ParamArray_ChangeActorValue,
  ParamObject_ChangeActorValue,
} from "./types";

const OPERAND = {
  direct: 0,
  variable: 1,
} as const;

type Operation = typeof OPERATION_PLUS | typeof OPERATION_MINUS;

export const makeCommandGainActorHP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorHP => {
  return VFT[params.targetType](CHANGE_HP, params, indent, OPERATION_PLUS);
};

export const makeCommandLoseActorHP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorHP => {
  return VFT[params.targetType](CHANGE_HP, params, indent, OPERATION_MINUS);
};

export const makeCommandGainActorTP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorTP => {
  return VFT[params.targetType](CHANGE_TP, params, indent, OPERATION_PLUS);
};

export const makeCommandLoseActorTP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorTP => {
  return VFT[params.targetType](CHANGE_TP, params, indent, OPERATION_MINUS);
};

export const makeCommandGainActorMP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorMP => {
  return VFT[params.targetType](CHANGE_MP, params, indent, OPERATION_PLUS);
};

export const makeCommandLoseActorMP = (
  params: ParamObject_ChangeActorValue,
  indent: number = 0
): Command_ChangeActorMP => {
  return VFT[params.targetType](CHANGE_MP, params, indent, OPERATION_MINUS);
};

const targetEach = <Code extends number>(
  code: Code,
  params: ParamObject_ChangeActorValue,
  indent: number,
  operation: Operation
): EventCommandLike2<Code, ParamArray_ChangeActorValue> => {
  return {
    code: code,
    indent: indent,
    parameters: [
      OPERAND.direct,
      -1, // each
      operation,
      OPERAND[params.operand.type],
      params.operand.value,
      params.allowDeath,
    ],
  };
};

const targetDirect = <Code extends number>(
  code: Code,
  params: ParamObject_ChangeActorValue,
  indent: number,
  operation: Operation
): EventCommandLike2<Code, ParamArray_ChangeActorValue> => {
  return {
    code: code,
    indent: indent,
    parameters: [
      OPERAND.direct,
      params.target,
      operation,
      OPERAND[params.operand.type],
      params.operand.value,
      params.allowDeath,
    ],
  };
};

const targetValiable = <Code extends number>(
  code: Code,
  params: ParamObject_ChangeActorValue,
  indent: number,
  operation: Operation
): EventCommandLike2<Code, ParamArray_ChangeActorValue> => {
  return {
    code: code,
    indent: indent,
    parameters: [
      OPERAND.variable,
      params.target,
      operation,
      OPERAND[params.operand.type],
      params.operand.value,
      params.allowDeath,
    ],
  };
};

const VFT = {
  direct: targetDirect,
  variable: targetValiable,
  each: targetEach,
} as const;
