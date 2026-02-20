import type {
  EventCommandLike,
  CHANGE_SKILL,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ChangeSkill extends EventCommandLike<
  typeof CHANGE_SKILL
> {
  parameters: ParamArray_ChangeSkill;
}

export type ParamArray_ChangeSkill =
  | ParamArray_LearnSkill
  | ParamArray_ForgetSkill
  | ParamArray_LearnSkillEach
  | ParamArray_ForgetSkillEach
  | ParamArray_LearnSkillVariable
  | ParamArray_ForgetSkillVariable;

export type ParamArray_LearnSkill = [
  modeDirect: 0,
  actorId: number,
  operationLearn: 0,
  skillId: number,
];

export type ParamArray_ForgetSkill = [
  modeDirect: 0,
  actorId: number,
  operationLearn: 1,
  skillId: number,
];

export type ParamArray_LearnSkillEach = [
  modeDirect: 0,
  each: 0,
  operationLearn: 0,
  skillId: number,
];

export type ParamArray_ForgetSkillEach = [
  modeDirect: 0,
  each: 0,
  operationLearn: 1,
  skillId: number,
];

export type ParamArray_LearnSkillVariable = [
  modeVariable: 1,
  actorIdVariable: number,
  operationLearn: 0,
  skillId: number,
];

export type ParamArray_ForgetSkillVariable = [
  modeVariable: 1,
  actorIdVariable: number,
  operationLearn: 1,
  skillId: number,
];

export interface ParamObject_ChangeSkillDirect {
  actorId: number;
  skillId: number;
}

export interface ParamObject_ChangeSkillEach {
  skillId: number;
}
