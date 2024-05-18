import { Data_NamedItem } from "./item/namedItem";
import { ParamArray } from "./aaparamArray";

export interface Data_Class extends Data_NamedItem {
  params: ParamArray[];
}
