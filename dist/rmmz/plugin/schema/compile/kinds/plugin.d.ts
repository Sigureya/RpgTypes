import { ParamBase } from './core/paramBase';
import { StructParamPrimitive } from './core/primitiveParams';
export type StructParam = StructParamPrimitive | KindOfStruct<object> | KindOfStructArray<object>;
export interface KindOfStructArray<T extends object> extends PluginStruct<T>, ParamBase {
    kind: "struct_def[]";
    default: object[];
    struct: string;
    params: {
        [K in keyof T]: StructParam;
    };
}
export interface KindOfStruct<T extends object> extends PluginStruct<T>, ParamBase {
    kind: "struct_def";
    struct: string;
    params: {
        [K in keyof T]: StructParam;
    };
}
export interface PluginStruct<T extends object> {
    struct: string;
    params: {
        [K in keyof T]: StructParam;
    };
}
export interface PluginCommand<T extends object> {
    command: string;
    desc?: string;
    text?: string;
    args: {
        [K in keyof T]: StructParam;
    };
}
