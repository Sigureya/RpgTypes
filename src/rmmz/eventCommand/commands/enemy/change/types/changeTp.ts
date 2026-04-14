import type {
  EventCommandLike,
  CHANGE_ENEMY_TP,
} from "@RpgTypes/libs/eventCommand";
import type { Operation_AddSub } from "@RpgTypes/rmmz/utils";
import type { Operand } from "./operand";

export interface Command_ChangeEnemyTP extends EventCommandLike<
  typeof CHANGE_ENEMY_TP
> {
  parameters: ParamArray_ChangeEnemyTP;
}

export interface ParamObject_ChangeEnemyTp {
  targetIndex?: number;
  operand: Operand;
}

export type ParamArray_ChangeEnemyTP = [
  index: number,
  operation: Operation_AddSub["ADD"] | Operation_AddSub["SUB"],
  valueType: number,
  value: number,
];
