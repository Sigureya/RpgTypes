import { CHANGE_LEVEL } from "@RpgTypes/libs/eventCommand";
import type {
  ParamObject_ChangeLevel,
  Command_ChangeActorLevel,
  ParamArray_LevelUpDirect,
  ParamArray_LevelDownDirect,
  ParamObject_ChangeLevelByVariable,
  ParamArray_LevelUpByVariable,
  ParamArray_LevelDownByVariable,
} from "./types";

export const makeCommandActorLevelUp = (
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

export const makeCommandActorLevelDown = (
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

export const makeCommandActorLevelUpByVariable = (
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

export const makeCommandActorLevelDownByVariable = (
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
