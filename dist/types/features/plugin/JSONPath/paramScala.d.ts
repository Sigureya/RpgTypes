import { PluginParam, ScalaParam, ArrayParamTypes } from '../../../rmmz/plugin';
export declare const makeScalaParams: (scalas: ReadonlyArray<PluginParam<ScalaParam>>, parent: string) => string;
export declare const makeScalaArrayParams: (scalaArrays: ReadonlyArray<PluginParam<ArrayParamTypes>>, parent: string) => string[];
