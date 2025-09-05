import { EventCommandLike } from '../../..';
export type ParamArray_CommonEvent = [eventId: number];
export type ParamObject_CommonEvent = {
    eventId: number;
};
export interface Command_CommonEvent extends EventCommandLike<117> {
    parameters: [eventId: number];
}
