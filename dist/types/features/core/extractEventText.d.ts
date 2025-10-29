import { Data_Map, Data_CommonEvent, Data_Troop, EventCommand, Command_PluginCommandMZ } from '../../rmmz';
import { PluginCommandMzParameter } from './extract/text/eventCommand';
import { ExtractedBattleEventText, ExtractedCommonEventText, ExtractedMapTexts } from './extract/text/types';
export declare const extractCommonEventTexts: <T extends PluginCommandMzParameter>(commons: ReadonlyArray<Data_CommonEvent>, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedCommonEventText<T>[];
export declare const extractBattleEventTexts: <T extends PluginCommandMzParameter>(list: ReadonlyArray<Data_Troop>, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedBattleEventText<T>[][];
export declare const extractMapText: <T extends PluginCommandMzParameter>(map: Data_Map<EventCommand>, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedMapTexts<T>;
