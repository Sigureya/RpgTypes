import type { Data_Map } from "@RpgTypes/rmmz/events";
import type { Encounter } from "./encounter";
import { selectEncounters } from "./encounter/encounter";
import { mapRegionId } from "./tiles";
import type { Map_EncounterSoucre } from "./types";

type MapLoopSource = Pick<Data_Map, "scrollType" | "width" | "height">;

export const mapIsLoopHorizontal = (
  map: Pick<Data_Map, "scrollType">,
): boolean => {
  return map.scrollType === 2 || map.scrollType === 3;
};

export const mapIsLoopVertical = (
  map: Pick<Data_Map, "scrollType">,
): boolean => {
  return map.scrollType === 1 || map.scrollType === 3;
};

export const mapRoundX = (map: MapLoopSource, x: number): number => {
  return mapIsLoopHorizontal(map) ? wrapCoordinate(x, map.width) : x;
};

export const mapRoundY = (map: MapLoopSource, y: number): number => {
  return mapIsLoopVertical(map) ? wrapCoordinate(y, map.height) : y;
};

export const mapXWithDirection = (x: number, direction: number): number => {
  return x + (direction === 6 ? 1 : direction === 4 ? -1 : 0);
};

export const mapYWithDirection = (y: number, direction: number): number => {
  return y + (direction === 2 ? 1 : direction === 8 ? -1 : 0);
};

export const mapRoundXWithDirection = (
  map: MapLoopSource,
  x: number,
  direction: number,
): number => {
  return mapRoundX(map, mapXWithDirection(x, direction));
};

export const mapRoundYWithDirection = (
  map: MapLoopSource,
  y: number,
  direction: number,
): number => {
  return mapRoundY(map, mapYWithDirection(y, direction));
};

export const mapDeltaX = (
  map: MapLoopSource,
  x1: number,
  x2: number,
): number => {
  const result = x1 - x2;
  if (mapIsLoopHorizontal(map) && Math.abs(result) > map.width / 2) {
    return result < 0 ? result + map.width : result - map.width;
  }
  return result;
};

export const mapDeltaY = (
  map: MapLoopSource,
  y1: number,
  y2: number,
): number => {
  const result = y1 - y2;
  if (mapIsLoopVertical(map) && Math.abs(result) > map.height / 2) {
    return result < 0 ? result + map.height : result - map.height;
  }
  return result;
};

export const mapDistance = (
  map: MapLoopSource,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number => {
  return Math.abs(mapDeltaX(map, x1, x2)) + Math.abs(mapDeltaY(map, y1, y2));
};

export const selectMapEncounters = (
  map: Map_EncounterSoucre,
  x: number,
  y: number,
  random: (max: number) => number,
): Encounter | null => {
  const regionId: number = mapRegionId(map, x, y);
  return selectEncounters(
    map.encounterList,
    (e) => {
      return e.regionSet.includes(regionId);
    },
    random,
  );
};

const wrapCoordinate = (value: number, size: number): number => {
  const mod = value % size;
  return mod >= 0 ? mod : mod + size;
};
