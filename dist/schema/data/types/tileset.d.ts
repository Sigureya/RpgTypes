import type { Data_NamedItem } from "./bases";
export interface Data_Tileset extends Data_NamedItem {
    note: string;
    flags: number[];
    mode: number;
    tilesetNames: string[];
}
