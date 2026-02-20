import { Command_ChangeActorLevel, ParamObject_ChangeLevel, ParamObject_ChangeLevelByVariable, ParamObject_ChangeLevelEach } from './types';
export declare const makeCommandActorLevelUp: (param: ParamObject_ChangeLevel, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandActorLevelDown: (param: ParamObject_ChangeLevel, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandActorLevelUpByVariable: (param: ParamObject_ChangeLevelByVariable, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandActorLevelDownByVariable: (param: ParamObject_ChangeLevelByVariable, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandActorLevelUpEach: (param: ParamObject_ChangeLevelEach, indent?: number) => Command_ChangeActorLevel;
export declare const makeCommandActorLevelDownEach: (param: ParamObject_ChangeLevelEach, indent?: number) => Command_ChangeActorLevel;
