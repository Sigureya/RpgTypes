import type { MapFileInfo } from "@RpgTypes/rmmz";
import type { MapFileNameWithExt } from "./types";

const toMapFileNameWithExt = (
  filename: MapFileInfo["filename"],
): MapFileNameWithExt => {
  return `${filename}.json`;
};

export const writeMapData = <T>(
  map: MapFileInfo<T>,
  fileWriteFn: (filename: MapFileNameWithExt, json: string) => Promise<void>,
): Promise<void> => {
  return fileWriteFn(
    toMapFileNameWithExt(map.filename),
    JSON.stringify(map.map),
  );
};

export const writeMapFiles = <T>(
  maps: readonly MapFileInfo<T>[],
  fileWriteFn: (filename: MapFileNameWithExt, json: string) => Promise<void>,
): Promise<void[]> => {
  return Promise.all(maps.map((map) => writeMapData(map, fileWriteFn)));
};
