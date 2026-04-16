import { Data_Map, Data_MapInfo } from '../../../rmmz';
import { MapFileNameWithExt, MapFiles, MapReadFailed, MapReadSuccess, MapReadTerms } from './types';
export declare const readMapFileFromInfo: (info: Data_MapInfo, terms: MapReadTerms, fn: (filename: MapFileNameWithExt) => Promise<string>, validate: (data: unknown) => data is Data_Map) => Promise<MapReadSuccess<Data_Map> | MapReadFailed>;
export declare const readMapFilesFromInfo: (infos: ReadonlyArray<Data_MapInfo>, terms: MapReadTerms, readMapFile: (info: string) => Promise<string>, validateMapData: (data: unknown) => data is Data_Map) => Promise<MapFiles<Data_Map>>;
export declare const readMapFilesFromInfoEx: <T>(infos: ReadonlyArray<Data_MapInfo>, terms: MapReadTerms, readMapFile: (info: MapFileNameWithExt) => Promise<string>, validateMapData: (data: unknown) => data is Data_Map, convFn: (data: MapReadSuccess<Data_Map>) => T) => Promise<MapFiles<T>>;
