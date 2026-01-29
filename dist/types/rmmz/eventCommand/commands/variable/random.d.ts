import { MakeOtherParam } from './otherTypes';
import { ParamObject_WritingTarget, ParamObject_Operand_Random, Operand_Random, Command_ControlVariables } from './types';
export declare const toArrayOperandRandom: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Random, operation?: number) => Operand_Random;
export declare const makeCommandVariableFromRandom: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Random, other?: MakeOtherParam) => Command_ControlVariables<Operand_Random>;
