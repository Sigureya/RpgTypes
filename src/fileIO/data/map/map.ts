import type { Data_Map, Data_MapInfo } from "@RpgTypes/rmmz";
import { makeMapName } from "@RpgTypes/rmmz";
import type { MapReadFailed, MapReadSuccess, MapReadTerms } from "./types";

export const readMapFileFromInfo = (
  info: Data_MapInfo,
  terms: MapReadTerms,
  fn: (info: Data_MapInfo) => Promise<string>,
  validate: (data: unknown) => data is Data_Map,
): Promise<MapReadSuccess<Data_Map> | MapReadFailed> => {
  return fn(info)
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

const makeMapNameXX = (info: Data_MapInfo) =>
  `Map${makeMapName(info.id)}` as const;

const makeError = (info: Data_MapInfo, message: string): MapReadFailed => ({
  map: null,
  message,
  filename: makeMapNameXX(info),
  editingName: info.name,
  mapId: info.id,
});
