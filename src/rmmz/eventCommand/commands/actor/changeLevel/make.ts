import { CHANGE_LEVEL } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ChangeActorLevel,
  ParamArray_LevelDownByVariable,
  ParamArray_LevelDownDirect,
  ParamArray_LevelDownEach,
  ParamArray_LevelUpByVariable,
  ParamArray_LevelUpDirect,
  ParamArray_LevelUpEach,
  ParamObject_ChangeLevel,
  ParamObject_ChangeLevelByVariable,
  ParamObject_ChangeLevelEach,
} from "./types";

export const makeCommandLevelUpActor = (
  param: ParamObject_ChangeLevel,
  indent: number = 0,
): Command_ChangeActorLevel => ({
  code: CHANGE_LEVEL,
  indent,
  parameters: [
    0,
    param.actorId,
    0,
    0,
    param.level,
    param.showMessaage,
  ] satisfies ParamArray_LevelUpDirect,
});

export const makeCommandLevelDownActor = (
  param: ParamObject_ChangeLevel,
  indent: number = 0,
): Command_ChangeActorLevel => ({
  code: CHANGE_LEVEL,
  indent,
  parameters: [
    0,
    param.actorId,
    1,
    0,
    param.level,
    param.showMessaage,
  ] satisfies ParamArray_LevelDownDirect,
});

export const makeCommandLevelUpActorByVariable = (
  param: ParamObject_ChangeLevelByVariable,
  indent: number = 0,
): Command_ChangeActorLevel => ({
  code: CHANGE_LEVEL,
  indent,
  parameters: [
    0,
    param.actorId,
    0,
    1,
    param.variableId,
    param.showMessaage,
  ] satisfies ParamArray_LevelUpByVariable,
});

export const makeCommandLevelDownActorByVariable = (
  param: ParamObject_ChangeLevelByVariable,
  indent: number = 0,
): Command_ChangeActorLevel => ({
  code: CHANGE_LEVEL,
  indent,
  parameters: [
    0,
    param.actorId,
    1,
    1,
    param.variableId,
    param.showMessaage,
  ] satisfies ParamArray_LevelDownByVariable,
});

export const makeCommandLevelUpEachActors = (
  param: ParamObject_ChangeLevelEach,
  indent: number = 0,
): Command_ChangeActorLevel => ({
  code: CHANGE_LEVEL,
  indent,
  parameters: [
    0,
    0,
    0,
    0,
    param.level,
    param.showMessaage,
  ] satisfies ParamArray_LevelUpEach,
});

export const makeCommandLevelDownEachActors = (
  param: ParamObject_ChangeLevelEach,
  indent: number = 0,
): Command_ChangeActorLevel => ({
  code: CHANGE_LEVEL,
  indent,
  parameters: [
    0,
    0,
    1,
    0,
    param.level,
    param.showMessaage,
  ] satisfies ParamArray_LevelDownEach,
});
