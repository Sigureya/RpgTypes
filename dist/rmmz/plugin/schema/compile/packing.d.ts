import { JSONSchemaType } from 'ajv';
import { StructParamPrimitive } from './kinds';
import { PrimitiveStructType } from './pluginScehamType';
type StructPackage = {
    structs: Record<string, PrimitiveStructType<object>>;
};
export type TypePackage<T extends Record<string, object>> = {
    [K in keyof T]: PrimitiveStructType<T[K]>;
};
export declare const compileFromStructPackage: <T extends StructPackage>(plugin: T) => {};
export interface StructPrimitve3 {
    struct: string;
    params: Record<string, StructParamPrimitive>;
}
export declare const compileFromStrucArray: (list: StructPrimitve3[]) => Record<string, JSONSchemaType<object>>;
export declare const compilePirmiteveStruct: (struct: StructPrimitve3) => {
    $id: string;
    type: "object";
    properties: Record<string, import('./kinds/core/anyPluginSchema').AnyParamSchema>;
    required: string[];
};
export declare const compileParams: <K extends string, P extends StructParamPrimitive, R>(params: Record<K, P>, fn: (value: P, key: string) => R) => Record<K, R>;
export {};
