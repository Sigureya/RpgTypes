import { PluginParam, PluginStructSchemaArray } from './arraySchemaTypes';
export declare function filterStructs(schemas: ReadonlyArray<PluginStructSchemaArray>, predicate: (param: PluginParam) => boolean): {
    directs: PluginStructSchemaArray[];
    indirects: PluginStructSchemaArray[];
    indirectsNames: Set<string>;
};
