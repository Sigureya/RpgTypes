import type * as Name from "./arrayData/constants/fileNames";
import type { MapFileNameWithExt } from "./map";
import type { FILENAME_SYSTEM } from "./system";

export type DataFileNames =
  | MapFileNameWithExt
  | (typeof Name)[keyof typeof Name]
  | typeof FILENAME_SYSTEM;
