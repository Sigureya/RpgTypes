import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Designation, Operation_AddSub } from "@RpgTypes/rmmz/rpg";

export type ParamArray_ChangeEnemyValue = [
  enemyId: number,
  operation: number,
  operandType: ValueOf<Designation>,
  operand: ValueOf<Operation_AddSub>,
  value: number
];

export interface Command_ChangeEnemyHP extends EventCommandLike2<331> {
  parameters: ParamArray_ChangeEnemyValue;
}

export interface Command_ChangeEnemyMP extends EventCommandLike2<332> {
  parameters: ParamArray_ChangeEnemyValue;
}

export interface Command_ChangeEnemyTP extends EventCommandLike2<342> {
  parameters: ParamArray_ChangeEnemyValue;
}
