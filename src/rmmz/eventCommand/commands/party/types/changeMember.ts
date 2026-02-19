import type {
  EventCommandLike,
  CHANGE_PARTY_MEMBER,
} from "@RpgTypes/libs/eventCommand";
import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Operation_PlusMinus } from "@RpgTypes/rmmz/utils";

export interface Command_ChangePartyMember extends EventCommandLike<
  typeof CHANGE_PARTY_MEMBER
> {
  parameters: ParamArray_ChangePartyMember;
}

export type ParamArray_ChangePartyMember = [
  operation: ValueOf<Operation_PlusMinus>,
  actorId: number,
];

export interface ParamObject_ChangePartyMember {
  actorId: number;
}
