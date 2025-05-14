import {
  OPERAND_CONSTANT,
  OPERAND_RANDOM,
  OPERAND_VARIABLE,
  OPERAND_GAMEDATA,
  OPERAND_SCRIPT,
} from "./constants";
import type * as Type from "./types";

export const toArrayOperandConstant = (
  target: Type.ParamObject_WritingTarget,
  value: Type.ParamObject_Operand_Constant,
  operation: number
): Type.Operand_Constatant => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_CONSTANT,
  value.value,
];

export const toArrayOperandVariable = (
  target: Type.ParamObject_WritingTarget,
  value: Type.ParamObject_Operand_Variable,
  operation: number
): Type.Operand_Variable => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_VARIABLE,
  value.variableId,
];
export const toArrayOperandRandom = (
  target: Type.ParamObject_WritingTarget,
  value: Type.ParamObject_Operand_Random,
  operation: number
): Type.Operand_Random => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_RANDOM,
  value.min,
  value.max,
];

export const toArrayOperandScript = (
  target: Type.ParamObject_WritingTarget,
  value: Type.ParamObject_Operand_Script,
  operation: number
): Type.Operand_Script => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_SCRIPT,
  value.code,
];
export const toArrayOperandItemData = (
  target: Type.ParamObject_WritingTarget,
  value: Type.ParamObject_Operand_ItemData,
  operation: number
): Type.Operand_ItemData => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  value.type,
  value.itemId,
];

export const toArrayOperandStatusData = (
  target: Type.ParamObject_WritingTarget,
  value: Type.ParamObject_Operand_StatusData,
  operation: number
): Type.Operand_StatusData => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  value.type,
  value.index,
  value.param,
];
