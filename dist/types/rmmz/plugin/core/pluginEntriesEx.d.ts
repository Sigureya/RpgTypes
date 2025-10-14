import { ParamBase } from './paramBase';
import { PrimitiveParam } from './paramUnion';
export type StructParam = PrimitiveParam | StructDefParam<object> | StructArrayDefParam<object>;
export interface StructArrayDefParam<T extends object> extends PluginStructEx<T>, ParamBase {
    kind: "struct_def[]";
    default: object[];
    struct: string;
    params: {
        [K in keyof T]: StructParam;
    };
}
export interface StructDefParam<T extends object> extends PluginStructEx<T>, ParamBase {
    kind: "struct_def";
    struct: string;
    params: {
        [K in keyof T]: StructParam;
    };
}
export interface PluginStructEx<T extends object> {
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
