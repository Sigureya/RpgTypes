import type {
  EventCommandLike,
  CHANGE_CLASS,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ChangeClaass extends EventCommandLike<
  typeof CHANGE_CLASS
> {
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
