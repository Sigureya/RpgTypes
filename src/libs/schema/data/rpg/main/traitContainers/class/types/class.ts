import type { Data_TraitContainer, ParamArray, Trait } from "src/libs";
import type { Learning } from "./leaning";

export interface Data_Class extends Data_TraitContainer {
  name: string;
  id: number;
  note: string;

  expParams: number[];
  params: ParamArray;
  learnings: Learning[];
  traits: Trait[];
}
