import type {
  MapBatchReadResult,
  ReadSystemResult,
  DataReadErrorItem,
} from "@RpgTypes/fileio";
import type { SummarizedNote } from "./note";
import type {
  ExtractedDataBundle,
  ExtractedCommonEventText,
  ExtractedBattleEventText,
  ExtractedMapTexts,
} from "./text";
import type { ExtractedSystemTexts } from "./text/system";

export interface ExtractedRawGameDataTextValue {
  mainData: ExtractedDataBundle;
  eventData: {
    commonEvents: ExtractedCommonEventText[];
    troops: ExtractedBattleEventText[];
  };
  mapFiles: MapBatchReadResult<ExtractedMapTexts>;
  system: ReadSystemResult<ExtractedSystemTexts>;
}

export interface ExtractedRawGameDataTexts {
  value: ExtractedRawGameDataTextValue;
  errors: DataReadErrorItem[];
}

export interface NormalizeRawGameDataNoteTextsResult {
  nonTextNoteKeys: Set<string>;
  data: ExtractedRawGameDataTexts;
  mapNoteSummary: Map<string, SummarizedNote[]>;
  dataNoteSummary: Map<string, SummarizedNote[]>;
}
