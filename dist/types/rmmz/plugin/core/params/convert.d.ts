import { PluginCommandSchemaArrayEx3, PluginCommandTypeEx, PluginParam, PluginParamEx, PluginStructSchemaArray, PluginStructType, PrimitiveParam, ObjectParamsV5 } from './types';
export declare function toObjectPluginParams(params: ReadonlyArray<PluginParam>): Record<string, PrimitiveParam>;
export declare const toArrayPluginParam: <T extends PrimitiveParam, K extends string>(params: ObjectParamsV5<K & string, T>) => PluginParamEx<T, string & K>[];
export declare const convertStructSchema: <T extends PluginStructSchemaArray>(schema: T) => PluginStructType<object>;
export declare const convertPluginCommandSchema: <T extends PluginParam>(command: PluginCommandSchemaArrayEx3<T>) => PluginCommandTypeEx<object>;
