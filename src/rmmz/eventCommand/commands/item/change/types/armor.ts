import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_ARMORS, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";
import type { OPERAND_DIRECT, OPERAND_VARIABLE } from "./constants";

export interface Command_ChangeArmors2
  extends EventCommandLike2<typeof CHANGE_ARMORS> {
  parameters: ParamArray_ChangeArmors2;
}

export type ParamArray_ChangeArmors2 = [
  operation: ValueOf<Operation_PlusMinus>,
  armorId: number,
  value: number,
  direct: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE,
  includesEquip: boolean
];

export interface ParamObject_ChangeArmors2 {
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
