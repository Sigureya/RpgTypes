import { Command_ControlVariables, Operand_OtherData, ParamObject_WritingTarget } from './types';
export declare const makeCommandVariableFromPlaytime: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
export declare const makeCommandSystemTimer: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
export declare const makeCommandSystemSaveCount: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
export declare const makeCommandSystemBattleCount: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
export declare const makeCommandSystemWinCount: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
export declare const makeCommandSystemEscapeCount: (target: ParamObject_WritingTarget, operation?: number) => Command_ControlVariables<Operand_OtherData>;
