import { Command_PluginCommandMZ, Command_ScriptHeader, Data_CommonEventUnknown, Data_Map, Data_TroopUnknonw, EventCommand, NormalizedEventCommand, NoteReplaceHandlers, TextReplaceHandlers } from '../rmmz';
export interface ReplaceEventTextHandlers extends TextReplaceHandlers {
    pluginCommand: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ;
    scriptCommand: (command: Command_ScriptHeader) => Command_ScriptHeader;
    replaceText: (key: string) => string | undefined;
}
export declare const replaceEventCommandTexts: (commandList: ReadonlyArray<EventCommand>, handlers: ReplaceEventTextHandlers) => NormalizedEventCommand[];
export declare const replaceTroopData: (troop: Data_TroopUnknonw<EventCommand>, handlers: ReplaceEventTextHandlers) => Data_TroopUnknonw<NormalizedEventCommand>;
export declare const replaceTroopTexts: (troop: Data_TroopUnknonw<EventCommand>, fn: (key: string) => string | undefined) => Data_TroopUnknonw<NormalizedEventCommand>;
export declare const replaceCommonEventData: (commonEvent: Data_CommonEventUnknown<EventCommand>, handlers: ReplaceEventTextHandlers) => Data_CommonEventUnknown<NormalizedEventCommand>;
export declare const replaceCommonEventTexts: (commonEvent: Data_CommonEventUnknown<EventCommand>, fn: (key: string) => string | undefined) => Data_CommonEventUnknown<NormalizedEventCommand>;
export declare const replaceMapTexts: (mapData: Data_Map<EventCommand>, fn: (key: string) => string | undefined) => Data_Map<NormalizedEventCommand>;
export declare const replaceMapData: (mapData: Data_Map<EventCommand>, handlers: ReplaceEventTextHandlers & NoteReplaceHandlers) => Data_Map<NormalizedEventCommand>;
