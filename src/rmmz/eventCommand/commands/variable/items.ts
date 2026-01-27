import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import { OPERAND_GAMEDATA, TYPE_ITEM } from "./constants";
import type {
  ParamObject_WritingTarget,
  ParamObject_Operand_ItemData,
  Command_ControlVariables,
  Operand_ItemData,
} from "./types";
import type { MakeOtherParam } from "./otherTypes";

export const makeCommandVariableFromItemData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ItemData,
  other: MakeOtherParam = {},
): Command_ControlVariables<Operand_ItemData> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandItemData(target, value, other.operation ?? 0),
  };
};

export const toArrayOperandItemData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_ItemData,
  operation: number = 0,
): Operand_ItemData => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  TYPE_ITEM,
  value.itemId,
];
