import { Command_RecoverAll, Command_RecoverAllTargetVariable } from './types';
export declare const isCommandRecoverAllUsingVariable: (command: Command_RecoverAll) => command is Command_RecoverAllTargetVariable;
export declare const makeCommandRecoverAll: (indent?: number) => Command_RecoverAll;
export declare const makeCommandRecoverAllTarget: (param: {
    targetSelectVariableId: number;
}, indent?: number) => Command_RecoverAllTargetVariable;
