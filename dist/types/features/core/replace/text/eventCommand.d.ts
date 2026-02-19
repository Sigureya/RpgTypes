import { NormalizedEventCommand, Command_PluginCommandMZ, Command_ScriptHeader } from '../../../../rmmz';
export declare const replaceBasicEventCommandTexts: (command: Exclude<NormalizedEventCommand, Command_PluginCommandMZ | Command_ScriptHeader>, fn: (key: string) => string | undefined) => NormalizedEventCommand;
