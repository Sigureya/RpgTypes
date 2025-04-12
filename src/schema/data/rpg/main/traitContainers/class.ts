import type { ParamArray, Learning } from "./members";
import type { Trait } from "./trait";
import type { Data_TraitContainer } from "./traitContainer";

export interface Data_Class extends Data_TraitContainer {
  name: string;
  id: number;
  traits: Trait[];
  note: string;

  params: ParamArray;
  learnings: Learning[];
  expParams: number[];
}
