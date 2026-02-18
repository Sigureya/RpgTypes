import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeClaass extends EventCommandLike<321> {
  parameters: ParamArray_ChangeClass;
}

export type ParamArray_ChangeClass = [
  actorId: number,
  classId: number,
  keepExp: boolean,
];

export interface ParamObject_ChangeClass {
  actorId: number;
  classId: number;
  keepExp: boolean;
}
