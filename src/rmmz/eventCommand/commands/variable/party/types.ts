import type {
  CONTROL_VARIABLES,
  EventCommandLike,
  VariableOperation,
} from "@RpgTypes/libs";

export interface Command_ControlVariables_FromParty extends EventCommandLike<
  typeof CONTROL_VARIABLES
> {
  code: typeof CONTROL_VARIABLES;
  indent: number;
  parameters: ParamArray_VariableFromParty;
}

export interface ParamObject_VariableFromParty {
  startId: number;
  endId?: number;
  operation?: VariableOperation;
}

export type ParamArray_VariableFromParty = [
  rangeStartId: number,
  rangeEndId: number,
  operation: VariableOperation,
  operandGameData: 3,
  typeSystem: 7,
  param: number,
];
