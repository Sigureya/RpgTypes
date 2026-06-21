import { MapFileInfo } from '../../../rmmz';
import { MapFileNameWithExt } from './types';
export declare const writeMapData: <T>(map: MapFileInfo<T>, fileWriteFn: (filename: MapFileNameWithExt, json: string) => Promise<void>) => Promise<void>;
export declare const writeMapFiles: <T>(maps: readonly MapFileInfo<T>[], fileWriteFn: (filename: MapFileNameWithExt, json: string) => Promise<void>) => Promise<void[]>;
