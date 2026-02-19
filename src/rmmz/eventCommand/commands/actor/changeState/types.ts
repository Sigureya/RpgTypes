import type {
  EventCommandLike,
  CHANGE_ACTOR_STATE,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ChangeActorState extends EventCommandLike<
  typeof CHANGE_ACTOR_STATE
> {
  parameters: ParamArray_ChangeActorState;
}

export type ParamArray_ChangeActorState =
  | ParamArray_AddActorStateTarget
  | ParamArray_RemoveActorStateTarget
  | ParamArray_AddActorStateEach
  | ParamArray_RemoveActorStateEach
  | ParamArray_AddActorStateVariable
  | ParamArray_RemoveActorStateVariable;

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

export type ParamArray_AddActorStateVariable = [
  modeVariable: 1,
  actorIdVariable: number,
  add: 0,
  stateId: number,
];

export type ParamArray_RemoveActorStateVariable = [
  modeVariable: 1,
  actorIdVariable: number,
  remove: 1,
  stateId: number,
];

export interface ParamObject_ChangeActorState {
  actorId: number;
  stateId: number;
}

export interface ParamObject_ChangeActorStateEach {
  stateId: number;
}

export interface ParamObject_ChangeActorStateVariable {
  actorIdVariable: number;
  stateId: number;
}
