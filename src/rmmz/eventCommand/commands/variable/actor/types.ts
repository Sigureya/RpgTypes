import type {
  CONTROL_VARIABLES,
  EventCommandLike,
  VariableOperation,
} from "@RpgTypes/libs";

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
  operation?: VariableOperation;
}

export type ParamArray_VariableFromActorStatus = [
  rangeStartId: number,
  rangeEndId: number,
  operation: VariableOperation,
  operandGameData: 3,
  typeActor: 3,
  actorId: number,
  param: number,
];
