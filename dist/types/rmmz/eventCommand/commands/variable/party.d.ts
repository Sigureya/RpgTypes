import { ParamObject_WritingTarget, Command_ControlVariables, Operand_OtherData } from './types';
export declare const makeCommandVariableFromMapId: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
export declare const makeCommandVariableFromPartyMembers: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
export declare const makeCommandVariableFromPartySteps: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
export declare const makeCommandVariableFromPartyGold: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
