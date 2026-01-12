import { Data_Map, Command_PluginCommandMZ, Data_CommonEvent, Data_Troop, EventCommand } from '../../../../rmmz';
export declare const replaceTroopTexts: (troop: Data_Troop, fn: (key: string) => string | undefined, pluginCommandFn?: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ) => Data_Troop;
export declare const replaceCommonEventTexts: (commonEvent: Data_CommonEvent, fn: (key: string) => string | undefined, pluginCommandFn?: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ) => Data_CommonEvent;
export declare const replaceMapDataTexts: (mapData: Data_Map<EventCommand>, fn: (key: string) => string | undefined, pluginCommandFn?: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ) => Data_Map<EventCommand>;
