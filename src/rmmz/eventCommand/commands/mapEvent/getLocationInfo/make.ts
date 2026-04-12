import { GET_LOCATION_INFO } from "@RpgTypes/libs/eventCommand";
import type { Command_GetEventIdXY } from "./types/eventXY";
import type { ParamObject_GetLocationInfo } from "./types/getLocation";
import type { Command_GetRegionId } from "./types/getRegionId";
import type {
  Command_GetTileId,
  ParamObject_GetTileId,
} from "./types/getTileId";
import type { Command_GetTerrainTag } from "./types/getTrarainTag";

export const makeCommandGetTerrainTag = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetTerrainTag => ({
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
  parameters: [param.variableId, 1, 0, param.x, param.y],
});

export const makeCommandGetRegionId = (
  param: ParamObject_GetLocationInfo,
  indent: number = 0,
): Command_GetRegionId => ({
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
