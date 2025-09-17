import { Command_FadeOutBGM, Command_SaveBGM, Command_ResumeBGM, Command_FadeOutBGS } from './types';
export declare const makeCommandFadeOutBGM: (param: {
    duration: number;
}, indent?: number) => Command_FadeOutBGM;
export declare const makeCommandSaveBGM: (indent?: number) => Command_SaveBGM;
export declare const makeCommandResumeBGM: (indent?: number) => Command_ResumeBGM;
export declare const makeCommandFadeOutBGS: (param: {
    duration: number;
}, indent?: number) => Command_FadeOutBGS;
