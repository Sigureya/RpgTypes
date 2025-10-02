import { FilteredPluginSchema } from './filtedTypes';
import { PrimitiveParam } from './kinds';
import { PluginJSON } from './kinds/core/pluginJSONTypes';
export declare const filterPluginSchemaByParam: <T extends PrimitiveParam>(p: PluginJSON, fn: (param: PrimitiveParam) => param is T) => FilteredPluginSchema<T>;
