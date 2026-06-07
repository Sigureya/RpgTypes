import { FileEntry } from '../fileio';
import { RpgDataBundleHasText } from '../rmmz';
import { PluginParamExtractionOutput, PluginParamExtractionOutputWithError } from '@sigureya/rmmz-plugin-schema';
import { BuildEx3Output } from './buildEx3';
import { RuntimeDictionaryData } from './core/extract/dictionary';
export declare const FILENAME_RUNTIME_DICTIONARY_JS: "dictionary.js";
export declare const FILENAME_RUNTIME_HACKED_PLUGINS_JS: "hackedPlugins.js";
export declare const FILENAME_RUNTIME_DATA_BUILD_JS: "dataBuild.js";
export interface DictionaryJsPayload<Hash extends string> {
    format: "dictionary.js";
    dictionary: RuntimeDictionaryData<Hash>;
}
export interface HackedPluginsJsPayload<E, Hash> {
    format: "hackedPlugins.js";
    pluginPathDictionary: BuildEx3Output<E>["pluginPath"]["params"];
    pluginSchemas: BuildEx3Output<E>["pluginSchemas"];
    pluginParams: PluginParamExtractionOutput[];
    pluginParamsWithErrors: PluginParamExtractionOutputWithError<E>[];
    dictionary: RuntimeDictionaryData<Hash>;
}
export interface DataBuildJsPayload {
    format: "dataBuild.js";
    dictionaryFile: typeof FILENAME_RUNTIME_DICTIONARY_JS;
    hackedPluginsFile: typeof FILENAME_RUNTIME_HACKED_PLUGINS_JS;
    entry: "replaceRuntimeData";
}
export interface RuntimePipelineOutput<E, Hash extends string> {
    dictionaryJs: DictionaryJsPayload<Hash>;
    hackedPluginsJs: HackedPluginsJsPayload<E, Hash>;
    dataBuildJs: DataBuildJsPayload;
}
export declare const buildDictionaryJsPayload: <Hash extends string>(dictionary: RuntimeDictionaryData<Hash>) => DictionaryJsPayload<Hash>;
export declare const buildHackedPluginsJsPayload: <E, Hash extends string>(prepared: BuildEx3Output<E>, dictionary: RuntimeDictionaryData<Hash>) => HackedPluginsJsPayload<E, Hash>;
export declare const buildDataBuildJsPayload: () => DataBuildJsPayload;
export declare const buildRuntimePipelineOutput: <E, Hash extends string>(prepared: BuildEx3Output<E>, dictionary: RuntimeDictionaryData<Hash>) => RuntimePipelineOutput<E, Hash>;
export declare const createRuntimeDataBuild: <Hash extends string>(dictionary: RuntimeDictionaryData<Hash>) => ((data: RpgDataBundleHasText) => RpgDataBundleHasText);
export declare const runtimePipelineToFileEntries: <E, Hash extends string>(output: RuntimePipelineOutput<E, Hash>) => FileEntry[];
