import { ParamArray } from "./paramArray";
import { Data_NamedItem } from "./namedItem";
import { TraitContainer } from "./members/trait";

export interface Data_Equipment extends Data_NamedItem, TraitContainer {
  deescription: string;
  price: number;
  params: ParamArray;
}
export interface Data_Armor extends Data_Equipment {}
export interface Data_Weapon extends Data_Equipment {}
