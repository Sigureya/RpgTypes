import type {
  Data_Map,
  Data_Troop,
  Data_CommonEvent,
  Command_PluginCommandMZ,
  EventCommand,
} from "@RpgTypes/rmmz";
import type {
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapTexts,
  PluginCommandMzParameter,
  TextCommandParameter,
} from "./text/eventCommand";

export interface GameDataExtractor {
  extractMapTexts(rpgMap: Data_Map): ExtractedMapTexts;
  extractBattleText(troop: Data_Troop): ExtractedBattleEventText[];
  extractCommonEventText(commons: Data_CommonEvent): ExtractedCommonEventText;
  extractArgs(command: Command_PluginCommandMZ): PluginCommandMzParameter[];
  extractCommandTexts(
    commands: ReadonlyArray<EventCommand>
  ): TextCommandParameter[];
  keys(): string[];
}
