import type {
  Command_RecoverAll,
  ParamArray_EachActorRecoverAll,
  ParamArray_RecoverAllTargetVariable,
  ParamArray_TargetActorRecoverAll,
} from "./types";

export const makeCommandEachActorRecoverAll = (
  indent: number = 0,
): Command_RecoverAll => ({
  code: 314,
  indent,
  parameters: [0, 0] satisfies ParamArray_EachActorRecoverAll,
});

export const makeCommandTargetActorRecoverAll = (
  param: { targetActorId: number },
  indent: number = 0,
): Command_RecoverAll => ({
  code: 314,
  indent,
  parameters: [
    0,
    param.targetActorId,
  ] satisfies ParamArray_TargetActorRecoverAll,
});

export const makeCommandTargetActorRecoverAllSelectV = (
  param: {
    targetSelectVariableId: number;
  },
  indent: number = 0,
): Command_RecoverAll => ({
  code: 314,
  indent,
  parameters: [
    1,
    param.targetSelectVariableId,
  ] satisfies ParamArray_RecoverAllTargetVariable,
});
