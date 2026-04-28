import type { TestDataSourceWithNote } from "@RpgTypes/libs";
import type { MainDataFileNames } from "./arrayData";
import type { FILENAME_SYSTEM } from "./system";

export type DataFileNames = MainDataFileNames | typeof FILENAME_SYSTEM;

export interface DataReadErrorItem {
  fileName: string;
  error: string;
}
export interface DataReadErrors {
  main: DataReadErrorItem[];
  map: DataReadErrorItem[];
}

export interface TestRawDataSource extends TestDataSourceWithNote {
  message: string;
}
