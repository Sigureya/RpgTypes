import type { EventCommandLike, GET_LOCATION_INFO } from "@RpgTypes/libs";

export type Command_GetRegionId = EventCommandLike<
  typeof GET_LOCATION_INFO,
  ParamArray_GetRegionId
>;

export type ParamArray_GetRegionId = [
  variableId: number,
  modeGetRegionId: 6,
  designation: 0 | 1,
  x: number,
  y: number,
];
