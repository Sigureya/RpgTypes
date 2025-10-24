import { PrimitiveParam } from '../../../../rmmz/plugin';
import { JSONValue } from './jsonTypes';
export interface PluginParamExtractedValue {
    name: string;
    value: JSONValue;
    param: PrimitiveParam;
}
