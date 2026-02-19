import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeActorState extends EventCommandLike<313> {
  parameters: ParamArray_ChangeActorState;
}

export type ParamArray_ChangeActorState = [actorId: number, stateId: number];

export interface ParamObject_ChangeActorState {
  actorId: number;
  stateId: number;
}
