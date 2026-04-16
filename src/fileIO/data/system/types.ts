import type { Data_System, Data_SystemMV } from "@RpgTypes/rmmz";

export interface HandlerOfReadSystemData {
  validateMz: (item: unknown) => item is Data_System;
  validateMv: (item: unknown) => item is Data_SystemMV;
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
