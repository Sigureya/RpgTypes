import { CHANGE_WEAPONS } from "@RpgTypes/rmmz/rpg";
import {
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "./types/constants";
import type {
  Command_ChangeWeapons2,
  ParamArray_ChangeWeapons2,
  ParamObject_ChangeWeapons2,
  ParamObject_GainWeapon,
  ParamObject_GainWeaponV,
} from "./types/weapon";

export const fromArrayChangeWeapons = (
  arr: ParamArray_ChangeWeapons2
): ParamObject_ChangeWeapons2 => ({
  operation: arr[0],
  weaponId: arr[1],
  value: arr[2],
  operand: arr[3],
  includesEquip: arr[4],
});

export const makeCommandChangeWeapons = (
  param: ParamObject_ChangeWeapons2,
  indent: number = 0
): Command_ChangeWeapons2 => ({
  code: CHANGE_WEAPONS,
  indent,
  parameters: [
    param.operation,
    param.weaponId,
    param.value,
    param.operand,
    param.includesEquip,
  ],
});

export const makeCommandGainWeapon = (
  param: ParamObject_GainWeapon,
  indent: number = 0
): Command_ChangeWeapons2 => ({
  code: CHANGE_WEAPONS,
  parameters: [
    OPERATION_GAIN,
    param.weaponId,
    param.value,
    OPERAND_DIRECT,
    false,
  ],
  indent,
});
export const makeCommandGainWeaponV = (
  param: ParamObject_GainWeaponV,
  indent: number = 0
): Command_ChangeWeapons2 => ({
  code: CHANGE_WEAPONS,
  parameters: [
    OPERATION_GAIN,
    param.weaponId,
    param.variableId,
    OPERAND_VARIABLE,
    false,
  ],
  indent,
});

export const makeCommandLoseWeapon = (
  param: ParamObject_GainWeapon,
  indent: number = 0
): Command_ChangeWeapons2 => ({
  code: CHANGE_WEAPONS,
  parameters: [
    OPERATION_LOSE,
    param.weaponId,
    param.value,
    OPERAND_DIRECT,
    false,
  ],
  indent,
});

export const makeCommandLoseWeaponV = (
  param: ParamObject_GainWeaponV,
  indent: number = 0
): Command_ChangeWeapons2 => ({
  code: CHANGE_WEAPONS,
  parameters: [
    OPERATION_LOSE,
    param.weaponId,
    param.variableId,
    OPERAND_VARIABLE,
    false,
  ],
  indent,
});
