import { ParamArray, StatusParamObject } from './members';
import { Data_TraitContainer, Trait } from './trait';
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
export declare const calcEquipParamsArray: (equips: ReadonlyArray<Data_Equipment>) => ParamArray;
export declare const calcEquipParamsObject: (equips: ReadonlyArray<Data_Equipment>) => StatusParamObject;
