import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangePartyMember extends EventCommandLike2<129> {
  parameters: ParamArray_ChangePartyMember;
}

export type ParamArray_ChangePartyMember = [
  operation: ValueOf<Operation_PlusMinus>,
  actorId: number
];

export interface ParamObject_ChangePartyMember {
  actorId: number;
}
