import { MainDataIdentifiedItems, MainDataFileNames } from './types';
export declare const writeMainData: (data: MainDataIdentifiedItems, fileWriteFn: (filename: MainDataFileNames, json: string) => Promise<void>) => Promise<void[]>;
