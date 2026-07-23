import type { BranchCodeTable } from "./branch";

export type BranchVariableComparison = 0 | 1 | 2 | 3 | 4 | 5;

export type BranchParam_Variable =
  | ParamArray_BranchVariableWithOperandVariable
  | BranchParam_VariableWithOperandConstant;

export interface ParamObject_BranchVariableWithOperandVariable {
  variableId: number;
  operandVariableId: number;
  comparison: BranchVariableComparison;
}

export type ParamObject_BranchVariableWithOperandConstant = {
  variableId: number;
  operandConstant: number;
  comparison: BranchVariableComparison;
};

export type ParamArray_BranchVariableWithOperandVariable = [
  branchCode: BranchCodeTable["VARIABLE"],
  variableId: number,
  operand: 1,
  operandVariableId: number,
  comparison: BranchVariableComparison,
];

export type BranchParam_VariableWithOperandConstant = [
  branchCode: BranchCodeTable["VARIABLE"],
  variableId: number,
  operand: 0,
  operandConstant: number,
  comparison: BranchVariableComparison,
];
