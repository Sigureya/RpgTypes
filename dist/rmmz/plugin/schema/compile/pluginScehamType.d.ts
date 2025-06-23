import { AnyParamSchema } from './kinds/core/anyPluginSchema';
import { KindOfBoolean, KindOfStructArrayRef, KindOfStructRef, StructParamPrimitive } from './kinds/core/primitiveParams';
export type PrimitiveStructType<T extends object> = {
    struct: string;
    params: PrimitiveParams<T>;
};
export type PrimitiveParams<T extends object> = {
    [K in Extract<keyof T, string>]: PluginSchemaType<T[K]>;
};
export type PluginSchemaType<T> = T extends boolean ? KindOfBoolean : T extends number ? Extract<StructParamPrimitive, {
    default: number;
}> : T extends string ? Extract<StructParamPrimitive, {
    default: string;
}> : T extends number[] ? Extract<StructParamPrimitive, {
    default: number[];
}> : T extends string[] ? Extract<StructParamPrimitive, {
    default: string[];
}> : T extends null ? {
    kind: "null is Forbidden";
    default?: null;
} : T extends undefined ? {
    kind: "undefined is Forbidden";
} : T extends boolean[] ? {
    kind: "boolean[] is Forbidden";
} : T extends object[] ? KindOfStructArrayRef : T extends object ? KindOfStructRef : never;
export declare const compileProperties: <T extends object>(struct: PrimitiveStructType<T>, fn: (value: StructParamPrimitive, key: string) => AnyParamSchema) => {
    title: string;
    type: "object";
    properties: Record<string, AnyParamSchema>;
    required: string[];
};
export type ParamToObject<T extends Record<string, {
    default: unknown;
}>> = {
    [K in keyof T]: T[K] extends {
        default: infer D;
    } ? D : never;
};
