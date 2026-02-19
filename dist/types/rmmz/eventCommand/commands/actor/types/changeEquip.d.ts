import { EventCommandLike, CHANGE_EQUIP } from '../../../../../libs/eventCommand';
export interface Command_ChangeEquip extends EventCommandLike<typeof CHANGE_EQUIP> {
    parameters: ParamArray_ChangeEquip;
}
export type ParamArray_ChangeEquip = [
    actorId: number,
    equipType: number,
    equipId: number
];
export interface ParamObject_ChangeEquip {
    actorId: number;
    equipType: number;
    equipId: number;
}
