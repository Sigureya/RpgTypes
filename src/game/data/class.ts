import { Data_NamedItem } from "./item/namedItem";
import { ParamArray } from "./paramArray";

export interface Data_Class extends Data_NamedItem {
  params: ParamArray[];
}
