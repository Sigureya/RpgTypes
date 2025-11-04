import { ScalaParam, ArrayParamTypes, PluginParamEx } from '../../../../rmmz/plugin';
import { ArrayPathPair } from './arrayEx/types/query';
export declare const makeScalaParams: (scalas: ReadonlyArray<PluginParamEx<ScalaParam>>, parent: string) => string;
export declare const makeScalaArrayParams: (scalaArrays: ReadonlyArray<PluginParamEx<ArrayParamTypes>>, parent: string) => ArrayPathPair[];
