import { PluginParam, ScalaParam, ArrayParamTypes } from '../../../../rmmz/plugin';
import { ArrayPathPair } from './arrayEx/extractedTypes';
export declare const makeScalaParams: (scalas: ReadonlyArray<PluginParam<ScalaParam>>, parent: string) => string;
export declare const makeScalaArrayParams: (scalaArrays: ReadonlyArray<PluginParam<ArrayParamTypes>>, parent: string) => ArrayPathPair[];
