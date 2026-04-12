import type {
  CONTROL_VARIABLES,
  EventCommandLike,
  VariableOperation,
} from "@RpgTypes/libs";

export interface Command_ControlVariables_FromConstant extends EventCommandLike<
  typeof CONTROL_VARIABLES
> {
  code: typeof CONTROL_VARIABLES;
  indent: number;
}

export interface ParamObject_VariableFromConstant {
  startId: number;
  endId?: number;
  operation?: VariableOperation;
  value: number;
}

export type ParamArray_VariableFromConstant = [
  rangeStartId: number,
  rangeEndId: number,
  operation: VariableOperation,
  operandConst: 0,
  value: number,
];
