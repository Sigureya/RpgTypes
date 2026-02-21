import { Command_RecoverAll } from './types';
export declare const makeCommandRecoverAllEachActors: (indent?: number) => Command_RecoverAll;
export declare const makeCommandRecoverAllTargetActor: (param: {
    targetActorId: number;
}, indent?: number) => Command_RecoverAll;
export declare const makeCommandRecoverAllTargetActorByVariable: (param: {
    variableId: number;
}, indent?: number) => Command_RecoverAll;
