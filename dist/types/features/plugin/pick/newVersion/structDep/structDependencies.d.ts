import { PluginParam, PluginStructSchemaArray, PrimitiveParam } from '../../../../../rmmz/plugin';
export declare const structDependencies: (structName: string, map: ReadonlyMap<string, ReadonlyArray<PrimitiveParam>>) => string[];
export declare const structDependenciesEx: (structs: ReadonlyArray<PluginStructSchemaArray<PluginParam>>) => Map<string, string[]>;
export declare const createStructMap: (structs: ReadonlyArray<PluginStructSchemaArray<PluginParam>>) => Map<string, PrimitiveParam[]>;
