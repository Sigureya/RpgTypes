import { Data_NamedItem } from "./namedItem";
import { Learning, ParamArray, TraitContainer } from "./members";

export interface Data_Class extends Data_NamedItem, TraitContainer {
  params: ParamArray[];
  learnings: Learning[];
  expParams: number[];
}
