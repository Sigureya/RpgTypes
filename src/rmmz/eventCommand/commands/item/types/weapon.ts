import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_WEAPONS, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeWeapons2
  extends EventCommandLike2<typeof CHANGE_WEAPONS> {
  parameters: ParamArray_ChangeWeapons2;
}

export interface ParamObject_ChangeWeapons2 {
  operation: ValueOf<Operation_PlusMinus>;
  weaponId: number;
  value: number;
  includesEquip: boolean;
}

export type ParamArray_ChangeWeapons2 = [
  operation: ValueOf<Operation_PlusMinus>,
  weaponId: number,
  value: number
];
