import type {
  CONTROL_VARIABLES,
  EventCommandLike,
  VariableOperation,
} from "@RpgTypes/libs";

export interface Command_ControlVariables_FromLastData extends EventCommandLike<
  typeof CONTROL_VARIABLES
> {
  code: typeof CONTROL_VARIABLES;
  indent: number;
  parameters: ParamArray_VariableFromLastData;
}

export interface ParamObject_VariableFromLastData {
  startId: number;
  endId?: number;
  operation?: VariableOperation;
}

export type ParamArray_VariableFromLastData = [
  rangeStartId: number,
  rangeEndId: number,
  operation: VariableOperation,
  operandGameData: 3,
  typeLastData: 8,
  index: number,
];
