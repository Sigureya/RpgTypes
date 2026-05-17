import type { RawGameData } from "@RpgTypes/fileio";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";
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
  actorTextDictionary?: KeyValuePairEx<string, Hash>[];
}

export interface ReplaceAuxiliaryData<T> {
  actorTextDictionary: KeyValuePairEx<string, T>[];
  dictionary: RuntimeDictionaryData<T>;
}

export interface GameDataReplaceOutput<Hash> {
  main: RawGameData<NormalizedEventCommand>;
  aux: ReplaceAuxiliaryData<Hash>;
}

export interface ReplaceRawDataInput {
  basicData: RawGameData<NormalizedEventCommand>;
  additionalData: ReplaceAuxiliaryData<string>;
}
