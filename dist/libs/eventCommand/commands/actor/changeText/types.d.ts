import { EventCommandLike2 } from '../../../frame';
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
export interface Command2_ChangeActorText extends EventCommandLike2<320 | 324 | 325> {
    parameters: ParamArray_ChangeActorText;
}
export interface Command2_ChangeActorName extends EventCommandLike2<320> {
    parameters: [actorId: number, name: string];
}
export interface Command2_ChangeActorNickName extends EventCommandLike2<324> {
    parameters: [actorId: number, nickname: string];
}
export interface Command2_ChangeActorProfile extends EventCommandLike2<325> {
    parameters: [actorId: number, profile: string];
}
