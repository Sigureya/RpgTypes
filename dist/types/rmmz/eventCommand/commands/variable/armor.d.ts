import { ParamObject_WritingTarget, ParamObject_Operand_ArmorData, Command_ControlVariables, Operand_ArmorData } from './types';
export declare const toArrayOperandArmorData: (target: ParamObject_WritingTarget, value: ParamObject_Operand_ArmorData, operation?: number) => Operand_ArmorData;
export declare const makeCommandVariableFromArmor: (target: ParamObject_WritingTarget, value: ParamObject_Operand_ArmorData) => Command_ControlVariables<Operand_ArmorData>;
