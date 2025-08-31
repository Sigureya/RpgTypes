import { SET_WEATHER_EFFECT } from '../../../rpg';
import { EventCommandLike2 } from '../../frame';
export interface Command_SetWeatherEffect extends EventCommandLike2<typeof SET_WEATHER_EFFECT> {
    parameters: ParamArray_WeatherEffect;
}
export type ParamArray_WeatherEffect = [
    type: string,
    power: number,
    duration: number,
    needsWait: boolean
];
