import { PluginStructEx } from './objectStruct';
import { ParamBase } from './paramBase';
import { StructParam } from './paramUnion';
export interface StructArrayDefParam<T extends object> extends PluginStructEx<T>, ParamBase {
    kind: "struct_def[]";
    default: object[];
    struct: string;
    params: {
        [K in keyof T as string]: StructParam;
    };
}
export interface StructDefParam<T extends object> extends PluginStructEx<T>, ParamBase {
    kind: "struct_def";
    struct: string;
    params: {
        [K in keyof T as string]: StructParam;
    };
}
