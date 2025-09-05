import { EventCommandLike } from '../../../../rpg';
import { Direction8 } from '../../../../utils';
export interface Command_SetEventLocation extends EventCommandLike<203> {
    parameters: ParamArray_SetEventLocation;
}
export type ParamArray_SetEventLocation = [
    mapId: number,
    eventId: number,
    x: number,
    y: number,
    direction: Direction8
];
