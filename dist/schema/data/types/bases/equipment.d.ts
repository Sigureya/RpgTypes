import type { Data_TraitContainer, Trait } from "./trait";
import type { Data_Goods } from "./goods";
import type { ParamArray } from "./members";
export interface Data_Equipment extends Data_Goods, Data_TraitContainer {
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
