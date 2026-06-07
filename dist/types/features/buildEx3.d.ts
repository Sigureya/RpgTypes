import { AssetFilesBundle, FileReadBundle, RawGameData, RawGameEventData } from '../fileio';
import { AnyStringParam, PluginExtractionResult, PluginParamExtractionOutput, PluginParamExtractionOutputWithError, PluginReplacePathData, PluginSchema } from '@sigureya/rmmz-plugin-schema';
import { PluginCommandPathDictionaryEntry, PluginPathBuildResult } from './createPluginPath';
import { AnyParamTextPredicate, PluginCommandMapKey } from './pluginMap';
export type PluginSchemaInput = Pick<PluginSchema, "pluginName" | "schema">;
export interface BuildEx3Input<E> {
    gameData: RawGameData;
    assets: AssetFilesBundle;
    pluginExtraction: PluginExtractionResult<E>;
}
export interface BuildEx3FromBundleInput<E> {
    bundle: FileReadBundle;
    pluginExtraction: PluginExtractionResult<E>;
}
export interface BuildEx3Output<E> {
    fileBundle: FileReadBundle;
    pluginSchemas: PluginSchemaInput[];
    pluginParams: PluginParamExtractionOutput[];
    pluginParamsWithErrors: PluginParamExtractionOutputWithError<E>[];
    pluginPath: PluginPathBuildResult;
    pluginParamPathMap: ReadonlyMap<string, PluginReplacePathData>;
    pluginCommandPathMap: ReadonlyMap<PluginCommandMapKey, PluginCommandPathDictionaryEntry>;
}
export declare const toPluginSchemaInput: <E>(extraction: PluginExtractionResult<E>) => PluginSchemaInput[];
export declare const buildFileReadBundle: (gameData: RawGameData, assets: AssetFilesBundle) => FileReadBundle;
export declare const buildPluginPathMaps: (events: RawGameEventData, schemas: ReadonlyArray<PluginSchemaInput>, anyParamFn?: AnyParamTextPredicate) => {
    pluginPath: PluginPathBuildResult;
    pluginParamPathMap: ReadonlyMap<string, PluginReplacePathData>;
    pluginCommandPathMap: ReadonlyMap<PluginCommandMapKey, PluginCommandPathDictionaryEntry>;
};
export declare const buildReplacePreparation: <E>(input: BuildEx3Input<E>, anyParamFn?: (param: AnyStringParam, name: string) => boolean) => BuildEx3Output<E>;
export declare const buildReplacePreparationFromBundle: <E>(input: BuildEx3FromBundleInput<E>, anyParamFn?: (param: AnyStringParam, name: string) => boolean) => BuildEx3Output<E>;
