import { SystemDataErrorMessages, SystemDataReadHandler, ReadSystemResult } from './types';
export declare const FILENAME_SYSTEM = "System.json";
export declare const readSystemData: (terms: SystemDataErrorMessages, fileReadFn: (filename: typeof FILENAME_SYSTEM) => Promise<string>, handlers: SystemDataReadHandler) => Promise<ReadSystemResult>;
