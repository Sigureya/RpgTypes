import type {
  Command_FadeInScreen,
  Command_FadeOutScreen,
  Command_SetWeatherEffect,
  ParamObject_SetWeatherEffect,
} from "./types";

export const makeCommandSetWeatherEffect = (
  param: Partial<ParamObject_SetWeatherEffect>,
  indent: number = 0,
): Command_SetWeatherEffect => ({
  code: 236,
  indent: indent,
  parameters: [
    param.type ?? "none",
    param.power ?? 0,
    param.duration ?? 0,
    param.wait ?? false,
  ],
});

export const makeCommandFadeInScreen = (
  indent: number = 0,
): Command_FadeInScreen => ({
  code: 222,
  indent: indent,
  parameters: [],
});

export const makeCommandFadeOutScreen = (
  indent: number = 0,
): Command_FadeOutScreen => ({
  code: 221,
  indent: indent,
  parameters: [],
});
