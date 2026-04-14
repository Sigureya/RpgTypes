import { Command_GetEventIdXY, Command_GetEventIdXyDirect, Command_GetRegionId, Command_GetRegionIdDirect, Command_GetTerrainTag, Command_GetTerrainTagDirect, Command_GetTileId, Command_GetTileIdDirect, ParamObject_GetLocationInfo, ParamObject_GetTileId } from './types';
export declare const makeCommandGetTerrainTag: (param: ParamObject_GetLocationInfo, indent?: number) => Command_GetTerrainTag;
export declare const makeCommandGetTerrainTagDirect: (param: ParamObject_GetLocationInfo, indent?: number) => Command_GetTerrainTagDirect;
export declare const makeCommandGetEventIdXY: (param: ParamObject_GetLocationInfo, indent?: number) => Command_GetEventIdXY;
export declare const makeCommandGetEventIdXYDirect: (param: ParamObject_GetLocationInfo, indent?: number) => Command_GetEventIdXyDirect;
export declare const makeCommandGetRegionId: (param: ParamObject_GetLocationInfo, indent?: number) => Command_GetRegionId;
export declare const makeCommandGetRegionIdDirect: (param: ParamObject_GetLocationInfo, indent?: number) => Command_GetRegionIdDirect;
export declare const makeCommandGetTileId: (param: ParamObject_GetTileId, indent?: number) => Command_GetTileId;
export declare const makeCommandGetTileIdDirect: (param: ParamObject_GetTileId, indent?: number) => Command_GetTileIdDirect;
