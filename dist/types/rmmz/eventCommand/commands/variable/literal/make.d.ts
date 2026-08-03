import { Command_ControlVariables_FromConstant, ParamArray_VariableFromConstant, ParamObject_VariableFromConstant } from './types';
export declare const variableFromLiteral: (params: ParamArray_VariableFromConstant) => number;
export declare const makeCommandVariableFromConstant: (params: ParamObject_VariableFromConstant, indent?: number) => Command_ControlVariables_FromConstant;
