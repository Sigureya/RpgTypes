import { PrimitiveParam } from './schema/compile/kinds';
import { PrimitiveStructSchema } from './schema/compile/kinds/compileFlatStruct';
export declare const pluginSourceToJSON: (text: string) => import('./schema/compile/kinds/core/pluginJSONTypes').PluginJSON;
export declare const structToJSONSchema: <T extends object>(params: Record<keyof T, PrimitiveParam>) => PrimitiveStructSchema<T>;
