import { PluginParamTokens } from './parse/types/types';
import { PrimitiveParam } from './primitiveParams';
export type ParamSoruceRecord<T> = Partial<Record<keyof T, string>>;
export declare const compileAttributes: (tokens: PluginParamTokens) => PrimitiveParam;
