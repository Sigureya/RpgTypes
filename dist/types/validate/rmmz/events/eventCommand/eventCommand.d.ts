import { Command_ShowChoices, CommandUnion_AnyAudio } from '../../../../rmmz';
export declare const isCommandChoice: (command: unknown) => command is Command_ShowChoices;
export declare const isCommandAudio: (data: unknown) => data is CommandUnion_AnyAudio;
