import { StructParamPrimitive } from './kinds';
export interface PluginParam {
    param: string;
    data: StructParamPrimitive;
}
export declare const parsePluginParam: (text: string) => PluginParam;
