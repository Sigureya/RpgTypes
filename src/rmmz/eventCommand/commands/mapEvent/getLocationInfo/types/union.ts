import type { Command_GetEventIdXY } from "./eventXY";
import type { Command_GetRegionId } from "./getRegionId";
import type { Command_GetTileId } from "./getTileId";
import type { Command_GetTerrainTag } from "./getTrarainTag";

export type Command_GetLocationInfo =
  | Command_GetEventIdXY
  | Command_GetRegionId
  | Command_GetTerrainTag
  | Command_GetTileId;

export type ParamArray_GetLocationInfo = Command_GetLocationInfo["parameters"];
