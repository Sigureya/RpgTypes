import type { Data_MapTiles } from "./types";

export const isValidMapPosition = (
  map: Data_MapTiles,
  x: number,
  y: number,
): boolean => {
  return x >= 0 && y >= 0 && x < map.width && y < map.height;
};

export const mapTileId = (
  map: Data_MapTiles,
  x: number,
  y: number,
  z: number,
): number => {
  const width = map.width;
  const height = map.height;
  return map.data[(z * height + y) * width + x] || 0;
};

export const mapRegionId = (
  map: Data_MapTiles,
  x: number,
  y: number,
): number => {
  return isValidMapPosition(map, x, y) ? mapTileId(map, x, y, 5) : 0;
};
