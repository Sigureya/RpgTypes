import {
  CHANGE_ARMORS,
  CHANGE_WEAPONS,
  CHANGE_ITEMS,
  Operation_PlusMinus,
} from "@RpgTypes/rmmz/rpg";
import type {
  Command_ChangeItems2,
  Command_ChangeWeapons2,
  Command_ChangeArmors2,
  ParamObject_ChangeItems2,
  ParamObject_ChangeWeapons2,
  ParamObject_ChangeArmors2,
  ParamArray_ChangeItems2,
  ParamArray_ChangeWeapons2,
  ParamArray_ChangeArmors2,
} from "./types";

export const makeCommandChangeItems = (
  param: ParamObject_ChangeItems2,
  indent: number = 0
): Command_ChangeItems2 => ({
  code: CHANGE_ITEMS,
  parameters: [param.operation, param.itemId, param.value],
  indent,
});

export const makeCommandChangeWeapons = (
  param: ParamObject_ChangeWeapons2,
  indent: number = 0
): Command_ChangeWeapons2 => ({
  code: CHANGE_WEAPONS,
  parameters: [param.operation, param.weaponId, param.value],
  indent,
});

export const makeCommandChangeArmors = (
  param: ParamObject_ChangeArmors2,
  indent: number = 0
): Command_ChangeArmors2 => ({
  code: CHANGE_ARMORS,
  parameters: [param.operation, param.armorId, param.value],
  indent,
});

export const fromArrayChangeItems = (
  arr: ParamArray_ChangeItems2
): ParamObject_ChangeItems2 => ({
  operation: arr[0],
  itemId: arr[1],
  value: arr[2],
});

export const fromArrayChangeWeapons = (
  arr: ParamArray_ChangeWeapons2
): ParamObject_ChangeWeapons2 => ({
  operation: arr[0],
  weaponId: arr[1],
  value: arr[2],
});

export const fromArrayChangeArmors = (
  arr: ParamArray_ChangeArmors2
): ParamObject_ChangeArmors2 => ({
  operation: arr[0],
  armorId: arr[1],
  value: arr[2],
});
