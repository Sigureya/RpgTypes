import { ParamArray } from './members';
import { Trait } from './trait';
import { Data_TraitContainer } from './traitContainer';
export interface Data_Equipment extends Data_TraitContainer {
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
