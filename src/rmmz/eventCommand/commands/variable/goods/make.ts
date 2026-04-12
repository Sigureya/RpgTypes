import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type {
  Command_ControlVariables_FromArmor,
  Command_ControlVariables_FromItem,
  Command_ControlVariables_FromWeapon,
  ParamArray_VariableFromArmor,
  ParamArray_VariableFromItem,
  ParamArray_VariableFromWeapon,
  ParamObject_VariableFromArmor,
  ParamObject_VariableFromItem,
  ParamObject_VariableFromWeapon,
} from "./types";

export const makeCommandVariableFromItemData = (
  params: ParamObject_VariableFromItem,
  indent: number = 0,
): Command_ControlVariables_FromItem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: itemParamToArray(params),
  };
};

export const makeCommandVariableFromWeapon = (
  params: ParamObject_VariableFromWeapon,
  indent: number = 0,
): Command_ControlVariables_FromWeapon => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: weaponParamToArray(params),
  };
};

export const makeCommandVariableFromArmor = (
  params: ParamObject_VariableFromArmor,
  indent: number = 0,
): Command_ControlVariables_FromArmor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: armorParamToArray(params),
  };
};

const itemParamToArray = (
  params: ParamObject_VariableFromItem,
): ParamArray_VariableFromItem => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  0,
  params.itemId,
];

const weaponParamToArray = (
  params: ParamObject_VariableFromWeapon,
): ParamArray_VariableFromWeapon => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  1,
  params.weaponId,
];

const armorParamToArray = (
  params: ParamObject_VariableFromArmor,
): ParamArray_VariableFromArmor => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  2,
  params.armorId,
];
