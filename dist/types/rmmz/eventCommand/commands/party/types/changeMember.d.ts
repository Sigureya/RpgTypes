import { EventCommandLike, CHANGE_PARTY_MEMBER } from '../../../../../libs/eventCommand';
import { ValueOf } from '../../../../../libs/templates/valueOf';
import { Operation_PlusMinus } from '../../../../utils';
export interface Command_ChangePartyMember extends EventCommandLike<typeof CHANGE_PARTY_MEMBER> {
    parameters: ParamArray_ChangePartyMember;
}
export type ParamArray_ChangePartyMember = [
    operation: ValueOf<Operation_PlusMinus>,
    actorId: number
];
export interface ParamObject_ChangePartyMember {
    actorId: number;
}
