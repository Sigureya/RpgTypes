import type { AssetFilesBundle, RawGameData } from "@RpgTypes/fileio";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";

export interface ReplaceRawDataInput {
  basicData: RawGameData<NormalizedEventCommand>;
  adtionalData: ReplaceAuxiliaryData<string>;
}

export interface GameDataReplaceOutput<Hash> {
  main: RawGameData<NormalizedEventCommand>;
  aux: ReplaceAuxiliaryData<Hash>;
}

export interface ReplaceAuxiliaryData<T> {
  actorTextDictionary: KeyValuePairEx<T, string>[];
  dictionary: RuntimeDictionaryData<T>;
}

export interface RuntimeDictionaryData<Hash> {
  targetNoteKeys: string[];
  dictionary: KeyValuePairEx<Hash, string>[];
}

export interface ReplaceRawDataContext {
  data: RawGameData;
  assetBundle: AssetFilesBundle;
  dictionary: ReadonlyMap<string, string>;
  textKeys: ReadonlySet<string>;
}
