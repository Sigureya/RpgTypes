import type { RawGameData } from "@RpgTypes/fileio";
import type { KeyValuePair, KeyValuePairEx } from "@RpgTypes/libs";
import type {
  ExtractedSystemTexts,
  NormalizedEventCommand,
} from "@RpgTypes/rmmz";

export interface RuntimeDictionaryData<Hash> {
  targetNoteKeys: string[];
  textDictionary: KeyValuePairEx<Hash, string>[];
  actorTexts: KeyValuePairEx<string, Hash>[];
}

export interface RuntimeDictionaryDataWithSystem<Hash> {
  targetNoteKeys: string[];
  textDictionary: KeyValuePairEx<Hash, string>[];
  actorTexts: KeyValuePairEx<string, Hash>[];
  systemTexts: ExtractedSystemTexts;
}

export interface RuntimeDictionary<Hash> {
  targetNoteKeys: ReadonlySet<string>;
  textDictionary: ReadonlyMap<Hash, string>;
  actorTextDictionary: ReadonlyMap<string, Hash>;
  systemTexts: ExtractedSystemTexts;
}

export interface GameDataReplaceOutput<Hash> {
  main: RawGameData<NormalizedEventCommand>;
  aux: RuntimeDictionaryDataWithSystem<Hash>;
}

export interface DictionaryNormalizationResult {
  errorItems: KeyValuePair[];
  items: KeyValuePair[];
}
