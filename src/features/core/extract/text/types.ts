import type {
  DataReadErrorItem,
  MapBatchReadResult,
  ReadSystemResult,
} from "@RpgTypes/fileio";
import type {
  ExtractedCommonEventText,
  ExtractedBattleEventText,
  ExtractedMapTexts,
} from "./eventCommand";
import type { ExtractedDataBundle } from "./mainData";
import type { ExtractedSystemTexts } from "./system";

export interface ExtractedRawGameDataTexts {
  value: ExtractedRawGameDataTextValue;
  errors: DataReadErrorItem[];
}

export interface ExtractedRawGameDataTextValue {
  mainData: ExtractedDataBundle;
  eventData: {
    commonEvents: ExtractedCommonEventText[];
    troops: ExtractedBattleEventText[];
  };
  mapFiles: MapBatchReadResult<ExtractedMapTexts>;
  system: ReadSystemResult<ExtractedSystemTexts>;
}
