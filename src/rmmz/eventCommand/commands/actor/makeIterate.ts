import type {
  Command_ChangeActorState,
  ParamObject_ChangeActorState,
} from "./changeState/types";

export const makeCommandChangeActorState = (
  param: ParamObject_ChangeActorState,
  indent: number = 0,
): Command_ChangeActorState => ({
  code: 313,
  parameters: [param.actorId, param.stateId],
  indent,
});
