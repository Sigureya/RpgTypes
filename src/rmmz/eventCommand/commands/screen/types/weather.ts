import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { SET_WEATHER_EFFECT } from "@RpgTypes/rmmz/rpg";

export interface Command_SetWeatherEffect extends EventCommandLike<
  typeof SET_WEATHER_EFFECT
> {
  parameters: ParamArray_SetWeatherEffect;
}

export type ParamArray_SetWeatherEffect = [
  type: string,
  power: number,
  duration: number,
  wait: boolean,
];

export interface ParamObject_SetWeatherEffect {
  type: string;
  power: number;
  duration: number;
  wait: boolean;
}
