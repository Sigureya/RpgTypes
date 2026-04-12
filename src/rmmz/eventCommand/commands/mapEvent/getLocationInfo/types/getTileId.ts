import type { EventCommandLike, GET_LOCATION_INFO } from "@RpgTypes/libs";
import type { ParamObject_GetLocationInfo } from "./getLocation";

export interface ParamObject_GetTileId extends ParamObject_GetLocationInfo {
  variableId: number;
  layer: 1 | 2 | 3 | 4;
  x: number;
  y: number;
}

export type TileLayer = 2 | 3 | 4 | 5;

export interface Command_GetTileId extends EventCommandLike<
  typeof GET_LOCATION_INFO
> {
  parameters: ParamArray_GetTileId;
}

export interface Command_GetTileIdDirect extends EventCommandLike<
  typeof GET_LOCATION_INFO
> {
  parameters: ParamArray_GetTileIdDirect;
}

export type ParamArray_GetTileId = [
  variableId: number,
  modeTile: TileLayer,
  designationVariable: 1,
  x: number,
  y: number,
];

export type ParamArray_GetTileIdDirect = [
  variableId: number,
  modeTile: TileLayer,
  designationDirect: 0,
  x: number,
  y: number,
];
