import type { ParamArray } from "./members";
import type { Trait } from "./trait";
import type { Data_TraitContainer } from "./traitContatiner";

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
