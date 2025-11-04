import { PluginParam, PluginSchemaArray, PluginSchemaArrayEx2, StructPluginParam, PluginCommandSchemaArray, PluginCommandSchemaArrayEx3 } from './types';
export declare const filterPluginSchemaByParam: <T extends PluginParam>(schema: PluginSchemaArray, predicate: (param: PluginParam) => param is T) => PluginSchemaArrayEx2<T>;
export declare const rebuildCommands: <T extends PluginParam>(commands: ReadonlyArray<PluginCommandSchemaArray>, structNames: ReadonlySet<string>, predicate: (param: PluginParam) => param is T) => PluginCommandSchemaArrayEx3<T | StructPluginParam>[];
