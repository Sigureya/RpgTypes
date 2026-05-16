import type { AssetFilesBundle, RawGameData } from "@RpgTypes/fileio";

export interface ReplaceRawDataContext {
  data: RawGameData;
  assetBundle: AssetFilesBundle;
  dictionary: ReadonlyMap<string, string>;
  textKeys: ReadonlySet<string>;
}
