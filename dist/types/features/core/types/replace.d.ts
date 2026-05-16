import { AssetFilesBundle, RawGameData } from '../../../fileio';
export interface ReplaceRawDataContext {
    data: RawGameData;
    assetBundle: AssetFilesBundle;
    dictionary: ReadonlyMap<string, string>;
    textKeys: ReadonlySet<string>;
}
