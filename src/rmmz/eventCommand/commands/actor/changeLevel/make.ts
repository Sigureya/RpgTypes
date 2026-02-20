import { CHANGE_LEVEL } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ChangeActorLevel,
  ParamArray_LevelUpDirect,
  ParamObject_ChangeLevel,
} from "./types";
import {
  ParamArray_LevelDownByVariable,
  ParamArray_LevelDownDirect,
  ParamArray_LevelUpByVariable,
} from "./types";

export const makeCommandChangeActorLevel = (
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
