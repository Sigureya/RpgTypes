import { Data_Map, Data_MapInfo, MapFileInfo } from '../../../rmmz';
import { MapFileNameWithExt, MapBatchReadResult, SingleMapReadFailure, MapReadErrorMessages } from './types';
export declare const readMapFileFromInfo: (info: Data_MapInfo, terms: MapReadErrorMessages, fn: (filename: MapFileNameWithExt) => Promise<string>, validate: (data: unknown) => data is Data_Map) => Promise<MapFileInfo<Data_Map> | SingleMapReadFailure>;
export declare const readMapFilesFromInfo: (infos: ReadonlyArray<Data_MapInfo>, terms: MapReadErrorMessages, readMapFile: (info: string) => Promise<string>, validateMapData: (data: unknown) => data is Data_Map) => Promise<MapBatchReadResult<Data_Map>>;
export declare const readMapFilesFromInfoEx: <T>(infos: ReadonlyArray<Data_MapInfo>, terms: MapReadErrorMessages, readMapFile: (info: MapFileNameWithExt) => Promise<string>, validateMapData: (data: unknown) => data is Data_Map, convFn: (data: MapFileInfo<Data_Map>) => T) => Promise<MapBatchReadResult<T>>;
