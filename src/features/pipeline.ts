import type { FileEntry } from "@RpgTypes/fileio";
import type { RpgDataBundleHasText } from "@RpgTypes/rmmz";
import type {
  PluginParamExtractionOutput,
  PluginParamExtractionOutputWithError,
} from "@sigureya/rmmz-plugin-schema";
import type { BuildEx3Output } from "./buildEx3";
import type { RuntimeDictionaryData } from "./core/extract/dictionary";
import { buildRuntimeDictionary } from "./core/extract/dictionary";
import { replaceRuntimeData } from "./replace";

export const FILENAME_RUNTIME_DICTIONARY_JS = "dictionary.js" as const;
export const FILENAME_RUNTIME_HACKED_PLUGINS_JS = "hackedPlugins.js" as const;
export const FILENAME_RUNTIME_DATA_BUILD_JS = "dataBuild.js" as const;

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

export const buildDictionaryJsPayload = <Hash extends string>(
  dictionary: RuntimeDictionaryData<Hash>,
): DictionaryJsPayload<Hash> => {
  return {
    format: "dictionary.js",
    dictionary,
  };
};

export const buildHackedPluginsJsPayload = <E, Hash extends string>(
  prepared: BuildEx3Output<E>,
  dictionary: RuntimeDictionaryData<Hash>,
): HackedPluginsJsPayload<E, Hash> => {
  return {
    format: "hackedPlugins.js",
    pluginPathDictionary: prepared.pluginPath.params,
    pluginSchemas: prepared.pluginSchemas,
    pluginParams: prepared.pluginParams,
    pluginParamsWithErrors: prepared.pluginParamsWithErrors,
    dictionary,
  };
};

export const buildDataBuildJsPayload = (): DataBuildJsPayload => {
  return {
    format: "dataBuild.js",
    dictionaryFile: FILENAME_RUNTIME_DICTIONARY_JS,
    hackedPluginsFile: FILENAME_RUNTIME_HACKED_PLUGINS_JS,
    entry: "replaceRuntimeData",
  };
};

export const buildRuntimePipelineOutput = <E, Hash extends string>(
  prepared: BuildEx3Output<E>,
  dictionary: RuntimeDictionaryData<Hash>,
): RuntimePipelineOutput<E, Hash> => {
  return {
    dictionaryJs: buildDictionaryJsPayload(dictionary),
    hackedPluginsJs: buildHackedPluginsJsPayload(prepared, dictionary),
    dataBuildJs: buildDataBuildJsPayload(),
  };
};

export const createRuntimeDataBuild = <Hash extends string>(
  dictionary: RuntimeDictionaryData<Hash>,
): ((data: RpgDataBundleHasText) => RpgDataBundleHasText) => {
  const runtimeDictionary = buildRuntimeDictionary<string>(dictionary);
  return (data: RpgDataBundleHasText): RpgDataBundleHasText => {
    return replaceRuntimeData(data, runtimeDictionary);
  };
};

export const runtimePipelineToFileEntries = <E, Hash extends string>(
  output: RuntimePipelineOutput<E, Hash>,
): FileEntry[] => {
  return [
    {
      filename: FILENAME_RUNTIME_DICTIONARY_JS,
      data: output.dictionaryJs,
    },
    {
      filename: FILENAME_RUNTIME_HACKED_PLUGINS_JS,
      data: output.hackedPluginsJs,
    },
    {
      filename: FILENAME_RUNTIME_DATA_BUILD_JS,
      data: output.dataBuildJs,
    },
  ];
};
