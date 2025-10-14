import { PrimitiveParam, PluginStructSchemaArray, PluginParam } from './core';
export declare const structDependencies: (structName: string, map: ReadonlyMap<string, ReadonlyArray<PrimitiveParam>>) => string[];
export declare const createStructMap: (structs: ReadonlyArray<PluginStructSchemaArray<PluginParam>>) => Map<string, PrimitiveParam[]>;
