import type {
  ExtraParamLabels,
  RegularParamLabels,
  SpecialParamLabels,
} from "./data";
import type { GlobalLabel } from "./globalLables";

export interface EditorLabels {
  global: GlobalLabel;
  params: {
    regurelar: RegularParamLabels;
    extra: ExtraParamLabels;
    special: SpecialParamLabels;
  };
}
