import type { ArrayDataErrorMessages } from "./arrayData";
import type { SystemDataErrorMessages } from "./system";

export interface ReadAllDataErrorMessages
  extends ArrayDataErrorMessages, SystemDataErrorMessages {
  dataConvertError: string;
}
