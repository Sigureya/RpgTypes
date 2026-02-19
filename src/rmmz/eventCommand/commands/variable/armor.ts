import { CONTROL_VARIABLES } from "@RpgTypes/libs/eventCommand";
import { OPERAND_GAMEDATA, TYPE_ARMOR } from "./constants";
import type {
  ParamObject_WritingTarget,
  ParamObject_Operand_ArmorData,
  Command_ControlVariables,
  Operand_ArmorData,
} from "./types";

export const toArrayOperandArmorData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ArmorData,
  operation: number = 0,
): Operand_ArmorData => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  TYPE_ARMOR,
  value.armorId,
];

export const makeCommandVariableFromArmor = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ArmorData,
): Command_ControlVariables<Operand_ArmorData> => {
  return {
    code: CONTROL_VARIABLES,
    indent: 0,
    parameters: toArrayOperandArmorData(target, value, 0),
  };
};
