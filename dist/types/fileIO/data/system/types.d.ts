import { Data_System, Data_SystemMV } from '../../../rmmz';
export interface SystemDataReadHandler {
    validateSystemMz: (item: unknown) => item is Data_System;
    validateSystemMv?: (item: unknown) => item is Data_SystemMV;
}
export interface SystemDataErrorMessages {
    jsonParseError: string;
    invalidStructure: string;
    fileNotFound: string;
    mvAsMz: string;
    validateFunctionError: string;
}
export interface ReadSystemResult<T = Data_System> {
    system: T | null;
    message: string;
}
