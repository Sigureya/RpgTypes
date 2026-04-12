import type { CONTROL_VARIABLES, EventCommandLike } from "@RpgTypes/libs";

export interface Command_ControlVariables_FromActor extends EventCommandLike<
  typeof CONTROL_VARIABLES
> {
  code: typeof CONTROL_VARIABLES;
  indent: number;
  parameters: ParamArray_VariableFromActorStatus;
}

export interface ParamObject_VariableFromActor {
  startId: number;
  endId?: number;
  actorId: number;
  operation?: number;
}

export type ParamArray_VariableFromActorStatus = [
  rangeStartId: number,
  rangeEndId: number,
  operation: number,
  operandGameData: 3,
  typeActor: 3,
  actorId: number,
  param: number,
];
