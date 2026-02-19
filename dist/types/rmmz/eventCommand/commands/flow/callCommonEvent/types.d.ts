import { COMMON_EVENT, EventCommandLike } from '../../../../../libs/eventCommand';
export type ParamArray_CommonEvent = [eventId: number];
export type ParamObject_CommonEvent = {
    eventId: number;
};
export interface Command_CommonEvent extends EventCommandLike<typeof COMMON_EVENT> {
    parameters: ParamArray_CommonEvent;
}
