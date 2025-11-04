import { ArrayParamTypes, PluginParam, PluginParamEx } from '../../../../../../rmmz/plugin';
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
    structName: string;
    param: PluginParam;
}
