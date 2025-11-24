import type {
  Data_Map,
  Data_Troop,
  Data_CommonEvent,
  Command_PluginCommandMZ,
} from "@RpgTypes/rmmz";
import type {
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapTexts,
  PluginCommandMzParameter,
} from "./text/eventCommand";

export interface GameDataExtractor {
  extractMapTexts(rpgMap: Data_Map): ExtractedMapTexts;
  extractBattleText(
    troop: ReadonlyArray<Data_Troop>
  ): ExtractedBattleEventText[][];
  extractCommonEventText(
    commons: ReadonlyArray<Data_CommonEvent>
  ): ExtractedCommonEventText[];
  extractArgs(command: Command_PluginCommandMZ): PluginCommandMzParameter[];
}
