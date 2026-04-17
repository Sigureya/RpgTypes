import type { ArrayDataErrorMessages } from "./arrayData";
import type { TermsOfReadSystemData } from "./system";

export interface ReadAllDataErrorMessages
  extends ArrayDataErrorMessages, TermsOfReadSystemData {
  dataConvertError: string;
}
