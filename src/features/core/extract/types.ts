import type {
  MapBatchReadResult,
  ReadSystemResult,
  DataReadErrorItem,
} from "@RpgTypes/fileio";
import type { SummarizedNote, SummarizedNoteValue } from "./note";
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

export interface RawGameDataNoteNormalization {
  nonTextNoteKeys: Set<string>;
  data: ExtractedRawGameDataTexts;
  dataNoteSummary: SummarizedNote<SummarizedNoteValue>[];
  mapNoteSummary: SummarizedNote<SummarizedNoteValue>[];
}
