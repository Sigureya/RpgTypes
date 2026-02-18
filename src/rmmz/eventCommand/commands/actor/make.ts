import type { Command_ChangeClaass, ParamObject_ChangeClass } from "./types";

export const makeCommandChangeClass = (
  param: ParamObject_ChangeClass,
  indent: number = 0,
): Command_ChangeClaass => ({
  code: 321,
  parameters: [param.actorId, param.classId, param.keepExp],
  indent,
});
