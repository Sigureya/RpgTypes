import { Data_Map, Data_Troop, Data_CommonEvent, Command_PluginCommandMZ, EventCommand } from '../../../../../../rmmz';
import { TextPluginCommandParameter } from './pluginCommand';
import { ExtractedMapTexts, ExtractedBattleEventText, ExtractedCommonEventText } from './result';
import { TextCommandParameter } from './union';
export type GameDataExtractor = EventContainerExtractor & EventCommandExtractor;
export interface EventContainerExtractor {
    extractMapTexts(rpgMap: Data_Map): ExtractedMapTexts;
    extractBattleText(troop: Data_Troop): ExtractedBattleEventText[];
    extractCommonEventText(commons: Data_CommonEvent): ExtractedCommonEventText;
}
export interface EventCommandExtractor {
    extractArgs(command: Command_PluginCommandMZ): TextPluginCommandParameter[];
    extractCommandTexts(commands: ReadonlyArray<EventCommand>): TextCommandParameter[];
    pluginCommandKeys(): string[];
}
