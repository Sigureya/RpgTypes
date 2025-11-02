import { PrimitiveParam } from './params';
import { PluginParamTokens } from './parse';
export type ParamSoruceRecord<T> = Partial<Record<keyof T, string>>;
export declare const compileAttributes: (tokens: PluginParamTokens) => PrimitiveParam;
