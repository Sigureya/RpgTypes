import { Command_PluginCommandMZ, EventCommand } from '../../rmmz';
import { GenericCommandParameter, MessageCommandParameter, PluginCommandMzParameter, TextCommandParameter } from './extract/text/eventCommand';
export declare const extractTextFromEventCommands: (list: ReadonlyArray<EventCommand>) => TextCommandParameter[];
export declare const extractTextFromEventCommandsEx: <T extends PluginCommandMzParameter>(list: ReadonlyArray<EventCommand>, pluginCommandFn: (command: Command_PluginCommandMZ) => T[]) => (MessageCommandParameter | GenericCommandParameter | T)[];
