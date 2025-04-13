import { Data_Equipment } from './equipment';
import { ParamArray } from './members';
import { Trait } from './trait';
export interface Data_Armor extends Data_Equipment {
    name: string;
    id: number;
    description: string;
    iconIndex: number;
    price: number;
    params: ParamArray;
    traits: Trait[];
    note: string;
    etypeId: number;
}
