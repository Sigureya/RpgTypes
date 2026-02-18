import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeEquip extends EventCommandLike<319> {
  parameters: ParamArray_ChangeEquip;
}

export type ParamArray_ChangeEquip = [
  actorId: number,
  equipType: number,
  equipId: number,
];

export interface ParamObject_ChangeEquip {
  actorId: number;
  equipType: number;
  equipId: number;
}
