import { Command_ControlVariables, Operand_Constatant, Operand_Variable, ParamObject_Operand_Constant, ParamObject_Operand_Variable, ParamObject_WritingTarget } from './types';
import { MakeOtherParam } from './types/other';
export declare const makeCommandVariableFromConstant: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Constant, other?: MakeOtherParam) => Command_ControlVariables<Operand_Constatant>;
export declare const makeCommandVariableFromVariable: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Variable, other?: MakeOtherParam) => Command_ControlVariables<Operand_Variable>;
