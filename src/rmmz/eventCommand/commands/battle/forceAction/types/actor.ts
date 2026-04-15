import type { EventCommandLike, FORCE_ACTION } from "@RpgTypes/libs";

export interface Command_ActorForceAction extends EventCommandLike<
  typeof FORCE_ACTION
> {}

export interface ParamObject_ForceAction {
  actorId: number;
}
