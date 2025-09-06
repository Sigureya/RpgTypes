import { Operand_Constatant, Operand_Variable, ParamObject_Operand_Constant, ParamObject_Operand_Variable, ParamObject_WritingTarget } from './types';
export declare const toArrayOperandConstant: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Constant, operation?: number) => Operand_Constatant;
export declare const toArrayOperandVariable: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Variable, operation?: number) => Operand_Variable;
