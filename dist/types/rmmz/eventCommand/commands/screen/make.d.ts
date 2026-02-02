import { Command_FadeInScreen, Command_FadeOutScreen, Command_SetWeatherEffect, Command_FlashScreen, Command_ShakeScreen, Command_TintScreen, ParamObject_SetWeatherEffect, ParamObject_FlashScreen, ParamObject_ShakeScreen, ParamObject_TintScreen } from './types';
export declare const makeCommandSetWeatherEffect: (param: Partial<ParamObject_SetWeatherEffect>, indent?: number) => Command_SetWeatherEffect;
export declare const makeCommandFadeInScreen: (indent?: number) => Command_FadeInScreen;
export declare const makeCommandFadeOutScreen: (indent?: number) => Command_FadeOutScreen;
export declare const makeCommandFlashScreen: (param: Partial<ParamObject_FlashScreen>, indent?: number) => Command_FlashScreen;
export declare const makeCommandShakeScreen: (param: Partial<ParamObject_ShakeScreen>, indent?: number) => Command_ShakeScreen;
export declare const makeCommandTintScreen: (param: Partial<ParamObject_TintScreen>, indent?: number) => Command_TintScreen;
