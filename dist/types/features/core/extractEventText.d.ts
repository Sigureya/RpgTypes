import { Data_Map, Data_CommonEvent, Data_Troop, EventCommand, Command_PluginCommandMZ } from '../../rmmz';
import { PluginCommandMzParameter, ExtractedBattleEventText, ExtractedCommonEventText, ExtractedMapTexts } from './extract/text/eventCommand';
export declare const extractCommonEventTexts: <T extends PluginCommandMzParameter>(commons: Data_CommonEvent, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedCommonEventText<T>;
export declare const extractBattleEventTexts: <T extends PluginCommandMzParameter>(list: Data_Troop, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedBattleEventText<T>[];
export declare const extractMapText: <T extends PluginCommandMzParameter>(map: Data_Map<EventCommand>, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedMapTexts<T>;
