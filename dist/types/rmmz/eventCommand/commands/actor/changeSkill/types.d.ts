import { EventCommandLike, CHANGE_SKILL } from '../../../../../libs/eventCommand';
export interface Command_ChangeSkill extends EventCommandLike<typeof CHANGE_SKILL> {
    parameters: ParamArray_ChangeSkill;
}
export type ParamArray_ChangeSkill = [
    actorId: number,
    unk: number,
    operation: 0 | 1,
    skillId: number
];
