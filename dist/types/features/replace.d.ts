import { Data_Map, EventCommand, NormalizedEventCommand, Command_PluginCommandMZ, Command_ScriptHeader, Data_TroopUnknonw, Data_CommonEventUnknown } from '../rmmz';
export interface ReplaceTextHandlers {
    pluginCommand: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ;
    scriptCommand: (command: Command_ScriptHeader) => Command_ScriptHeader;
    text: (key: string) => string | undefined;
}
export declare const replaceEventCommandTexts: (commandList: ReadonlyArray<EventCommand>, handlers: ReplaceTextHandlers) => NormalizedEventCommand[];
export declare const replaceTroopData: (troop: Data_TroopUnknonw<EventCommand>, handlers: ReplaceTextHandlers) => Data_TroopUnknonw<NormalizedEventCommand>;
export declare const replaceTroopTexts: (troop: Data_TroopUnknonw<EventCommand>, fn: (key: string) => string | undefined) => Data_TroopUnknonw<NormalizedEventCommand>;
export declare const replaceCommonEventData: (commonEvent: Data_CommonEventUnknown<EventCommand>, handlers: ReplaceTextHandlers) => Data_CommonEventUnknown<NormalizedEventCommand>;
export declare const replaceCommonEventTexts: (commonEvent: Data_CommonEventUnknown<EventCommand>, fn: (key: string) => string | undefined) => Data_CommonEventUnknown<NormalizedEventCommand>;
export declare const replaceMapTexts: (mapData: Data_Map<EventCommand>, fn: (key: string) => string | undefined) => Data_Map<NormalizedEventCommand>;
export declare const replaceMapData: (mapData: Data_Map<EventCommand>, handlers: ReplaceTextHandlers) => Data_Map<NormalizedEventCommand>;
