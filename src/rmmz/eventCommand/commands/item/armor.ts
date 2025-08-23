import { CHANGE_ARMORS } from "@RpgTypes/rmmz/rpg";
import type {
  Command_ChangeArmors2,
  ParamArray_ChangeArmors2,
  ParamObject_ChangeArmors2,
  ParamObject_GainArmor,
  ParamObject_GainArmorV,
} from "./types/armor";
import {
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "./types/constants";

export const makeCommandChangeArmors = (
  param: ParamObject_ChangeArmors2,
  indent: number = 0
): Command_ChangeArmors2 => ({
  code: CHANGE_ARMORS,
  parameters: [
    param.operation,
    param.armorId,
    param.value,
    param.operand,
    param.includesEquip,
  ],
  indent,
});

export const fromArrayChangeArmors = (
  arr: ParamArray_ChangeArmors2
): ParamObject_ChangeArmors2 => ({
  operation: arr[0],
  armorId: arr[1],
  value: arr[2],
  operand: arr[3],
  includesEquip: arr[4],
});

export const makeCommandGainArmor = (
  param: ParamObject_GainArmor,
  indent: number = 0
): Command_ChangeArmors2 => ({
  code: CHANGE_ARMORS,
  parameters: [
    OPERATION_GAIN,
    param.armorId,
    param.value,
    OPERAND_DIRECT,
    false,
  ],
  indent,
});

export const makeCommandGainArmorV = (
  param: ParamObject_GainArmorV,
  indent: number = 0
): Command_ChangeArmors2 => ({
  code: CHANGE_ARMORS,
  parameters: [
    OPERATION_GAIN,
    param.armorId,
    param.variableId,
    OPERAND_VARIABLE,
    false,
  ],
  indent,
});

export const makeCommandLoseArmor = (
  param: ParamObject_GainArmor,
  indent: number = 0
): Command_ChangeArmors2 => ({
  code: CHANGE_ARMORS,
  parameters: [
    OPERATION_LOSE,
    param.armorId,
    param.value,
    OPERAND_DIRECT,
    false,
  ],
  indent,
});

export const makeCommandLoseArmorV = (
  param: ParamObject_GainArmorV,
  indent: number = 0
): Command_ChangeArmors2 => ({
  code: CHANGE_ARMORS,
  parameters: [
    OPERATION_LOSE,
    param.armorId,
    param.variableId,
    OPERAND_VARIABLE,
    false,
  ],
  indent,
});
