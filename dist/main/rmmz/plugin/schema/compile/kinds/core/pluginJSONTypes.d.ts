import { PluginDependencies } from './parse/dependencies';
import { PrimitiveParam } from './primitiveParams';
export interface PluginJSON {
    target: string;
    meta: Record<string, string>;
    commands: Record<string, PluginCommandBody>;
    params: Record<string, PrimitiveParam>;
    dependencies?: PluginDependencies;
}
export interface PluginCommandBody {
    desc?: string;
    text?: string;
    args: {
        [key: string]: PrimitiveParam;
    };
}
