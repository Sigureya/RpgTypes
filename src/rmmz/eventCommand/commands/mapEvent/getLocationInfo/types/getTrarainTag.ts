import type { EventCommandLike, GET_LOCATION_INFO } from "@RpgTypes/libs";

export type Command_GetTerrainTag = EventCommandLike<
  typeof GET_LOCATION_INFO,
  ParamArray_GetTerrainTag
>;

export type ParamArray_GetTerrainTag = [
  variableId: number,
  modeTerrainTag: 0,
  designation: 0 | 1,
  x: number,
  y: number,
];
