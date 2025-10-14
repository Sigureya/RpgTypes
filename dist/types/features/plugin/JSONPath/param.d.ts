import { PluginParam, ScalaParam, ArrayParamTypes, StructRefParam, StructArrayRefParam } from '../../../rmmz/plugin';
import { ParamJSONPath } from './types';
export declare const scalaParamPath: (param: PluginParam<ScalaParam>, parent: string) => ParamJSONPath<PluginParam<ScalaParam>>;
export declare const arrayParamPath: (param: PluginParam<ArrayParamTypes>, parent: string) => ParamJSONPath<PluginParam<ArrayParamTypes>>;
export declare const structParamPath: (param: PluginParam<StructRefParam>, parent: string) => ParamJSONPath<PluginParam<StructRefParam>>;
export declare const structArrayParamPath: (param: PluginParam<StructArrayRefParam>, parent: string) => ParamJSONPath<PluginParam<StructArrayRefParam>>;
