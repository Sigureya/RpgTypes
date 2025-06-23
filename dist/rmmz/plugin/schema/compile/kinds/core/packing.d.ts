import { JSONSchemaType } from 'ajv';
import { PrimitiveStructBase, PrimitiveStructType } from './pluginSchemaType';
export type TypePackage<T extends Record<string, object>> = {
    [K in keyof T]: PrimitiveStructType<T[K]>;
};
export declare const compileFromStructArray: (list: PrimitiveStructBase[]) => Record<string, JSONSchemaType<object>>;
export declare const compilePrimitiveStruct: (struct: PrimitiveStructBase) => {
    $id: string;
    type: "object";
    properties: Record<string, import('../pluginMeta/anyParamSchema').AnyParamSchema>;
    required: string[];
};
