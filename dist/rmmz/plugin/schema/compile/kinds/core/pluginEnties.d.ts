import { PrimitiveParams } from './pluginSchemaType';
export interface PluginStructType<T extends object> {
    struct: string;
    params: PrimitiveParams<T>;
}
export interface PluginCommandType<T extends object> {
    command: string;
    desc?: string;
    text?: string;
    args: PrimitiveParams<T>;
}
export interface PluginParamType {
    plugin: "param";
    params: PrimitiveParams<object>;
}
export interface PluginType {
    plugindesc: string;
    commands: PluginCommandType<object>[];
    structs: PluginStructType<object>[];
    params: PrimitiveParams<object>;
}
export interface PluginDependencies {
    bases: string[];
    orderBefore: string[];
    orderAfter: string[];
}
