import { TermsOfReadArrayData } from './arrayData';
import { TermsOfReadSystemData } from './system';
export interface TermsOfReadAllData extends TermsOfReadArrayData, TermsOfReadSystemData {
    dataConvertError: string;
}
