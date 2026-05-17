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
  textDictionary: KeyValuePairEx<Hash, string>[];
  actorTexts: KeyValuePairEx<string, Hash>[];
}

export interface RuntimeDictionary<Hash> {
  targetNoteKeys: ReadonlySet<string>;
  textDictionary: ReadonlyMap<Hash, string>;
  actorTextDictionary: ReadonlyMap<string, Hash>;
}

export interface GameDataReplaceOutput<Hash> {
  main: RawGameData<NormalizedEventCommand>;
  aux: RuntimeDictionaryData<Hash>;
}
