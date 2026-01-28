import { CHANGE_ARMORS } from "@RpgTypes/rmmz/rpg";
import type {
  ParamObject_ChangeArmors,
  ParamObject_ChangeArmorsV,
  Command_ChangeArmorsByVariable,
  Command_ChangeArmorsDirect,
  Command_ChangeArmors,
} from "./types/armor";
import {
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "./types/constants";

export const isUsingVaribleCommandChangingItems = (
  command: Command_ChangeArmors,
): command is Command_ChangeArmorsByVariable => {
  return command.parameters[3] === OPERAND_VARIABLE;
};

export const makeCommandGainArmor = (
  param: ParamObject_ChangeArmors,
  indent: number = 0,
): Command_ChangeArmorsDirect => ({
  code: CHANGE_ARMORS,
  indent,
  parameters: [
    param.armorId,
    OPERATION_GAIN,
    OPERAND_DIRECT,
    param.value,
    false,
  ],
});

export const makeCommandGainArmorByVariable = (
  param: ParamObject_ChangeArmorsV,
  indent: number = 0,
): Command_ChangeArmorsByVariable => ({
  code: CHANGE_ARMORS,
  indent,
  parameters: [
    param.armorId,
    OPERATION_GAIN,
    OPERAND_VARIABLE,
    param.variableId,
    false,
  ],
});

export const makeCommandLoseArmor = (
  param: ParamObject_ChangeArmors,
  indent: number = 0,
): Command_ChangeArmorsDirect => ({
  code: CHANGE_ARMORS,
  indent,
  parameters: [
    param.armorId,
    OPERATION_LOSE,
    OPERAND_DIRECT,
    param.value,
    false,
  ],
});

export const makeCommandLoseArmorByVariable = (
  param: ParamObject_ChangeArmorsV,
  indent: number = 0,
): Command_ChangeArmorsByVariable => ({
  code: CHANGE_ARMORS,
  indent,
  parameters: [
    param.armorId,
    OPERATION_LOSE,
    OPERAND_VARIABLE,
    param.variableId,
    false,
  ],
});
