import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import { OPERAND_CONSTANT } from "./constants/operand";
import type { MakeOtherParam } from "./otherTypes";
import type {
  Command_ControlVariables,
  Operand_Constatant,
  ParamObject_Operand_Constant,
  ParamObject_WritingTarget,
} from "./types";

export const toArrayOperandConstant = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Constant,
  operation: number = 0,
): Operand_Constatant => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_CONSTANT,
  value.value,
];

export const makeCommandVariableFromConstant = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Constant,
  other: MakeOtherParam = {},
): Command_ControlVariables<Operand_Constatant> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandConstant(target, value, other.operation ?? 0),
  };
};
