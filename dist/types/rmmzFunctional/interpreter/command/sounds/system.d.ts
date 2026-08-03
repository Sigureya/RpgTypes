import { Command_ChangeDefeatME, Command_ChangeVictoryME, Command_ChangeBattleBGM } from '../../../../rmmz/eventCommand';
import { Rmmz_System } from '../../../../rmmzRuntime';
export declare const commandChangeDefeatMe: (command: Command_ChangeDefeatME, system: Rmmz_System) => boolean;
export declare const commandChangeVictoryMe: (command: Command_ChangeVictoryME, system: Rmmz_System) => boolean;
export declare const commandChangeBattleBgm: (command: Command_ChangeBattleBGM, system: Rmmz_System) => boolean;
export declare const commmandSaveBgm: (system: Rmmz_System) => boolean;
