import type { Data_System, Data_SystemMV } from "@RpgTypes/rmmz";

export interface HandlerOfReadSystemData {
  validateSystemMz: (item: unknown) => item is Data_System;
  validateSystemMv?: (item: unknown) => item is Data_SystemMV;
}

export interface TermsOfReadSystemData {
  jsonParseError: string;
  invalidStructure: string;
  fileNotFound: string;
  mvAsMz: string;
  validateFunctionError: string;
}

export interface ReadSystemResult {
  system: Data_System | null;
  message: string;
}
export interface ReadSystemResultEx<T> {
  system: T | null;
  message: string;
}
