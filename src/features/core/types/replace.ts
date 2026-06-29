import type {
  AssetFilesBundle,
  RawGameData,
  RawGameData2,
} from "@RpgTypes/fileio";
import type { Data_SystemTexts, EventCommandUnknown } from "@RpgTypes/rmmz";

export interface ReplaceRawDataContext {
  data: RawGameData2;
  system: Data_SystemTexts;
  assetBundle: AssetFilesBundle;
  dictionary: ReadonlyMap<string, string>;
  textKeys: ReadonlySet<string>;
}

export interface ReplaceRawDataContextEx<
  Command extends EventCommandUnknown,
  System,
> {
  data: RawGameData<Command, System>;
  assetBundle: AssetFilesBundle;
  dictionary: ReadonlyMap<string, string>;
  textKeys: ReadonlySet<string>;
}
