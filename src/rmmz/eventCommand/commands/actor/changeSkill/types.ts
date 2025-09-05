import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ChangeSkill extends EventCommandLike<318> {
  parameters: ParamArray_ChangeSkill;
}

export type ParamArray_ChangeSkill = [
  actorId: number,
  unk: number,
  operation: 0 | 1,
  skillId: number
];
