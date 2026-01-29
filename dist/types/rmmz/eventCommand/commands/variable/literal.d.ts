import { MakeOtherParam } from './otherTypes';
import { Command_ControlVariables, Operand_Constatant, ParamObject_Operand_Constant, ParamObject_WritingTarget } from './types';
export declare const toArrayOperandConstant: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Constant, operation?: number) => Operand_Constatant;
export declare const makeCommandVariableFromConstant: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Constant, other?: MakeOtherParam) => Command_ControlVariables<Operand_Constatant>;
