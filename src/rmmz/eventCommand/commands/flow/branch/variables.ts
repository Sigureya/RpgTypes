import type { Command_BranchByVariable } from "./types/command";
import type {
  BranchParam_VariableWithOperandConstant,
  BranchParam_VariableWithOperandVariable,
  ParamObject_BranchVariableWithOperandConstant,
  ParamObject_BranchVariableWithOperandVariable,
} from "./types/variable";

export const makeCommandBranchByVariable = (
  {
    comparison,
    operandConstant,
    variableId,
  }: ParamObject_BranchVariableWithOperandConstant,
  indent: number = 0,
): Command_BranchByVariable => {
  return {
    code: 111,
    indent,
    parameters: [
      1,
      variableId,
      0,
      operandConstant,
      comparison,
    ] satisfies BranchParam_VariableWithOperandConstant,
  };
};

export const makeCommandBranchByVariable2 = (
  {
    comparison,
    operandVariableId,
    variableId,
  }: ParamObject_BranchVariableWithOperandVariable,
  indent: number = 0,
): Command_BranchByVariable => {
  return {
    code: 111,
    indent,
    parameters: [
      1,
      variableId,
      1,
      operandVariableId,
      comparison,
    ] satisfies BranchParam_VariableWithOperandVariable,
  };
};
