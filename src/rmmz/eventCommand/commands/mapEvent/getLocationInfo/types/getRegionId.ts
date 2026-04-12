import type { EventCommandLike, GET_LOCATION_INFO } from "@RpgTypes/libs";

export interface Command_GetRegionId extends EventCommandLike<
  typeof GET_LOCATION_INFO
> {
  parameters: ParamArray_GetRegionId;
}

export interface Command_GetRegionIdDirect extends EventCommandLike<
  typeof GET_LOCATION_INFO
> {
  parameters: ParamArray_GetRegionIdDirect;
}

export type ParamArray_GetRegionId = [
  variableId: number,
  modeGetRegionId: 6,
  designationVariable: 1,
  x: number,
  y: number,
];

export type ParamArray_GetRegionIdDirect = [
  variableId: number,
  modeGetRegionId: 6,
  designationDirect: 0,
  x: number,
  y: number,
];
