import { Data_NamedItem } from "./namedItem";
import { Learning, TraitContainer } from "./members";
import { ParamArray } from "./members/paramArray";

export interface Data_Class extends Data_NamedItem, TraitContainer {
  params: ParamArray[];
  learnings: Learning[];
  expParams: number[];
}
