import { AssetFilesBundle, RawGameData } from '../../fileio';
import { KeyValuePair } from '../../libs';
import { NormalizedEventCommand } from '../../rmmz';
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
