import type { DataReadErrorItem, MapBatchReadResult } from "@RpgTypes/fileio";
import type {
  ExtractedCommonEventText,
  ExtractedBattleEventText,
  ExtractedMapTexts,
} from "./eventCommand";
import type { ExtractedDataBundle } from "./mainData";

export interface ExtractedRawGameDataTexts {
  value: ExtractedRawGameDataTextValue;
  errors: DataReadErrorItem[];
}

export interface ExtractedRawGameDataEventTexts {
  eventData: {
    commonEvents: ExtractedCommonEventText[];
    troops: ExtractedBattleEventText[];
  };
  mapFiles: MapBatchReadResult<ExtractedMapTexts>;
}

export interface ExtractedRawGameDataTextValue extends ExtractedRawGameDataEventTexts {
  mainData: ExtractedDataBundle;
  eventData: {
    commonEvents: ExtractedCommonEventText[];
    troops: ExtractedBattleEventText[];
  };
  mapFiles: MapBatchReadResult<ExtractedMapTexts>;
}
