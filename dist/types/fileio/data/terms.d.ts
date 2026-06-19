import { ArrayDataErrorMessages } from './arrayData';
import { SystemDataErrorMessages } from './system';
export interface ReadAllDataErrorMessages extends ArrayDataErrorMessages, SystemDataErrorMessages {
    dataConvertError: string;
}
