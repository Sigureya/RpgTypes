import { CommandUnion_AnyAudio } from './audio';
import { EventCommand } from './union';
export declare const isCommandAnyAudio: (command: EventCommand) => command is CommandUnion_AnyAudio;
