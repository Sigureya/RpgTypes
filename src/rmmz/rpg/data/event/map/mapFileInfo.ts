import type { Data_MapUnknown } from "./types";

export interface MapFileInfo<Data = Data_MapUnknown> {
  map: Data;
  filename: `Map${string}`;
  editingName: string;
}
