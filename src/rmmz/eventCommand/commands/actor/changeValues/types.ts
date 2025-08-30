import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_HP, CHANGE_MP, CHANGE_TP } from "@RpgTypes/rmmz/rpg";
import type { TARGET_DIRECT, TARGET_VARIABLE } from "./constants";

export interface Command_ChangeActorHP
  extends EventCommandLike2<typeof CHANGE_HP> {
  parameters: ParamArray_ChangeActorHP;
}

export interface Command_ChangeActorMP
  extends EventCommandLike2<typeof CHANGE_MP> {
  parameters: ParamArray_ChangeActorMP;
}

export interface Command_ChangeActorTP
  extends EventCommandLike2<typeof CHANGE_TP> {
  parameters: ParamArray_ChangeActorTP;
}

export type ParamArray_ChangeActorValue = [
  targetType: typeof TARGET_DIRECT | typeof TARGET_VARIABLE,
  index: number,
  operation: number,
  valueType: number,
  value: number
];

export type ParamArray_ChangeActorMP = ParamArray_ChangeActorValue;
export type ParamArray_ChangeActorTP = ParamArray_ChangeActorValue;

export type ParamArray_ChangeActorHP = [
  targetType: typeof TARGET_DIRECT | typeof TARGET_VARIABLE,
  index: number,
  operation: number,
  valueType: number,
  value: number,
  allowDeath: boolean
];

export interface ParamObject_ChangeActorValue {
  allowDeath: boolean;
  targetType: "direct" | "variable" | "each";
  target: number;
  operation: "plus" | "minus";
  operand: { type: "variable" | "direct"; value: number };
}

export type ParamObject_ChangeActorHP = ParamObject_ChangeActorValue & {
  allowDeath: boolean;
};
