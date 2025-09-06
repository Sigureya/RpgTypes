import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import { toArrayOperandConstant, toArrayOperandVariable } from "./convert";
import type {
  Command_ControlVariables,
  Operand_Constatant,
  Operand_Variable,
  ParamObject_Operand_Constant,
  ParamObject_Operand_Variable,
  ParamObject_WritingTarget,
} from "./types";
import type { MakeOtherParam } from "./types/other";

export const makeCommandVariableFromConstant = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Constant,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_Constatant> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandConstant(target, value, other.operation ?? 0),
  };
};

export const makeCommandVariableFromVariable = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Variable,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_Variable> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandVariable(target, value, other.operation ?? 0),
  };
};
