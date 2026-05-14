import type { AssetFilesBundle, RawGameData } from "@RpgTypes/fileio";
import type { KeyValuePair } from "@RpgTypes/libs";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";

export interface ReplaceRawDataInput {
  basicData: RawGameData<NormalizedEventCommand>;
  adtionalData: ReplaceAuxiliaryData;
}

export interface ReplaceAuxiliaryData {
  actorTextDictionary: KeyValuePair[];
}

export interface ReplaceRawDataContext {
  data: RawGameData;
  assetBundle: AssetFilesBundle;
  dictionary: ReadonlyMap<string, string>;
  textKeys: ReadonlySet<string>;
}

export interface GameDataReplaceOutput {
  main: RawGameData<NormalizedEventCommand>;
  aux: ReplaceAuxiliaryData;
}
