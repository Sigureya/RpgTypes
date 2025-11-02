import { JSONValue } from '../../../../../libs';
import { PluginParamEx, ScalaParam } from '../../../../../rmmz/plugin';
import { ArrayPathPair, NumberSequenceParamValues, ScalaPathResult, StringSequenceParamValues } from './extractedTypes';
export declare const extractArrayParamValue: (object: JSONValue, pair: ArrayPathPair) => null | StringSequenceParamValues | NumberSequenceParamValues;
export declare const extractScalaParams: (data: JSONValue, path: string, params: ReadonlyArray<PluginParamEx<ScalaParam>>) => ScalaPathResult[];
