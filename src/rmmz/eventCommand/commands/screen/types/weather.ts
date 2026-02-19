import type {
  EventCommandLike,
  SET_WEATHER_EFFECT,
} from "@RpgTypes/libs/eventCommand";

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
