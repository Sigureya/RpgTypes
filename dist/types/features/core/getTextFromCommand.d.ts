import { Command_PluginCommandMZ, EventCommand } from '../../rmmz';
import { TextPluginCommandParameter, TextCommandParameter } from './extract/text/eventCommand';
export declare const extractTextFromEventCommands: (list: ReadonlyArray<EventCommand>) => TextCommandParameter[];
export declare const extractTextFromEventCommandsEx: <T extends TextPluginCommandParameter>(list: ReadonlyArray<EventCommand>, pluginCommandFn: (command: Command_PluginCommandMZ) => T[]) => (TextCommandParameter | T)[];
