import { PrimitiveParam } from '../../../rmmz/plugin';
import { PluginJSON } from '../../../rmmz/plugin/core/pluginJSONTypes';
import { FilteredPluginSchema } from './filtedTypes';
export declare const filterPluginSchemaByParam: <T extends PrimitiveParam>(p: PluginJSON, fn: (param: PrimitiveParam) => param is T) => FilteredPluginSchema<T>;
