import type { Data_Map, Data_MapInfo } from "@RpgTypes/rmmz";
import { makeMapName } from "@RpgTypes/rmmz";
import type {
  MapFileNameWithExt,
  MapFiles,
  MapReadFailed,
  MapReadSuccess,
  MapReadTerms,
} from "./types";

export const readMapFileFromInfo = (
  info: Data_MapInfo,
  terms: MapReadTerms,
  fn: (filename: MapFileNameWithExt) => Promise<string>,
  validate: (data: unknown) => data is Data_Map,
): Promise<MapReadSuccess<Data_Map> | MapReadFailed> => {
  const filename = mapNameWithExt(info);
  return fn(filename)
    .then((json) => readMapThen(json, info, terms, validate))
    .catch((): MapReadFailed => makeError(info, terms.fileNotFound));
};

const readMapThen = <T>(
  json: string,
  info: Data_MapInfo,
  terms: MapReadTerms,
  validate: (data: unknown) => data is T,
): MapReadSuccess<T> | MapReadFailed => {
  try {
    const data = JSON.parse(json);
    if (!validate(data)) {
      return makeError(info, terms.invalidStructure);
    }
    const s: MapReadSuccess<T> = {
      map: data,
      filename: makeMapNameXX(info),
      editingName: info.name,
    };
    return s;
  } catch {
    return makeError(info, terms.jsonParseError);
  }
};

const mapNameWithExt = (info: Data_MapInfo): MapFileNameWithExt => {
  return `Map${makeMapName(info.id)}.json`;
};

const makeMapNameXX = (info: Data_MapInfo) =>
  `Map${makeMapName(info.id)}` as const;

const makeError = (info: Data_MapInfo, message: string): MapReadFailed => ({
  map: null,
  message,
  filename: makeMapNameXX(info),
  editingName: info.name,
});

export const readMapFilesFromInfo = (
  infos: ReadonlyArray<Data_MapInfo>,
  terms: MapReadTerms,
  readMapFile: (info: string) => Promise<string>,
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
  readMapFile: (info: MapFileNameWithExt) => Promise<string>,
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
  readMapFile: (info: MapFileNameWithExt) => Promise<string>,
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
      .map(
        (f): MapReadFailed => ({
          filename: f.filename,
          message: f.message,
          map: null,
          editingName: f.editingName,
        }),
      ),
  };
};
