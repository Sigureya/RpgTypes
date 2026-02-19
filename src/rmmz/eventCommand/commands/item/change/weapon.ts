import { CHANGE_WEAPONS } from "@RpgTypes/libs/eventCommand";
import {
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "./types/constants";
import type {
  Command_ChangeWeapons,
  ParamArray_ChangeWeapons,
  ParamObject_ChangeWeaponsFullset,
  ParamObject_ChangeWeapons,
  ParamObject_ChangeWeaponsV,
  Command_ChangeWeaponsDirect,
  Command_ChangeWeaponsByVariable,
} from "./types/weapon";
import { isUsingVariableItemCommand } from "./utils";

export const isCommandChangeWeaponsUsingVariable = (
  command: Command_ChangeWeapons,
): command is Command_ChangeWeaponsByVariable => {
  return isUsingVariableItemCommand(command);
};

export const fromArrayChangeWeapons = (
  arr: ParamArray_ChangeWeapons,
): ParamObject_ChangeWeaponsFullset => ({
  operation: arr[1],
  weaponId: arr[0],
  value: arr[3],
  operand: arr[2],
  includesEquip: arr[4],
});

export const makeCommandChangeWeapons = (
  param: ParamObject_ChangeWeaponsFullset,
  indent: number = 0,
): Command_ChangeWeapons => ({
  code: CHANGE_WEAPONS,
  indent,
  parameters: [
    param.weaponId,
    param.operation,
    param.operand,
    param.value,
    param.includesEquip,
  ],
});

export const makeCommandGainWeapon = (
  param: ParamObject_ChangeWeapons,
  indent: number = 0,
): Command_ChangeWeaponsDirect => ({
  code: CHANGE_WEAPONS,
  indent,
  parameters: [
    param.weaponId,
    OPERATION_GAIN,
    OPERAND_DIRECT,
    param.value,
    false,
  ],
});

export const makeCommandGainWeaponV = (
  param: ParamObject_ChangeWeaponsV,
  indent: number = 0,
): Command_ChangeWeaponsByVariable => ({
  code: CHANGE_WEAPONS,
  indent,
  parameters: [
    param.weaponId,
    OPERATION_GAIN,
    OPERAND_VARIABLE,
    param.variableId,
    false,
  ],
});

export const makeCommandLoseWeapon = (
  param: ParamObject_ChangeWeapons,
  indent: number = 0,
): Command_ChangeWeaponsDirect => ({
  code: CHANGE_WEAPONS,
  indent,
  parameters: [
    param.weaponId,
    OPERATION_LOSE,
    OPERAND_DIRECT,
    param.value,
    false,
  ],
});

export const makeCommandLoseWeaponV = (
  param: ParamObject_ChangeWeaponsV,
  indent: number = 0,
): Command_ChangeWeaponsByVariable => ({
  code: CHANGE_WEAPONS,
  indent,
  parameters: [
    param.weaponId,
    OPERATION_LOSE,
    OPERAND_VARIABLE,
    param.variableId,
    false,
  ],
});
