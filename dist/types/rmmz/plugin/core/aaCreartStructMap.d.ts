import { PluginStructSchemaArray } from './arraySchemaTypes';
import { PrimitiveParam } from './paramUnion';
export declare const createStructMap: (structs: ReadonlyArray<PluginStructSchemaArray>) => Map<string, PrimitiveParam[]>;
