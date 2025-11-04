import { PrimitiveParam } from './paramUnion';
import { BooleanParam, AnyStringParam, StructArrayRefParam, StructRefParam } from './primitive';
export type PluginStructParamTypeEx<T> = {
    [K in keyof T as string]: {
        name: Extract<K, string>;
        attr: PluginSchemaType<T[K]>;
    };
}[Extract<keyof T, string>];
export type Error_NullForbidden = {
    kind: "null is Forbidden";
    default?: null;
};
export type Error_BooleanArrayForbidden = {
    kind: "boolean[] is Forbidden";
};
export type Error_UndefinedForbidden = {
    kind: "undefined is Forbidden";
};
export type PluginParamForbiddenTypes = Error_NullForbidden | Error_UndefinedForbidden | Error_BooleanArrayForbidden;
export type PluginSchemaType<T> = T extends boolean ? BooleanParam : T extends number ? Extract<PrimitiveParam, {
    default: number;
}> : T extends string ? Extract<Exclude<PrimitiveParam, AnyStringParam>, {
    default: string;
}> : T extends number[] ? Extract<PrimitiveParam, {
    default: number[];
}> : T extends string[] ? Extract<PrimitiveParam, {
    default: string[];
}> : T extends null ? Error_NullForbidden : T extends undefined ? Error_UndefinedForbidden : T extends boolean[] ? Error_BooleanArrayForbidden : T extends object[] ? StructArrayRefParam : T extends object ? StructRefParam : never;
