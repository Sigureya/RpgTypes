import { Command_ChangeSkill, ParamObject_ChangeSkillDirect, ParamObject_ChangeSkillEach, ParamObject_ChangeSkillVariable } from './types';
export declare const makeCommandLearnSkill: (param: ParamObject_ChangeSkillDirect, indent?: number) => Command_ChangeSkill;
export declare const makeCommandForgetSkill: (param: ParamObject_ChangeSkillDirect, indent?: number) => Command_ChangeSkill;
export declare const makeCommandLearnSkillEachActor: (param: ParamObject_ChangeSkillEach, indent?: number) => Command_ChangeSkill;
export declare const makeCommandForgetSkillEachActor: (param: ParamObject_ChangeSkillEach, indent?: number) => Command_ChangeSkill;
export declare const makeCommandLearnSkillByVariable: (param: ParamObject_ChangeSkillVariable, indent?: number) => Command_ChangeSkill;
export declare const makeCommandForgetSkillByVariable: (param: ParamObject_ChangeSkillVariable, indent?: number) => Command_ChangeSkill;
