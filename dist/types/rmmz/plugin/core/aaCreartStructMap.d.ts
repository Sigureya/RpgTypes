import { PluginStructSchemaArray } from './params';
import { PrimitiveParam } from './params/types/paramUnion';
export declare const createStructMap: (structs: ReadonlyArray<PluginStructSchemaArray>) => Map<string, PrimitiveParam[]>;
