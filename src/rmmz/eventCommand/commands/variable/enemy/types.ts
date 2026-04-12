import type { CONTROL_VARIABLES, EventCommandLike } from "@RpgTypes/libs";

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
  operation?: number;
}

export type ParamArray_VariableFromEnemyStatus = [
  rangeStartId: number,
  rangeEndId: number,
  operation: number,
  operandGameData: 3,
  typeEnemy: 4,
  enemyIndex: number,
  param: number,
];
