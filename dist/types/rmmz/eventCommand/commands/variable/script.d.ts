import { MakeOtherParam } from './otherTypes';
import { ParamObject_WritingTarget, ParamObject_Operand_Script, Operand_Script, Command_ControlVariables } from './types';
export declare const toArrayOperandScript: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Script, operation?: number) => Operand_Script;
export declare const makeCommandVariableFromScript: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Script, other?: MakeOtherParam) => Command_ControlVariables<Operand_Script>;
