import type {
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
