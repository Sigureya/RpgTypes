import type { MapFileInfo } from "@RpgTypes/rmmz";

export type MapFileNameWithExt = `Map${string}.json`;

export interface MapInfoReadResult {
  message: string;
  filename: string;
  success: false;
}

export interface MapBatchReadResult<T> {
  info: MapInfoReadResult | { success: true };
  validMaps: MapFileInfo<T>[];
  invalidMaps: SingleMapReadFailure[];
}

export interface SingleMapReadFailure {
  map: null;
  message: string;
  filename: string;
  editingName: string;
}

export interface MapReadErrorMessages {
  jsonParseError: string;
  invalidStructure: string;
  fileNotFound: string;
}
