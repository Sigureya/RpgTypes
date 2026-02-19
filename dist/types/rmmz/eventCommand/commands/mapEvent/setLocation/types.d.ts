import { EventCommandLike, SET_EVENT_LOCATION } from '../../../../../libs/eventCommand';
import { Direction8 } from '../../../../utils';
export interface Command_SetEventLocation extends EventCommandLike<typeof SET_EVENT_LOCATION> {
    parameters: ParamArray_SetEventLocation;
}
export type ParamArray_SetEventLocation = [
    mapId: number,
    eventId: number,
    x: number,
    y: number,
    direction: Direction8
];
