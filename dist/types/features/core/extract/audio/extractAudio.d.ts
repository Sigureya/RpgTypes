import { Command_PluginCommandMZ, Data_CommonEvent, Data_Map, Data_Troop, EventCommand } from '../../../../rmmz';
import { AudioPluginCommandParameter } from './types';
import { ExtractedBattleEventAudio, ExtractedCommonEventAudio, ExtractedMapAudios } from './types/result';
export declare const extractCommonEventAudio: <T extends AudioPluginCommandParameter>(commons: Data_CommonEvent, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedCommonEventAudio<T>;
export declare const extractBattleAudio: <T extends AudioPluginCommandParameter>(list: Data_Troop, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedBattleEventAudio<T>[];
export declare const extractMapAudio: <T extends AudioPluginCommandParameter>(map: Data_Map<EventCommand>, pluginCommandEvaltor?: (command: Command_PluginCommandMZ) => T[]) => ExtractedMapAudios<T>;
