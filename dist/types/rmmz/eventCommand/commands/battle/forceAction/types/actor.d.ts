import { EventCommandLike, FORCE_ACTION } from '../../../../../../libs';
export interface Command_ActorForceAction extends EventCommandLike<typeof FORCE_ACTION, ParamArray_ForceAction> {
}
export interface ParamObject_ActorForceAction {
    actorId: number;
    skillId: number;
    targetIndex?: number;
}
export interface ParamObject_ActorForceActionLastTarget {
    actorId: number;
    skillId: number;
}
export type ParamArray_ForceAction = [
    subjectActor: 1,
    actorId: number,
    skillId: number,
    targetIndex: number
];
export type ParamArray_ForceActionLastTarget = [
    subjectActor: 1,
    actorId: number,
    skillId: number,
    lastTarget: -2
];
