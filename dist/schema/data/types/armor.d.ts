import type { Data_Equipment, Trait } from "./bases";
import type { ParamArray } from "./members";
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
