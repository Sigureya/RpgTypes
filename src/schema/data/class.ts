import { Data_NamedItem, Data_TraitContainer } from "./bases";
import { Learning, ParamArray } from "./members";

export interface Data_Class extends Data_NamedItem, Data_TraitContainer {
  params: ParamArray;
  learnings: Learning[];
  expParams: number[];
}
