import type { Operation_AddSub } from "@RpgTypes/rmmz/utils";
import type { Operand } from "./operand";

export interface ParamObject_ChangeEnemyValueBase {
  targetIndex?: number;
  operand: Operand;
}

export type ParamObject_ChangeEnemyValue = ParamObject_ChangeEnemyValueBase;

export type ParamArray_ChangeEnemyValueBase = [
  index: number,
  operation: Operation_AddSub["ADD"] | Operation_AddSub["SUB"],
  valueType: number,
  value: number,
];

export type ParamArray_ChangeEnemyValue = ParamArray_ChangeEnemyValueBase;

export interface ParamObject_ChangeEnemyValueVV {
  enemyIndexVariableId: number;
  operandVariableId: number;
}

export interface ParamObject_ChangeEnemyValueDirect {
  enemyIndex: number;
  operandValue: number;
}
