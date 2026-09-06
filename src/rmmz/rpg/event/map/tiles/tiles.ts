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

/**
 * レイヤーを見る順。上から下へ。
 * 毎フレームの通行判定で使うので、呼ぶたびに配列を作らないよう定数にする。
 * 走査だけなら mapLayeredTiles を呼ばず、この定数を直接回す。
 */
export const LAYER_Z_ORDER = [3, 2, 1, 0] as const;

export const mapLayeredTiles = (
  map: Data_MapTiles,
  x: number,
  y: number,
): number[] => {
  return LAYER_Z_ORDER.map((z) => mapTileId(map, x, y, z));
};

export const mapAutotileType = (
  map: Data_MapTiles,
  x: number,
  y: number,
  z: number,
): number => {
  const tileId = mapTileId(map, x, y, z);
  return tileId >= 2048 ? Math.floor((tileId - 2048) / 48) : -1;
};
