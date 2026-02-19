import { Command_RecoverAll } from './types';
export declare const makeCommandEachActorRecoverAll: (indent?: number) => Command_RecoverAll;
export declare const makeCommandTargetActorRecoverAll: (param: {
    targetActorId: number;
}, indent?: number) => Command_RecoverAll;
export declare const makeCommandTargetActorRecoverAllSelectV: (param: {
    targetSelectVariableId: number;
}, indent?: number) => Command_RecoverAll;
