import { EventCommandLike, SET_EVENT_LOCATION } from '../../../../../../libs/eventCommand';
import { SetEventLocationDirection } from './direct';
export interface Command_SetEventLocationExchange extends EventCommandLike<typeof SET_EVENT_LOCATION> {
    parameters: ParamArray_SetEventLocationExchange;
}
export type ParamArray_SetEventLocationExchange = [
    targetCharacterId: number,
    modeExchange: 2,
    exchangeCharacterId: number,
    unused: number,
    direction: SetEventLocationDirection
];
export interface ParamObject_SetEventLocationExchange {
    targetCharacterId: number;
    exchangeCharacterId: number;
    direction: SetEventLocationDirection;
}
