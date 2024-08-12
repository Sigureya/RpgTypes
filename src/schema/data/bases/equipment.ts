import type { ParamArray } from "../members";
import type { Data_NamedItem } from "./namedItem";
import type { Data_TraitContainer } from "./trait";

export interface Data_Equipment extends Data_NamedItem, Data_TraitContainer {
  description: string;
  price: number;
  params: ParamArray;
}
