import type { AssetFilesBundle, RawGameData } from "@RpgTypes/fileio";
import type { NormalizedEventCommand } from "@RpgTypes/rmmz";
import type { ReplaceAuxiliaryData } from "../extract";

export interface ReplaceRawDataInput {
  basicData: RawGameData<NormalizedEventCommand>;
  additionalData: ReplaceAuxiliaryData<string>;
}

export interface GameDataReplaceOutput<Hash> {
  main: RawGameData<NormalizedEventCommand>;
  aux: ReplaceAuxiliaryData<Hash>;
}

export interface ReplaceRawDataContext {
  data: RawGameData;
  assetBundle: AssetFilesBundle;
  dictionary: ReadonlyMap<string, string>;
  textKeys: ReadonlySet<string>;
}
