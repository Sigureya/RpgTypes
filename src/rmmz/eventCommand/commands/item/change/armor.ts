import { CHANGE_ARMORS } from "@RpgTypes/rmmz/rpg";
import type {
  ParamObject_ChangeArmors,
  ParamObject_ChangeArmorsV,
  Command_ChangeArmorsByVariable,
  Command_ChangeArmorsDirect,
} from "./types/armor";
import {
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "./types/constants";

export const makeCommandGainArmor = (
  param: ParamObject_ChangeArmors,
  indent: number = 0
): Command_ChangeArmorsDirect => ({
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
  param: ParamObject_ChangeArmorsV,
  indent: number = 0
): Command_ChangeArmorsByVariable => ({
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
  param: ParamObject_ChangeArmors,
  indent: number = 0
): Command_ChangeArmorsDirect => ({
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
  param: ParamObject_ChangeArmorsV,
  indent: number = 0
): Command_ChangeArmorsByVariable => ({
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
