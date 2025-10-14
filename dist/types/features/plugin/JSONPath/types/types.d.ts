import { PluginParam, PrimitiveParam } from '../../../../rmmz/plugin';
import { JSONPathType } from './jsonPathString';
export interface ParamJSONPath<Param = PluginParam<PrimitiveParam>> {
    parent: string;
    path: string;
    param: Param;
}
export interface ParamJSONPathSturct {
    scalas: ParamJSONPath[];
    structs: ParamJSONPath[];
    structArrays: ParamJSONPath[];
    scalaArrays: ParamJSONPath[];
}
export interface ParamJSONPath2<T> {
    path: JSONPathType<T>;
    parent: string;
    param: PluginParam<PrimitiveParam>;
}
export interface ParamJSONPathSturctEx<T> extends ParamJSONPathSturct {
    scalas: ParamJSONPath2<T>[];
    structs: ParamJSONPath2<T>[];
    structArrays: ParamJSONPath2<T>[];
    scalaArrays: ParamJSONPath2<T>[];
}
