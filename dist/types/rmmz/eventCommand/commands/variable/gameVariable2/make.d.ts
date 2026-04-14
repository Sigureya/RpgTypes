import { Command_ControlVariables_FromVariable, ParamObject_VariableFromVariable } from './types';
export declare const isCommandOperandVariables: (command: Command_ControlVariables_FromVariable) => command is Command_ControlVariables_FromVariable;
export declare const makeCommandVariableFromVariable: (params: ParamObject_VariableFromVariable, indent?: number) => Command_ControlVariables_FromVariable;
