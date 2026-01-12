import { EventCommand, Command_PluginCommandMZ } from '../../../../rmmz';
export declare const replaceEventCommandTexts: (command: EventCommand, fn: (key: string) => string | undefined, pluginCommandFn?: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ) => EventCommand;
