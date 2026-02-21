import { Command_ChangeActorLevel, ParamObject_ChangeLevel, ParamObject_ChangeLevelByVariable, ParamObject_ChangeLevelEach } from './types';
export declare const makeCommandLevelUpActor: (param: ParamObject_ChangeLevel, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandLevelDownActor: (param: ParamObject_ChangeLevel, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandLevelUpActorByVariable: (param: ParamObject_ChangeLevelByVariable, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandLevelDownActorByVariable: (param: ParamObject_ChangeLevelByVariable, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandLevelUpEachActors: (param: ParamObject_ChangeLevelEach, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandLevelDownEachActors: (param: ParamObject_ChangeLevelEach, indent?: number) => Command_ChangeActorLevel;
