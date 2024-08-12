import type { Data_NamedItem, Data_TraitContainer } from "./bases";
import type { Learning, ParamArray } from "./members";

export interface Data_Class extends Data_NamedItem, Data_TraitContainer {
  params: ParamArray;
  learnings: Learning[];
  expParams: number[];
}
