import type { KeyValuePairEx } from "@RpgTypes/libs";
import type { SummarizedNote, SummarizedNoteValue } from "./note";
import type {
  ExtractedRawGameDataTexts,
  ExtractedTextMainDataFinal,
  ExtractedEventDataBundle,
  SystemTexts,
} from "./text";

export interface RawGameDataNoteNormalization {
  nonTextNoteKeys: Set<string>;
  data: ExtractedRawGameDataTexts;
  dataNoteSummary: SummarizedNote<SummarizedNoteValue>[];
  mapNoteSummary: SummarizedNote<SummarizedNoteValue>[];
}

export interface ExtractedTextFinalWithNotes<UUID>
  extends ExtractedTextMainDataFinal<UUID>, ExtractedEventDataBundle<UUID> {
  noteSummaries: SummarizedNote<SummarizedNoteValue>[];
  system: SystemTexts<UUID>;
}

export interface RuntimeDictionaryData<Hash> {
  targetNoteKeys: string[];
  dictionary: KeyValuePairEx<Hash, string>[];
}

export interface ReplaceAuxiliaryData<T> {
  actorTextDictionary: KeyValuePairEx<T, string>[];
  dictionary: RuntimeDictionaryData<T>;
}
