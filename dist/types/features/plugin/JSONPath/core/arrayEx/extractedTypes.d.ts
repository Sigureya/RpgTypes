import { JSONPathType } from '../../../../../libs';
import { ArrayParamTypes, PluginParamEx, PluginStructParamTypeEx, ScalaParam } from '../../../../../rmmz/plugin';
export interface ArrayPathPair {
    path: string;
    param: PluginParamEx<ArrayParamTypes>;
}
export interface ArrayParamPairEx<T> {
    path: JSONPathType<T>;
    param: PluginStructParamTypeEx<T>;
}
export interface StringSequenceParamValues {
    values: string[];
    valueKind: "string";
    param: PluginParamEx<Extract<ArrayParamTypes, {
        default: string[];
    }>>;
}
export interface NumberSequenceParamValues {
    values: number[];
    valueKind: "number";
    param: PluginParamEx<Extract<ArrayParamTypes, {
        default: number[];
    }>>;
}
export interface ScalaPathResult {
    value: number | string | boolean;
    param: PluginParamEx<ScalaParam>;
}
