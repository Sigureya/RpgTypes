import type {
  CONTROL_VARIABLES,
  EventCommandLike,
  VariableOperation,
} from "@RpgTypes/libs";

export interface Command_ControlVariables_FromPartyAt extends EventCommandLike<
  typeof CONTROL_VARIABLES
> {
  code: typeof CONTROL_VARIABLES;
  indent: number;
  parameters: ParamArray_VariableFromPartyAt;
}

export interface ParamObject_VariableFromPartyAt {
  startId: number;
  endId?: number;
  memberIndex: number;
}

export type ParamArray_VariableFromPartyAt = [
  rangeStartId: number,
  rangeEndId: number,
  operation: VariableOperation,
  operandGameData: 3,
  typeParty: 6,
  memberIndex: number,
];
