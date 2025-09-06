import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_WEAPONS, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";
import type { OPERAND_DIRECT, OPERAND_VARIABLE } from "./constants";

export type Command_ChangeWeapons = EventCommandLike<
  typeof CHANGE_WEAPONS,
  ParamArray_ChangeWeaponsVariable | ParamArray_ChangeWeaponsDirect
>;

export interface Command_ChangeWeaponsByVariable
  extends EventCommandLike<typeof CHANGE_WEAPONS> {
  parameters: ParamArray_ChangeWeaponsVariable;
}

export interface Command_ChangeWeaponsDirect
  extends EventCommandLike<typeof CHANGE_WEAPONS> {
  parameters: ParamArray_ChangeWeaponsDirect;
}

export interface ParamObject_ChangeWeaponsFullset {
  operation: ValueOf<Operation_PlusMinus>;
  weaponId: number;
  value: number;
  operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
  includesEquip: boolean;
}

export type ParamArray_ChangeWeapons =
  | ParamArray_ChangeWeaponsDirect
  | ParamArray_ChangeWeaponsVariable;

export type ParamArray_ChangeWeaponsDirect = [
  operation: ValueOf<Operation_PlusMinus>,
  weaponId: number,
  value: number,
  direct: typeof OPERAND_DIRECT,
  includesEquip: boolean
];

export type ParamArray_ChangeWeaponsVariable = [
  operation: ValueOf<Operation_PlusMinus>,
  weaponId: number,
  value: number,
  byVariable: typeof OPERAND_VARIABLE,
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
