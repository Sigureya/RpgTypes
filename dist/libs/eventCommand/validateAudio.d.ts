import { Command_PlayBGM, Command_PlayBGS, Command_ChangeBattleBGM, Command_ChangeVictoryME, Command_ChangeDefeatME, Command_PlayME, Command_PlaySE } from './commands/audio';
export declare const isCommandPlayBgm: (command: unknown) => command is Command_PlayBGM;
export declare const isCommandPlayBgs: (command: unknown) => command is Command_PlayBGS;
export declare const isCommandPlayMe: (command: unknown) => command is Command_PlayME;
export declare const isCommandPlaySe: (command: unknown) => command is Command_PlaySE;
export declare const isCommandChangeBattleBgm: (command: unknown) => command is Command_ChangeBattleBGM;
export declare const isCommandChangeVictoryMe: (command: unknown) => command is Command_ChangeVictoryME;
export declare const isCommandChangeDefeatMe: (command: unknown) => command is Command_ChangeDefeatME;
