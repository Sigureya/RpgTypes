import { Data_Map, RpgDataBundle } from '../../rmmz';
import { MapBatchReadResult, MapFileNameWithExt } from './map';
import { RawGameData } from './resultType';
import { DataFileNames } from './types';
export declare const writeSystemData: (system: RpgDataBundle["system"], fn: (filename: DataFileNames | MapFileNameWithExt, json: string) => Promise<void>) => Promise<void>;
export declare const writeBundleData: (bundle: RpgDataBundle, map: MapBatchReadResult<Data_Map>, fn: (filename: DataFileNames | MapFileNameWithExt, json: string) => Promise<void>) => Promise<void>;
export declare const writeRawGameData: (data: RawGameData, fileWriteFn: (filename: DataFileNames | MapFileNameWithExt, json: string) => Promise<void>) => Promise<void>;
