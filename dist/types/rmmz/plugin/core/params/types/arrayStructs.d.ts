import { PluginParam } from './arrayParamItems';
import { PluginStructParamTypeEx } from './pluginSchemaType';
export interface PluginStructSchemaArray {
    struct: string;
    params: PluginParam[];
}
export interface PluginStructSchemaArrayFilterd<T extends PluginParam> {
    struct: string;
    params: T[];
}
export type PluginStructSchemaArrayEx<T> = {
    struct: string;
    params: PluginStructParamTypeEx<T>[];
};
