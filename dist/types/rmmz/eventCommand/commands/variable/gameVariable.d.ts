import { MakeOtherParam } from './otherTypes';
import { Command_ControlVariables, Operand_Variable, ParamObject_Operand_Variable, ParamObject_WritingTarget } from './types';
export declare const isCommandOperandVariables: (command: Command_ControlVariables) => command is Command_ControlVariables<Operand_Variable>;
export declare const toArrayOperandVariable: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Variable, operation?: number) => Operand_Variable;
export declare const makeCommandVariableFromVariable: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Variable, other?: MakeOtherParam) => Command_ControlVariables<Operand_Variable>;
