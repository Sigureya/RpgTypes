import type { CHANGE_LEVEL, EventCommandLike } from "@RpgTypes/libs";

export interface Command_ChangeActorLevel extends EventCommandLike<
  typeof CHANGE_LEVEL
> {
  parameters: ParamArray_ChangeActorLevel;
}

export type ParamArray_ChangeActorLevel =
  | ParamArray_LevelUpDirect
  | ParamArray_LevelDownDirect
  | ParamArray_LevelUpByVariable
  | ParamArray_LevelDownByVariable;

export type ParamArray_LevelUpDirect = [
  targetDirect: 0,
  actorId: number,
  operationPlus: 0,
  operandDirect: 0,
  level: number,
  showMessaage: boolean,
];

export type ParamArray_LevelDownDirect = [
  targetDirect: 0,
  actorId: number,
  operationMinus: 1,
  operandDirect: 0,
  level: number,
  showMessaage: boolean,
];

export type ParamArray_LevelUpByVariable = [
  targetDirect: 0,
  actorId: number,
  operationPlus: 0,
  operandVariable: 1,
  variableId: number,
  showMessaage: boolean,
];

export type ParamArray_LevelDownByVariable = [
  targetDirect: 0,
  actorId: number,
  operationMinus: 1,
  operandVariable: 1,
  variableId: number,
  showMessaage: boolean,
];

export interface ParamObject_ChangeLevel {
  actorId: number;
  level: number;
  showMessaage: boolean;
}
