import type {
  Command_FadeInScreen,
  Command_FadeOutScreen,
  Command_SetWeatherEffect,
  Command_FlashScreen,
  Command_ShakeScreen,
  Command_TintScreen,
  ParamObject_SetWeatherEffect,
  ParamObject_FlashScreen,
  ParamObject_ShakeScreen,
  ParamObject_TintScreen,
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

export const makeCommandFlashScreen = (
  param: Partial<ParamObject_FlashScreen>,
  indent: number = 0,
): Command_FlashScreen => ({
  code: 224,
  indent: indent,
  parameters: [
    param.color
      ? [param.color[0], param.color[1], param.color[2], param.color[3]]
      : [255, 255, 255, 255],
    param.duration ?? 0,
    param.wait ?? false,
  ],
});

export const makeCommandShakeScreen = (
  param: Partial<ParamObject_ShakeScreen>,
  indent: number = 0,
): Command_ShakeScreen => ({
  code: 225,
  indent: indent,
  parameters: [
    param.power ?? 5,
    param.speed ?? 5,
    param.duration ?? 60,
    param.wait ?? false,
  ],
});
export const makeCommandTintScreen = (
  param: Partial<ParamObject_TintScreen>,
  indent: number = 0,
): Command_TintScreen => ({
  code: 223,
  indent: indent,
  parameters: [
    param.color
      ? [param.color[0], param.color[1], param.color[2], param.color[3]]
      : [0, 0, 0, 0],
    param.duration ?? 60,
    param.wait ?? false,
  ],
});
