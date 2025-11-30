import { Data_Map, Data_Troop, Data_CommonEvent, Command_PluginCommandMZ, EventCommand } from '../../../rmmz';
import { ExtractedBattleEventText, ExtractedCommonEventText, ExtractedMapTexts, PluginCommandMzParameter, TextCommandParameter } from './text/eventCommand';
export interface GameDataExtractor {
    extractMapTexts(rpgMap: Data_Map): ExtractedMapTexts;
    extractBattleText(troop: ReadonlyArray<Data_Troop>): ExtractedBattleEventText[][];
    extractCommonEventText(commons: ReadonlyArray<Data_CommonEvent>): ExtractedCommonEventText[];
    extractArgs(command: Command_PluginCommandMZ): PluginCommandMzParameter[];
    extractCommandTexts(commands: ReadonlyArray<EventCommand>): TextCommandParameter[];
    keys(): string[];
}
