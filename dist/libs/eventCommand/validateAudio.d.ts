import { Command2_PlayBGM, Command2_PlayBGS, Command2_ChangeBattleBGM, Command2_ChangeVictoryME, Command2_ChangeDefeatME, Command2_PlayME, Command2_PlaySE } from './commands/audio/types';
export declare const isCommandPlayBgm: (command: unknown) => command is Command2_PlayBGM;
export declare const isCommandPlayBgs: (command: unknown) => command is Command2_PlayBGS;
export declare const isCommandPlayMe: (command: unknown) => command is Command2_PlayME;
export declare const isCommandPlaySe: (command: unknown) => command is Command2_PlaySE;
export declare const isCommandChangeBattleBgm: (command: unknown) => command is Command2_ChangeBattleBGM;
export declare const isCommandChangeVictoryMe: (command: unknown) => command is Command2_ChangeVictoryME;
export declare const isCommandChangeDefeatMe: (command: unknown) => command is Command2_ChangeDefeatME;
