import { JSONValue } from '../../../../libs';
import { NumberSequenceParamValues, ScalaPathResult, StringSequenceParamValues } from './arrayEx/types/result';
import { StructPropertysPath } from './types';
export declare const extractScalaValuesFromJson: (json: JSONValue, structPath: StructPropertysPath) => ScalaPathResult[];
export declare const extractArrayValuesFromJson: (json: JSONValue, structPath: StructPropertysPath) => (StringSequenceParamValues | NumberSequenceParamValues)[];
