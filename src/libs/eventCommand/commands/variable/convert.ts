import type { ParamObject_Operand_ActorStatus } from "./actor";
import {
  OPERAND_CONSTANT,
  OPERAND_RANDOM,
  OPERAND_VARIABLE,
  OPERAND_GAMEDATA,
  OPERAND_SCRIPT,
} from "./constants";
import type * as Type from "./types";
import { ENEMY_PARAM_INDEX } from "./types/paramIndex";

export const toArrayOperandConstant = (
  target: Type.ParamObject_WritingTarget,
  value: Type.ParamObject_Operand_Constant,
  operation: number = 0
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
  operation: number = 0
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
  operation: number = 0
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
  operation: number = 0
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
  operation: number = 0
): Type.Operand_ItemData => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  value.type,
  value.itemId,
];

export const toArrayOperandActorStatus = (
  target: Type.ParamObject_WritingTarget,
  value: ParamObject_Operand_ActorStatus,
  operation: number = 0
): Type.Operand_ActorStatus => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  3,
  value.index,
  value.param,
];

export const toArrayOperandEnemyStatus = (
  target: Type.ParamObject_WritingTarget,
  value: Type.ParamObject_Operand_Enemy,
  operation: number = 0
): Type.Operand_EnemyStatus => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  4,
  value.index,
  ENEMY_PARAM_INDEX[value.param],
];
