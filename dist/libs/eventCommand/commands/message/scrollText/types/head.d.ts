import { EventCommandLike2 } from '../../../..';
export type ParamArray_ScrollTextHead = [speed: number, skip: boolean];
export interface ParamObject_ScrollTextHead {
    speed: number;
    skip: boolean;
}
export interface Command2_ScrollTextHead extends EventCommandLike2<105> {
    parameters: ParamArray_ScrollTextHead;
}
