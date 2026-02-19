import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_EXP } from "@RpgTypes/rmmz/rpg";
import type { DIRECT, VARIABLE } from "./constants";

export interface Command_ChangeExp extends EventCommandLike<typeof CHANGE_EXP> {
  parameters: ParamArray_ChangeExp;
}

export type ParamArray_ChangeExp = [
  disignation: typeof DIRECT | typeof VARIABLE,
  operation: number,
  valueType: number,
  value: number,
  showMessaage: boolean,
];

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
