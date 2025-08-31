import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeActorState extends EventCommandLike2<313> {
  parameters: ParamArray_ChangeActorState;
}

export type ParamArray_ChangeActorState = [actorId: number, stateId: number];
