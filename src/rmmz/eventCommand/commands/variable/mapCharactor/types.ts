import type {
  CONTROL_VARIABLES,
  EventCommandLike,
  VariableOperation,
} from "@RpgTypes/libs";
import type { ValueOf } from "src/libs/templates/valueOf";

export const MAP_CHARACTOR_PARAM = {
  X: 0,
  Y: 1,
  DIRECTION: 2,
  SCREEN_X: 3,
  SCREEN_Y: 4,
} as const;

export interface Command_ControlVariables_FromMapCharactor extends EventCommandLike<
  typeof CONTROL_VARIABLES
> {
  code: typeof CONTROL_VARIABLES;
  indent: number;
  parameters: ParamArray_VariableFromMapCharactor;
}

export interface ParamObject_VariableFromMapCharactor {
  startId: number;
  endId?: number;
  charactorId: number;
  operation?: VariableOperation;
}

export type ParamArray_VariableFromMapCharactor = [
  rangeStartId: number,
  rangeEndId: number,
  operation: VariableOperation,
  operandGameData: 3,
  typeMapCharactor: 5,
  charactorId: number,
  param: ValueOf<typeof MAP_CHARACTOR_PARAM>,
];
