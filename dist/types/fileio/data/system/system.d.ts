import { FILENAME_SYSTEM } from './constants';
import { SystemDataErrorMessages, SystemDataReadHandler, ReadSystemResult } from './types';
export declare const readSystemData: (terms: SystemDataErrorMessages, fileReadFn: (filename: typeof FILENAME_SYSTEM) => Promise<string>, handlers: SystemDataReadHandler) => Promise<ReadSystemResult>;
