import type { Data_Map } from "./map";

export interface MapFileInfo<Data = Data_Map> {
  map: Data;
  filename: `Map${string}`;
  editingName: string;
}
