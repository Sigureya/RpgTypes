import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { SET_WEATHER_EFFECT } from "@RpgTypes/rmmz/rpg";

export interface Command_Weather extends EventCommandLike<
  typeof SET_WEATHER_EFFECT
> {
  parameters: ParamArray_Weather;
}

export type ParamArray_Weather = [
  type: number,
  power: number,
  duration: number,
  wait: boolean,
];

export interface ParamObject_Weather {
  type: number;
  power: number;
  duration: number;
  wait: boolean;
}
