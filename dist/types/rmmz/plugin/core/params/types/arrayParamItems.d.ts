import { PrimitiveParam } from './paramUnion';
import { StructArrayRefParam, StructRefParam } from './primitive';
export interface PluginParam {
    name: string;
    attr: PrimitiveParam;
}
export interface PluginParamEx<T extends PrimitiveParam, N extends string = string> {
    name: Extract<N, string>;
    attr: T;
}
export type StructPluginParam = PluginParamEx<StructRefParam | StructArrayRefParam>;
