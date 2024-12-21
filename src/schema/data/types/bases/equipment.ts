import type { ParamArray } from "../members";
import type { Data_NamedItem } from "./namedItem";
import type { Data_TraitContainer, Trait } from "./trait";

export interface Data_Equipment extends Data_NamedItem, Data_TraitContainer {
  name: string;
  id: number;
  description: string;
  price: number;
  params: ParamArray;
  traits: Trait[];
  note: string;
}
