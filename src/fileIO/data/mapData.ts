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

export const readMapFilesFromInfo = (
  infos: ReadonlyArray<Data_MapInfo>,
  terms: MapReadTerms,
  readMapFile: (info: Data_MapInfo) => Promise<string>,
  validateMapData: (data: unknown) => data is Data_Map,
): Promise<MapFiles<Data_Map>> => {
  return readMapFilesFromInfoEx(
    infos,
    terms,
    readMapFile,
    validateMapData,
    (data) => data.map,
  );
};

export const readMapFilesFromInfoEx = async <T>(
  infos: ReadonlyArray<Data_MapInfo>,
  terms: MapReadTerms,
  readMapFile: (info: Data_MapInfo) => Promise<string>,
  validateMapData: (data: unknown) => data is Data_Map,
  convFn: (data: MapReadSuccess<Data_Map>) => T,
): Promise<MapFiles<T>> => {
  const maps = await Promise.all(
    infos.map(async (info): Promise<MapReadFailed | MapReadSuccess<T>> => {
      return mmm(info, terms, readMapFile, convFn, validateMapData);
    }),
  );
  return asx(maps);
};

const mmm = async <T>(
  info: Data_MapInfo,
  terms: MapReadTerms,
  readMapFile: (info: Data_MapInfo) => Promise<string>,
  convFn: (data: MapReadSuccess<Data_Map>) => T,
  validateMapData: (data: unknown) => data is Data_Map,
): Promise<MapReadFailed | MapReadSuccess<T>> => {
  const map = await readMapFileFromInfo(
    info,
    terms,
    readMapFile,
    validateMapData,
  );
  if (map.map === null) {
    return map;
  }
  return {
    editingName: map.editingName,
    filename: map.filename,
    map: convFn(map),
  };
};

const asx = <T>(files: (MapReadSuccess<T> | MapReadFailed)[]): MapFiles<T> => {
  return {
    info: { success: true },
    validMaps: files.filter((f): f is MapReadSuccess<T> => f.map !== null),
    invalidMaps: files
      .filter((f): f is MapReadFailed => f.map === null)
      .map((f) => ({
        filename: f.filename,
        message: f.message,
        mapId: f.mapId,
        map: null,
        editingName: f.editingName,
      })),
  };
};
