import { Data_NamedItem } from '../../../libs';
export interface Data_Tileset extends Data_NamedItem {
    note: string;
    flags: number[];
    mode: number;
    tilesetNames: string[];
}
