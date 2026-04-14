import type {
  EventCommandLike,
  CHANGE_ENEMY_MP,
} from "@RpgTypes/libs/eventCommand";
import type { Operation_AddSub } from "@RpgTypes/rmmz/utils";
import type { Operand } from "./operand";

export interface Command_ChangeEnemyMP extends EventCommandLike<
  typeof CHANGE_ENEMY_MP
> {
  parameters: ParamArray_ChangeEnemyMP;
}

export interface ParamObject_ChangeEnemyMp {
  targetIndex?: number;
  operand: Operand;
}

export interface ParamObject_ChangeEnemyMp2 {
  operandVariableId: number;
  targetVariableId: number;
}

export type ParamArray_ChangeEnemyMP = [
  index: number,
  operation: Operation_AddSub["ADD"] | Operation_AddSub["SUB"],
  valueType: number,
  value: number,
];
