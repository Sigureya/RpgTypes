import type { ParamArray } from "../members";
import type { Data_TraitContainer, Trait } from "../trait";
import type { Learning } from "./leaning";

export interface Data_Class extends Data_TraitContainer {
  name: string;
  id: number;
  traits: Trait[];
  note: string;

  params: ParamArray;
  learnings: Learning[];
  expParams: number[];
}
