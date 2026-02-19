import { CONTROL_VARIABLES } from "@RpgTypes/libs/eventCommand";
import { OPERAND_GAMEDATA, TYPE_WEAPON } from "./constants";
import type {
  ParamObject_WritingTarget,
  ParamObject_Operand_WeaponData,
  Command_ControlVariables,
  Operand_WeaponData,
} from "./types";

export const toArrayOperandWeaponData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_WeaponData,
  operation: number = 0,
): Operand_WeaponData => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  TYPE_WEAPON,
  value.weaponId,
];

export const makeCommandVariableFromWeapon = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_WeaponData,
): Command_ControlVariables<Operand_WeaponData> => {
  return {
    code: CONTROL_VARIABLES,
    indent: 0,
    parameters: toArrayOperandWeaponData(target, value, 0),
  };
};
