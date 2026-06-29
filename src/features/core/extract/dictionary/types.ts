import type { RawGameData2 } from "@RpgTypes/fileio";
import type { KeyValuePair, KeyValuePairEx } from "@RpgTypes/libs";
import type { SystemTexts, NormalizedEventCommand } from "@RpgTypes/rmmz";

export interface RuntimeDictionaryData<Hash> {
  targetNoteKeys: string[];
  textDictionary: KeyValuePairEx<Hash, string>[];
  actorTexts: KeyValuePairEx<string, Hash>[];
}

export interface RuntimeDictionaryDataWithSystem<Hash> {
  targetNoteKeys: string[];
  textDictionary: KeyValuePairEx<Hash, string>[];
  actorTexts: KeyValuePairEx<string, Hash>[];
  systemTexts: SystemTexts;
}

export interface RuntimeDictionary<Hash> {
  targetNoteKeys: ReadonlySet<string>;
  textDictionary: ReadonlyMap<Hash, string>;
  actorTextDictionary: ReadonlyMap<string, Hash>;
}

export interface GameDataReplaceOutput<Hash> {
  main: RawGameData2<NormalizedEventCommand>;
  originLike: RuntimeDictionaryDataWithSystem<Hash>;
  aux: RuntimeDictionaryDataWithSystem<Hash>;
}

export interface DictionaryNormalizationResult {
  errorItems: KeyValuePair[];
  items: KeyValuePair[];
}
