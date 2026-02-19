import type {
  Command_ChangeActorState,
  ParamArray_AddActorStateEach,
  ParamArray_AddActorStateTarget,
  ParamArray_AddActorStateVariable,
  ParamArray_RemoveActorStateEach,
  ParamArray_RemoveActorStateTarget,
  ParamArray_RemoveActorStateVariable,
  ParamObject_ChangeActorState,
  ParamObject_ChangeActorStateEach,
  ParamObject_ChangeActorStateVariable,
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

export const makeCommandAddActorStateVariable = (
  param: ParamObject_ChangeActorStateVariable,
  indent: number = 0,
): Command_ChangeActorState => ({
  code: 313,
  indent,
  parameters: [
    1,
    param.actorIdVariable,
    0,
    param.stateId,
  ] satisfies ParamArray_AddActorStateVariable,
});

export const makeCommandRemoveActorStateVariable = (
  param: ParamObject_ChangeActorStateVariable,
  indent: number = 0,
): Command_ChangeActorState => ({
  code: 313,
  indent,
  parameters: [
    1,
    param.actorIdVariable,
    1,
    param.stateId,
  ] satisfies ParamArray_RemoveActorStateVariable,
});
