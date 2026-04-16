import type * as Name from "./arrayData/constants/fileNames";
import type { FILENAME_SYSTEM } from "./system";

export type DataFileNames =
  | (typeof Name)[keyof typeof Name]
  | typeof FILENAME_SYSTEM;
