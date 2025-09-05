import { EventCommandLike } from '../../../frame';
export type ParamArray_ChangeActorText = [actorId: number, text: string];
export interface ParamObject_ChangeActorName {
    actorId: number;
    name: string;
}
export interface ParamObject_ChangeActorNickName {
    actorId: number;
    nickname: string;
}
export interface ParamObject_ChangeActorProfile {
    actorId: number;
    profile: string;
}
export interface CommandUnion_ChangeActorText extends EventCommandLike<320 | 324 | 325> {
    parameters: ParamArray_ChangeActorText;
}
export interface Command_ChangeActorName extends EventCommandLike<320> {
    parameters: [actorId: number, name: string];
}
export interface Command_ChangeActorNickName extends EventCommandLike<324> {
    parameters: [actorId: number, nickname: string];
}
export interface Command_ChangeActorProfile extends EventCommandLike<325> {
    parameters: [actorId: number, profile: string];
}
