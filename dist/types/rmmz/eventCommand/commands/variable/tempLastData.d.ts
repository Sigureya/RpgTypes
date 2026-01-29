import { MakeOtherParam } from './otherTypes';
import { Command_ControlVariables, Operand_LastData, ParamObject_Operand_LastData, ParamObject_WritingTarget } from './types';
export declare const makeCommandVariableFromTempLastData: (target: ParamObject_WritingTarget, src: ParamObject_Operand_LastData, other?: MakeOtherParam) => Command_ControlVariables<Operand_LastData>;
