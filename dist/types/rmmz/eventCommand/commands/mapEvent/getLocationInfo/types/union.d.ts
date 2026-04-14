import { Command_GetEventIdXY, Command_GetEventIdXyDirect } from './eventXY';
import { Command_GetRegionId, Command_GetRegionIdDirect } from './getRegionId';
import { Command_GetTileId, Command_GetTileIdDirect } from './getTileId';
import { Command_GetTerrainTag, Command_GetTerrainTagDirect } from './getTrarainTag';
export type Command_GetLocationInfo = Command_GetLocationInfoV | Command_GetLocationInfoDirect;
export type Command_GetLocationInfoDirect = Command_GetEventIdXyDirect | Command_GetRegionIdDirect | Command_GetTerrainTagDirect | Command_GetTileIdDirect;
export type Command_GetLocationInfoV = Command_GetEventIdXY | Command_GetRegionId | Command_GetTerrainTag | Command_GetTileId;
export type ParamArray_GetLocationInfo = Command_GetLocationInfo["parameters"];
