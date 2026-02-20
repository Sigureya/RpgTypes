import { CHANGE_SKILL } from "@RpgTypes/libs";
import type {
  Command_ChangeSkill,
  ParamObject_ChangeSkillDirect,
  ParamArray_LearnSkill,
  ParamArray_ForgetSkill,
  ParamArray_ForgetSkillEach,
  ParamArray_LearnSkillEach,
  ParamObject_ChangeSkillEach,
} from "./types";

export const makeCommandLearnSkill = (
  param: ParamObject_ChangeSkillDirect,
  indent: number = 0,
): Command_ChangeSkill => ({
  code: CHANGE_SKILL,
  indent,
  parameters: [
    0,
    param.actorId,
    0,
    param.skillId,
  ] satisfies ParamArray_LearnSkill,
});

export const makeCommandForgetSkill = (
  param: ParamObject_ChangeSkillDirect,
  indent: number = 0,
): Command_ChangeSkill => ({
  code: CHANGE_SKILL,
  indent,
  parameters: [
    0,
    param.actorId,
    1,
    param.skillId,
  ] satisfies ParamArray_ForgetSkill,
});

export const makeCommandLearnSkillEach = (
  param: ParamObject_ChangeSkillEach,
  indent: number = 0,
): Command_ChangeSkill => ({
  code: CHANGE_SKILL,
  indent,
  parameters: [0, 0, 0, param.skillId] satisfies ParamArray_LearnSkillEach,
});

export const makeCommandForgetSkillEach = (
  param: ParamObject_ChangeSkillEach,
  indent: number = 0,
): Command_ChangeSkill => ({
  code: CHANGE_SKILL,
  indent,
  parameters: [0, 0, 1, param.skillId] satisfies ParamArray_ForgetSkillEach,
});
