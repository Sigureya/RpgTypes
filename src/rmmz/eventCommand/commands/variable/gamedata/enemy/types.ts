import type {
  CONTROL_VARIABLES,
  EventCommandLike,
  VariableOperation,
} from "@RpgTypes/libs";

export interface Command_ControlVariables_FromEnemy extends EventCommandLike<
  typeof CONTROL_VARIABLES
> {
  code: typeof CONTROL_VARIABLES;
  indent: number;
  parameters: ParamArray_VariableFromEnemyStatus;
}

export interface ParamObject_VariableFromEnemy {
  startId: number;
  endId?: number;
  enemyIndex: number;
  operation?: VariableOperation;
}

export type ParamArray_VariableFromEnemyStatus = [
  rangeStartId: number,
  rangeEndId: number,
  operation: VariableOperation,
  operandGameData: 3,
  typeEnemy: 4,
  enemyIndex: number,
  param: number,
];
