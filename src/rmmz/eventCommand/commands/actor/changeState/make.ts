import type {
  Command_ChangeActorState,
  ParamArray_AddActorStateEach,
  ParamArray_AddActorStateTarget,
  ParamArray_RemoveActorStateEach,
  ParamArray_RemoveActorStateTarget,
  ParamObject_ChangeActorState,
  ParamObject_ChangeActorStateEach,
} from "./types";

export const makeCommandAddActorStateTarget = (
  param: ParamObject_ChangeActorState,
  indent: number = 0,
): Command_ChangeActorState => ({
  code: 313,
  indent,
  parameters: [
    0,
    param.actorId,
    0,
    param.stateId,
  ] satisfies ParamArray_AddActorStateTarget,
});

export const makeCommandRemoveActorStateTarget = (
  param: ParamObject_ChangeActorState,
  indent: number = 0,
): Command_ChangeActorState => ({
  code: 313,
  indent,
  parameters: [
    0,
    param.actorId,
    1,
    param.stateId,
  ] satisfies ParamArray_RemoveActorStateTarget,
});

export const makeCommandAddActorStateEach = (
  param: ParamObject_ChangeActorStateEach,
  indent: number = 0,
): Command_ChangeActorState => ({
  code: 313,
  indent,
  parameters: [0, 0, 0, param.stateId] satisfies ParamArray_AddActorStateEach,
});

export const makeCommandRemoveActorStateEach = (
  param: ParamObject_ChangeActorStateEach,
  indent: number = 0,
): Command_ChangeActorState => ({
  code: 313,
  indent,
  parameters: [
    0,
    0,
    1,
    param.stateId,
  ] satisfies ParamArray_RemoveActorStateEach,
});
