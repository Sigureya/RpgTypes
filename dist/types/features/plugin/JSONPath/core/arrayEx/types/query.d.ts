import { JSONPathType } from '../../../../../../libs';
import { PluginParamEx, ArrayParamTypes, PluginStructParamTypeEx } from '../../../../../../rmmz/plugin';
export interface ArrayPathPair {
    path: string;
    param: PluginParamEx<ArrayParamTypes>;
}
export interface ArrayParamPairEx<T> {
    path: JSONPathType<T>;
    param: PluginStructParamTypeEx<T>;
}
