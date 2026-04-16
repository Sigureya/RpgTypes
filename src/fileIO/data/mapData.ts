import type { Data_Map, Data_MapInfo } from "@RpgTypes/rmmz";
import { readArrayData } from "./arrayData";
import { FILENAME_MAP_INFOS } from "./constants";
import type {
  MapFiles,
  MapReadFailed,
  MapReadSuccess,
  MapReadTerms,
} from "./map";
import { readMapFileFromInfo } from "./map";
import type { TermsOfReadArrayData, ReadArrayResult } from "./types";

export const readMapInfoData = (
  terms: TermsOfReadArrayData,
  readFileFn: (filename: string) => Promise<string>,
  validateFn: (item: unknown) => item is Data_MapInfo,
): Promise<ReadArrayResult<Data_MapInfo>> => {
  return readArrayData(terms, FILENAME_MAP_INFOS, readFileFn, validateFn);
};
