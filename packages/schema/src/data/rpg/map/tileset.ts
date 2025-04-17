import type { Data_NamedItem } from "../main";

export interface Data_Tileset extends Data_NamedItem {
  note: string;
  flags: number[];
  mode: number;
  tilesetNames: string[];
}
