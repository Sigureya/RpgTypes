import { ParamArray } from "./members";
import { Data_NamedItem } from "./bases/namedItem";
import { Data_TraitContainer } from "./bases";

export interface Data_Equipment extends Data_NamedItem, Data_TraitContainer {
  deescription: string;
  price: number;
  params: ParamArray;
}
export interface Data_Armor extends Data_Equipment {}
export interface Data_Weapon extends Data_Equipment {}
