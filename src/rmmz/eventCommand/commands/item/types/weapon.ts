import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_WEAPONS, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";
import type { OPERAND_DIRECT, OPERAND_VARIABLE } from "./constants";

export interface Command_ChangeWeapons2
  extends EventCommandLike2<typeof CHANGE_WEAPONS> {
  parameters: ParamArray_ChangeWeapons2;
}

export interface ParamObject_ChangeWeaponsFullset {
  operation: ValueOf<Operation_PlusMinus>;
  weaponId: number;
  value: number;
  operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;

  includesEquip: boolean;
}

export type ParamArray_ChangeWeapons2 = [
  operation: ValueOf<Operation_PlusMinus>,
  weaponId: number,
  value: number,
  direct: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE,
  includesEquip: boolean
];

export interface ParamObject_ChangeWeapons {
  weaponId: number;
  value: number;
}

export interface ParamObject_ChangeWeaponsV {
  weaponId: number;
  variableId: number;
}
