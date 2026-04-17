import { makeMapName } from "@RpgTypes/rmmz";
import type { Data_Map, Data_MapInfo } from "@RpgTypes/rmmz";
import type { MapFileInfo } from "@RpgTypes/rmmz";
import type {
  MapFileNameWithExt,
  MapBatchReadResult,
  SingleMapReadFailure,
  MapReadErrorMessages,
} from "./types";

export const readMapFileFromInfo = (
  info: Data_MapInfo,
  terms: MapReadErrorMessages,
  fn: (filename: MapFileNameWithExt) => Promise<string>,
  validate: (data: unknown) => data is Data_Map,
): Promise<MapFileInfo<Data_Map> | SingleMapReadFailure> => {
  const filename = toMapFileNameWithExt(info);
  return fn(filename)
    .then((json) => parseMapJson(json, info, terms, validate))
    .catch(
      (): SingleMapReadFailure => makeMapReadError(info, terms.fileNotFound),
    );
};

const parseMapJson = <T>(
  json: string,
  info: Data_MapInfo,
  terms: MapReadErrorMessages,
  validate: (data: unknown) => data is T,
): MapFileInfo<T> | SingleMapReadFailure => {
  try {
    const data = JSON.parse(json);
    if (!validate(data)) {
      return makeMapReadError(info, terms.invalidStructure);
    }
    const result: MapFileInfo<T> = {
      map: data,
      filename: toMapFileName(info),
      editingName: info.name,
    };
    return result;
  } catch {
    return makeMapReadError(info, terms.jsonParseError);
  }
};

const toMapFileNameWithExt = (info: Data_MapInfo): MapFileNameWithExt => {
  return `Map${makeMapName(info.id)}.json`;
};

const toMapFileName = (info: Data_MapInfo) =>
  `Map${makeMapName(info.id)}` as const;

const makeMapReadError = (
  info: Data_MapInfo,
  message: string,
): SingleMapReadFailure => ({
  map: null,
  message,
  filename: toMapFileName(info),
  editingName: info.name,
});

export const readMapFilesFromInfo = (
  infos: ReadonlyArray<Data_MapInfo>,
  terms: MapReadErrorMessages,
  readMapFile: (info: string) => Promise<string>,
  validateMapData: (data: unknown) => data is Data_Map,
): Promise<MapBatchReadResult<Data_Map>> => {
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
  terms: MapReadErrorMessages,
  readMapFile: (info: MapFileNameWithExt) => Promise<string>,
  validateMapData: (data: unknown) => data is Data_Map,
  convFn: (data: MapFileInfo<Data_Map>) => T,
): Promise<MapBatchReadResult<T>> => {
  const maps = await Promise.all(
    infos.map(async (info): Promise<SingleMapReadFailure | MapFileInfo<T>> => {
      return readAndConvertMapFile(
        info,
        terms,
        readMapFile,
        convFn,
        validateMapData,
      );
    }),
  );
  return buildMapFilesResult(maps);
};

const readAndConvertMapFile = async <T>(
  info: Data_MapInfo,
  terms: MapReadErrorMessages,
  readMapFile: (info: MapFileNameWithExt) => Promise<string>,
  convFn: (data: MapFileInfo<Data_Map>) => T,
  validateMapData: (data: unknown) => data is Data_Map,
): Promise<SingleMapReadFailure | MapFileInfo<T>> => {
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

const buildMapFilesResult = <T>(
  files: (MapFileInfo<T> | SingleMapReadFailure)[],
): MapBatchReadResult<T> => {
  return {
    info: { success: true },
    validMaps: files.filter((f): f is MapFileInfo<T> => f.map !== null),
    invalidMaps: files
      .filter((f): f is SingleMapReadFailure => f.map === null)
      .map(
        (f): SingleMapReadFailure => ({
          filename: f.filename,
          message: f.message,
          map: null,
          editingName: f.editingName,
        }),
      ),
  };
};
