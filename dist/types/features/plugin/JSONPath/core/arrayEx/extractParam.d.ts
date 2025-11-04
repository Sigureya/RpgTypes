import { JSONValue } from '../../../../../libs';
import { PluginParamEx, ScalaParam } from '../../../../../rmmz/plugin';
import { ArrayPathPair } from './types/query';
import { StringSequenceParamValues, NumberSequenceParamValues, ScalaPathResult } from './types/result';
export declare const extractArrayParamValue: (object: JSONValue, pair: ArrayPathPair) => null | StringSequenceParamValues | NumberSequenceParamValues;
export declare const extractScalaParams: (data: JSONValue, path: string, params: ReadonlyArray<PluginParamEx<ScalaParam>>, structName: string) => ScalaPathResult[];
