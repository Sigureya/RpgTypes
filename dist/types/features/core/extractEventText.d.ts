import { Data_Map, Data_CommonEvent, Data_Troop, EventCommand, Command_PluginCommandMZ } from '../../rmmz';
import { TextPluginCommandParameter, ExtractedBattleEventText, ExtractedCommonEventText, ExtractedMapTexts } from './extract/text/eventCommand';
export declare const extractPluginCommandFromCommn: (commons: Data_CommonEvent) => Command_PluginCommandMZ[];
export declare const extractPluginCommandFromTroop: (troop: Data_Troop) => Command_PluginCommandMZ[];
export declare const extractPluginCommandFromMap: (map: Data_Map<EventCommand>) => Command_PluginCommandMZ[][][];
export declare const extractCommonEventTexts: <T extends TextPluginCommandParameter>(commons: Data_CommonEvent, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedCommonEventText<T>;
export declare const extractBattleEventTexts: <T extends TextPluginCommandParameter>(list: Data_Troop, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedBattleEventText<T>[];
export declare const extractMapText: <T extends TextPluginCommandParameter>(map: Data_Map<EventCommand>, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedMapTexts<T>;
