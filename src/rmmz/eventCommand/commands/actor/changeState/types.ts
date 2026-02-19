import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeActorState extends EventCommandLike<313> {
  parameters: ParamArray_ChangeActorState;
}

export type ParamArray_ChangeActorState =
  | ParamArray_AddActorStateTarget
  | ParamArray_RemoveActorStateTarget
  | ParamArray_AddActorStateEach
  | ParamArray_RemoveActorStateEach;

export type ParamArray_AddActorStateTarget = [
  modeDirect: 0,
  actorId: number,
  add: 0,
  stateId: number,
];

export type ParamArray_RemoveActorStateTarget = [
  modeDirect: 0,
  actorId: number,
  remove: 1,
  stateId: number,
];

export type ParamArray_AddActorStateEach = [
  modeDirect: 0,
  each: 0,
  add: 0,
  stateId: number,
];

export type ParamArray_RemoveActorStateEach = [
  modeDirect: 0,
  each: 0,
  remove: 1,
  stateId: number,
];

export interface ParamObject_ChangeActorState {
  actorId: number;
  stateId: number;
}
