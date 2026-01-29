import { ValueOf } from '../../../../../libs/templates/valueOf';
import { EventCommandLike } from '../../../frame';
import { Operation_PlusMinus } from '../../../../utils';
export interface Command_ChangePartyMember extends EventCommandLike<129> {
    parameters: ParamArray_ChangePartyMember;
}
export type ParamArray_ChangePartyMember = [
    operation: ValueOf<Operation_PlusMinus>,
    actorId: number
];
export interface ParamObject_ChangePartyMember {
    actorId: number;
}
