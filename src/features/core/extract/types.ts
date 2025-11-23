import type { Data_Map, Data_Troop, Data_CommonEvent } from "@RpgTypes/rmmz";
import type {
  ExtractedBattleEventText,
  ExtractedCommonEventText,
  ExtractedMapTexts,
} from "./text/eventCommand";

export interface GameDataExtractor {
  extractMapTexts(rpgMap: Data_Map): ExtractedMapTexts;
  extractBattleText(
    troop: ReadonlyArray<Data_Troop>
  ): ExtractedBattleEventText[][];
  extractCommonEventText(
    commons: ReadonlyArray<Data_CommonEvent>
  ): ExtractedCommonEventText[];
}
