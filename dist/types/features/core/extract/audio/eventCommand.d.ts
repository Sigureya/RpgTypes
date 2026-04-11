import { Command_PluginCommandMZ, EventCommand } from '../../../../rmmz/eventCommand';
import { AudioPluginCommandParameter } from './types';
import { AudioCommandParameter } from './types/result';
export declare const extractAudioCommands: <T extends AudioPluginCommandParameter>(commands: ReadonlyArray<EventCommand>, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => (AudioCommandParameter | T)[];
