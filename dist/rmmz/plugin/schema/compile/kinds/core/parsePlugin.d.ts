import { PluginCommandBody } from './pluginEntriesEx';
import { PrimitiveParam } from './primitiveParams';
export interface PluginParam {
    name: string;
    attr: PrimitiveParam;
}
export declare const parsePlugin: (text: string) => {
    meta: Record<string, string>;
    params: {
        [key: string]: PrimitiveParam;
    };
    commands: Record<string, PluginCommandBody>;
};
