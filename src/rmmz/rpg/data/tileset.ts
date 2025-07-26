import type { Data_NamedItem } from "@RpgTypes/libs";

export interface Data_Tileset extends Data_NamedItem {
  note: string;
  flags: number[];
  mode: number;
  tilesetNames: string[];
}
