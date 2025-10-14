import { PrimitiveParam } from './paramUnion';
import { PluginParamTokens } from './parse/types/types';
export type ParamSoruceRecord<T> = Partial<Record<keyof T, string>>;
export declare const compileAttributes: (tokens: PluginParamTokens) => PrimitiveParam;
