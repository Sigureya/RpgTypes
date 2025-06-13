import { Command_ControlVariables, Operand_Constatant, Operand_Variable, Operand_Random, Operand_Script, Operand_ItemData, ParamObject_Operand_Constant, ParamObject_Operand_Variable, ParamObject_Operand_Random, ParamObject_WritingTarget, ParamObject_Operand_Script, ParamObject_Operand_ItemData, Operand_ActorStatus, Operand_EnemyStatus, ParamObject_Operand_ActorStatus, ParamObject_Operand_Enemy } from './types';
interface MakeOtherParam {
    indent?: number;
    operation?: number;
}
export declare const makeCommandVariableFromConstant: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Constant, other?: MakeOtherParam) => Command_ControlVariables<Operand_Constatant>;
export declare const makeCommandVariableFromVariable: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Variable, other?: MakeOtherParam) => Command_ControlVariables<Operand_Variable>;
export declare const makeCommandVariableFromRandom: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Random, other?: MakeOtherParam) => Command_ControlVariables<Operand_Random>;
export declare const makeCommandVariableFromScript: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Script, other?: MakeOtherParam) => Command_ControlVariables<Operand_Script>;
export declare const makeCommandVariableFromItemData: (target: ParamObject_WritingTarget, value: ParamObject_Operand_ItemData, other?: MakeOtherParam) => Command_ControlVariables<Operand_ItemData>;
export declare const makeCommandVariableFromStatusData: (target: ParamObject_WritingTarget, value: ParamObject_Operand_ActorStatus, other?: MakeOtherParam) => Command_ControlVariables<Operand_ActorStatus>;
export declare const makeCommandVariableFromEnemyData: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Enemy, other?: MakeOtherParam) => Command_ControlVariables<Operand_EnemyStatus>;
export {};
