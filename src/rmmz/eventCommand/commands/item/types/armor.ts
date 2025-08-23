import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_ARMORS, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeArmors2
  extends EventCommandLike2<typeof CHANGE_ARMORS> {
  parameters: ParamArray_ChangeArmors2;
}

export type ParamArray_ChangeArmors2 = [
  operation: ValueOf<Operation_PlusMinus>,
  armorId: number,
  value: number,
  includesEquip: boolean
];

export interface ParamObject_ChangeArmors2 {
  operation: ValueOf<Operation_PlusMinus>;
  armorId: number;
  value: number;
  includesEquip: boolean;
}
