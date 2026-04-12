import type { EventCommandLike, GET_LOCATION_INFO } from "@RpgTypes/libs";

export interface ParamObject_GetTileId {
  variableId: number;
  layer: 1 | 2 | 3 | 4;
  x: number;
  y: number;
}

export type TileLayer = 2 | 3 | 4 | 5;

export type Command_GetTileId = EventCommandLike<
  typeof GET_LOCATION_INFO,
  ParamArray_GetTileId
>;

export type ParamArray_GetTileId = [
  variableId: number,
  modeTile: TileLayer,
  designation: 0 | 1,
  x: number,
  y: number,
];
