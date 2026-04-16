import type { TermsOfReadArrayData } from "./arrayData";
import type { TermsOfReadSystemData } from "./system";

export interface TermsOfReadAllData
  extends TermsOfReadArrayData, TermsOfReadSystemData {
  dataConvertError: string;
}
