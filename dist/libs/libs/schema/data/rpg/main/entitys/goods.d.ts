import { Data_NamedItem } from './namedItem';
export interface Data_Goods extends Data_NamedItem {
    name: string;
    id: number;
    price: number;
    iconIndex: number;
}
