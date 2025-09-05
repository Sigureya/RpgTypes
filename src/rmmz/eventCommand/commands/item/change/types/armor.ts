import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_ARMORS, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";
import type { OPERAND_DIRECT, OPERAND_VARIABLE } from "./constants";

export interface Command_ChangeArmors
  extends EventCommandLike<typeof CHANGE_ARMORS> {
  parameters: ParamArray_ChangeArmors;
}

export type ParamArray_ChangeArmors = [
  operation: ValueOf<Operation_PlusMinus>,
  armorId: number,
  value: number,
  direct: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE,
  includesEquip: boolean
];

export interface ParamObject_ChangeArmors {
  operation: ValueOf<Operation_PlusMinus>;
  armorId: number;
  value: number;
  operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
  includesEquip: boolean;
}

export interface ParamObject_GainArmor {
  armorId: number;
  value: number;
}

export interface ParamObject_GainArmorV {
  armorId: number;
  variableId: number;
}
