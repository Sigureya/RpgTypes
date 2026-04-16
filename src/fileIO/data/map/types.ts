import type { MapFileInfo } from "@RpgTypes/rmmz";

export interface MapInfoReadResult {
  message: string;
  filename: string;
  success: false;
}

export interface MapFiles<T> {
  info: MapInfoReadResult | { success: true };
  validMaps: MapFileInfo<T>[];
  invalidMaps: MapReadFailed[];
}

export interface MapInfoReadFailed {
  success: false;
  mapId: number;
  message: string;
  filename: string;
}

export interface MapReadSuccess<T> {
  map: T;
  filename: MapFileInfo["filename"];
  editingName: string;
}

export interface MapReadFailed {
  map: null;
  message: string;
  filename: string;
  editingName: string;
}

export interface MapReadTerms {
  jsonParseError: string;
  invalidStructure: string;
  fileNotFound: string;
}
