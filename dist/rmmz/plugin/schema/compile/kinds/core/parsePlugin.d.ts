import { PluginJSON } from './pluginJSONTypes';
import { PrimitiveParam } from './primitiveParams';
export interface PluginParam {
    name: string;
    attr: PrimitiveParam;
}
export declare const parsePlugin: (text: string) => PluginJSON;
