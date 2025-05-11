import { EventCommandLike2 } from '../..';
export type ParamArray_CommonEvent = [eventId: number];
export type ParamObject_CommonEvent = {
    eventId: number;
};
export interface Command2_CommonEvent extends EventCommandLike2<117> {
    parameters: ParamArray_CommonEvent;
}
