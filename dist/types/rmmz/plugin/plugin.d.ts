import { PrimitiveStructSchema } from '../../features/pluguinJSONSchema/compileFlatStruct';
import { PrimitiveParam } from './schema/compile/kinds';
import { PluginJSON } from './schema/compile/kinds/core/pluginJSONTypes';
export declare const pluginSourceToJSON: (text: string) => PluginJSON;
export declare const structToJSONSchema: <T extends object>(params: Record<keyof T, PrimitiveParam>) => PrimitiveStructSchema<T>;
