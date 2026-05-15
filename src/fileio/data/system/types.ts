import type { Data_System, Data_SystemMV } from "@RpgTypes/rmmz";
import type { FILENAME_SYSTEM } from "./constants";

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

export interface SystemDataFileEntry {
  filename: typeof FILENAME_SYSTEM;
  data: Data_System;
}
