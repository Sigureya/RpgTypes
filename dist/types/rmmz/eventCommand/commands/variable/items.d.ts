import { MakeOtherParam } from './otherTypes';
import { ParamObject_WritingTarget, ParamObject_Operand_ItemData, Command_ControlVariables, Operand_ItemData } from './types';
export declare const makeCommandVariableFromItemData: (target: ParamObject_WritingTarget, value: ParamObject_Operand_ItemData, other?: MakeOtherParam) => Command_ControlVariables<Operand_ItemData>;
export declare const toArrayOperandItemData: (target: ParamObject_WritingTarget, value: ParamObject_Operand_ItemData, operation?: number) => Operand_ItemData;
