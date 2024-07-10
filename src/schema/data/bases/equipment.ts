import { ParamArray } from "../members";
import { Data_NamedItem } from "./namedItem";
import { Data_TraitContainer } from "./trait";

export interface Data_Equipment extends Data_NamedItem, Data_TraitContainer {
  deescription: string;
  price: number;
  params: ParamArray;
}
