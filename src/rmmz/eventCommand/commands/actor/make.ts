import type {
  Command_ChangeClaass,
  ParamObject_ChangeClass,
  Command_ChangeEquip,
  ParamObject_ChangeEquip,
} from "./types";

export const makeCommandChangeClass = (
  param: ParamObject_ChangeClass,
  indent: number = 0,
): Command_ChangeClaass => ({
  code: 321,
  parameters: [param.actorId, param.classId, param.keepExp],
  indent,
});

export const makeCommandChangeEquip = (
  param: ParamObject_ChangeEquip,
  indent: number = 0,
): Command_ChangeEquip => ({
  code: 319,
  parameters: [param.actorId, param.equipType, param.equipId],
  indent,
});
