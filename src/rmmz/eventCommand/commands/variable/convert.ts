import {
  OPERAND_CONSTANT,
  OPERAND_GAMEDATA,
  OPERAND_RANDOM,
  OPERAND_SCRIPT,
  OPERAND_VARIABLE,
} from "./constatns/operand";
import type {
  Operand_ActorStatus,
  Operand_Constatant,
  Operand_EnemyStatus,
  Operand_ItemData,
  Operand_Random,
  Operand_Script,
  Operand_Variable,
  ParamObject_Operand_ActorStatus,
  ParamObject_Operand_Constant,
  ParamObject_Operand_Enemy,
  ParamObject_Operand_ItemData,
  ParamObject_Operand_Random,
  ParamObject_Operand_Script,
  ParamObject_Operand_Variable,
  ParamObject_WritingTarget,
} from "./types";
import { ENEMY_PARAM_INDEX } from "./types/enemy/dataSource";

export const toArrayOperandConstant = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Constant,
  operation: number = 0
): Operand_Constatant => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_CONSTANT,
  value.value,
];

export const toArrayOperandVariable = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Variable,
  operation: number = 0
): Operand_Variable => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_VARIABLE,
  value.variableId,
];
export const toArrayOperandRandom = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Random,
  operation: number = 0
): Operand_Random => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_RANDOM,
  value.min,
  value.max,
];

export const toArrayOperandScript = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Script,
  operation: number = 0
): Operand_Script => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_SCRIPT,
  value.code,
];
export const toArrayOperandItemData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ItemData,
  operation: number = 0
): Operand_ItemData => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  value.type,
  value.itemId,
];

export const toArrayOperandActorStatus = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ActorStatus,
  operation: number = 0
): Operand_ActorStatus => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  3,
  value.index,
  value.param,
];

export const toArrayOperandEnemyStatus = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Enemy,
  operation: number = 0
): Operand_EnemyStatus => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  4,
  value.index,
  ENEMY_PARAM_INDEX[value.param],
];
