import { PrimitiveParam, StructParam } from './paramUnion';
import { PluginSchemaType } from './pluginSchemaType';
export interface PluginStructEx<T extends object> {
    struct: string;
    params: {
        [K in keyof T as string]: StructParam;
    };
}
export interface PrimitiveStructBase {
    struct: string;
    params: Record<string, PrimitiveParam>;
}
export interface PluginStructType<T extends object> {
    struct: string;
    params: PrimitiveStructParams<T>;
}
export type ObjectParamsV5<K extends string, T extends PrimitiveParam> = {
    [key in K]?: T;
};
export type PrimitiveStructParams<T extends object> = {
    [K in Extract<keyof T, string>]: PluginSchemaType<T[K]>;
};
