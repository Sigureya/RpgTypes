import { AssetFilesBundle, RawGameData, RawGameData2 } from '../../../fileio';
import { Data_SystemTexts, EventCommandUnknown } from '../../../rmmz';
export interface ReplaceRawDataContext {
    data: RawGameData2;
    system: Data_SystemTexts;
    assetBundle: AssetFilesBundle;
    dictionary: ReadonlyMap<string, string>;
    textKeys: ReadonlySet<string>;
}
export interface ReplaceRawDataContextEx<Command extends EventCommandUnknown, System> {
    data: RawGameData<Command, System>;
    assetBundle: AssetFilesBundle;
    dictionary: ReadonlyMap<string, string>;
    textKeys: ReadonlySet<string>;
}
