import { JSONSchemaType } from 'ajv';
import { PluginStructType } from './pluginEnties';
import { PrimitiveStructBase } from './pluginSchemaType';
export type TypePackage<T extends Record<string, object>> = {
    [K in keyof T]: PluginStructType<T[K]>;
};
export declare const compileFromStructArray: (list: PrimitiveStructBase[]) => Record<string, JSONSchemaType<object>>;
export declare const compilePrimitiveStruct: (struct: PrimitiveStructBase) => {
    $id: string;
    type: "object";
    properties: Record<string, import('../pluginMeta/anyParamSchema').AnyParamSchema>;
    required: string[];
};
