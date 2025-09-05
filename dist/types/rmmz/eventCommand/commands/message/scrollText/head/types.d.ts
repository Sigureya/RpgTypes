import { EventCommandLike } from '../../../..';
export type ParamArray_ScrollTextHeader = [speed: number, skip: boolean];
export interface ParamObject_ScrollTextHeader {
    speed: number;
    skip: boolean;
}
export interface Command_ScrollTextHeader extends EventCommandLike<105> {
    parameters: ParamArray_ScrollTextHeader;
}
