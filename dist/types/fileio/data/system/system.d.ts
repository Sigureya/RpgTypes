import { Data_SystemTexts } from '../../../rmmz';
import { FILENAME_SYSTEM } from './constants';
import { SystemDataErrorMessages, SystemDataReadHandler, ReadSystemResult } from './types';
export declare const readSystemDataTexts: (terms: SystemDataErrorMessages, fileReadFn: (filename: typeof FILENAME_SYSTEM) => Promise<string>, validateFn: (item: unknown) => item is Data_SystemTexts) => Promise<ReadSystemResult<Data_SystemTexts>>;
export declare const readSystemData: (terms: SystemDataErrorMessages, fileReadFn: (filename: typeof FILENAME_SYSTEM) => Promise<string>, handlers: SystemDataReadHandler) => Promise<ReadSystemResult<Data_SystemTexts>>;
