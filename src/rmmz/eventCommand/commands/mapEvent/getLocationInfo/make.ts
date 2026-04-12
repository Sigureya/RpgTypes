import { GET_LOCATION_INFO } from "@RpgTypes/libs/eventCommand";
import type {
  Command_GetEventIdXY,
  Command_GetEventIdXyDirect,
  Command_GetRegionId,
  Command_GetRegionIdDirect,
  Command_GetTerrainTag,
  Command_GetTerrainTagDirect,
  Command_GetTileId,
  Command_GetTileIdDirect,
  ParamObject_GetLocationInfo,
  ParamObject_GetTileId,
} from "./types";

export const makeCommandGetTerrainTag = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetTerrainTag => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: [param.variableId, 0, 1, param.x, param.y],
});

export const makeCommandGetTerrainTagDirect = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetTerrainTagDirect => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: [param.variableId, 0, 0, param.x, param.y],
});

export const makeCommandGetEventIdXY = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetEventIdXY => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: [param.variableId, 1, 1, param.x, param.y],
});

export const makeCommandGetEventIdXYDirect = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetEventIdXyDirect => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: [param.variableId, 1, 0, param.x, param.y],
});

export const makeCommandGetRegionId = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetRegionId => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: [param.variableId, 6, 1, param.x, param.y],
});

export const makeCommandGetRegionIdDirect = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetRegionIdDirect => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: [param.variableId, 6, 0, param.x, param.y],
});

export const makeCommandGetTileId = (
  param: ParamObject_GetTileId,
  indent: number = 0,
): Command_GetTileId => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: [
    param.variableId,
    LAYER_TABLE[param.layer] ?? 2,
    1,
    param.x,
    param.y,
  ],
});

export const makeCommandGetTileIdDirect = (
  param: ParamObject_GetTileId,
  indent: number = 0,
): Command_GetTileIdDirect => ({
  code: GET_LOCATION_INFO,
  indent,
  parameters: [
    param.variableId,
    LAYER_TABLE[param.layer] ?? 2,
    0,
    param.x,
    param.y,
  ],
});

const LAYER_TABLE = {
  1: 2,
  2: 3,
  3: 4,
  4: 5,
} as const;
