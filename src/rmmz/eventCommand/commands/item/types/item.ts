import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_ITEMS, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeItems2
  extends EventCommandLike2<typeof CHANGE_ITEMS> {
  parameters: ParamArray_ChangeItems2;
}

export interface ParamObject_ChangeItems2 {
  operation: ValueOf<Operation_PlusMinus>;
  itemId: number;
  value: number;
  operandType: 0 | 1; // 0:直接値, 1:変数
}

export type ParamArray_ChangeItems2 = [
  dataId: number,
  operation: ValueOf<Operation_PlusMinus>,
  itemId: number,
  operandType: 0 | 1 // 0:直接値, 1:変数
];
