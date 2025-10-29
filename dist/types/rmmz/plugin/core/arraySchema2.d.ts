import { PluginCommandSchemaArray, PluginParam, PluginSchemaArray, PluginStructSchemaArray } from './arraySchemaTypes';
import { PluginCommandSchemaArrayGGG, PP, SSSS } from './arraySchemaTypes2';
export declare const filterStructParam: (struct: PluginStructSchemaArray) => SSSS;
export declare function cccc<T extends PluginParam>(schema: PluginSchemaArray, predicate: (param: PluginParam) => param is T): PluginSchemaArray;
export declare function cccc(schema: PluginSchemaArray, predicate: (param: PluginParam) => boolean): PluginSchemaArray;
export declare const cmdEx: <T extends PluginParam>(commands: PluginCommandSchemaArray[], structNames: ReadonlySet<string>, predicate: (param: PluginParam) => param is T) => PluginCommandSchemaArrayGGG<T | PP>[];
