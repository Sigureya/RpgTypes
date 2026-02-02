import { EventCommandLike } from '../../../frame';
import { SET_WEATHER_EFFECT } from '../../../../rpg';
export interface Command_SetWeatherEffect extends EventCommandLike<typeof SET_WEATHER_EFFECT> {
    parameters: ParamArray_SetWeatherEffect;
}
export type ParamArray_SetWeatherEffect = [
    type: string,
    power: number,
    duration: number,
    wait: boolean
];
export interface ParamObject_SetWeatherEffect {
    type: string;
    power: number;
    duration: number;
    wait: boolean;
}
