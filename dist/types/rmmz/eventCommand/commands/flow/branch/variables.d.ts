import { Command_BranchByVariable } from './types/command';
import { ParamObject_BranchVariableWithOperandConstant, ParamObject_BranchVariableWithOperandVariable } from './types/variable';
export declare const makeCommandBranchByVariable: ({ comparison, operandConstant, variableId, }: ParamObject_BranchVariableWithOperandConstant, indent?: number) => Command_BranchByVariable;
export declare const makeCommandBranchByVariable2: ({ comparison, operandVariableId, variableId, }: ParamObject_BranchVariableWithOperandVariable, indent?: number) => Command_BranchByVariable;
