import { AssetFilesBundle, RawGameData } from '../../fileio';
import { KeyValuePairEx } from '../../libs';
import { NormalizedEventCommand } from '../../rmmz';
export interface ReplaceRawDataInput {
    basicData: RawGameData<NormalizedEventCommand>;
    adtionalData: ReplaceAuxiliaryData<string>;
}
export interface ReplaceAuxiliaryData<T> {
    actorTextDictionary: KeyValuePairEx<T, string>[];
    newTextDictionary: KeyValuePairEx<T, string>[];
}
export interface ReplaceRawDataContext {
    data: RawGameData;
    assetBundle: AssetFilesBundle;
    dictionary: ReadonlyMap<string, string>;
    textKeys: ReadonlySet<string>;
}
export interface GameDataReplaceOutput<Hash> {
    main: RawGameData<NormalizedEventCommand>;
    aux: ReplaceAuxiliaryData<Hash>;
}
