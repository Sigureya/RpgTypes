import { GET_LOCATION_INFO } from "@RpgTypes/libs/eventCommand";
import type {
  Command_GetLocationInfo,
  ParamArray_GetLocationInfo,
  ParamObject_GetLocationInfo,
  ParamArray_GetLocationInfoV,
  ParamObject_GetTileId,
} from "./types";

export const makeCommandGetTerrainTag = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetLocationInfo => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: toArrayGetLocationInfo(param, 0, 1),
});

export const makeCommandGetEventIdXY = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetLocationInfo => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: toArrayGetLocationInfo(param, 1, 1),
});

export const makeCommandGetRegionId = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetLocationInfo => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: toArrayGetLocationInfo(param, 6, 1),
});

export const makeCommandGetTileId = (
  param: ParamObject_GetTileId,
  indent: number = 0,
): Command_GetLocationInfo => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: [param.variableId, param.layer + 1, 0, param.x, param.y],
});

const toArrayGetLocationInfo = (
  param: Partial<ParamObject_GetLocationInfo>,
  mode: number,
  designation: 0 | 1,
): ParamArray_GetLocationInfo | ParamArray_GetLocationInfoV => [
  param.variableId ?? 0,
  mode,
  designation,
  param.x ?? 0,
  param.y ?? 0,
];
