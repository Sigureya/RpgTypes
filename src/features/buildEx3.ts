import type {
  AssetFilesBundle,
  FileReadBundle,
  RawGameData,
  RawGameEventData,
} from "@RpgTypes/fileio";
import type {
  AnyStringParam,
  PluginExtractionResult,
  PluginParamExtractionOutput,
  PluginParamExtractionOutputWithError,
  PluginReplacePathData,
  PluginSchema,
} from "@sigureya/rmmz-plugin-schema";
import {
  createPluginParamsFromPipeline,
  createPluginParamsWithErrorsFromPipeline,
} from "@sigureya/rmmz-plugin-schema";
import {
  buildPluginPathDictionaries,
  type PluginCommandPathDictionaryEntry,
  type PluginPathBuildResult,
} from "./createPluginPath";
import type { AnyParamTextPredicate, PluginCommandMapKey } from "./pluginMap";
import { isTextAnyParamStrict } from "./pluginMap";

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
  pluginCommandPathMap: ReadonlyMap<
    PluginCommandMapKey,
    PluginCommandPathDictionaryEntry
  >;
}

export const toPluginSchemaInput = <E>(
  extraction: PluginExtractionResult<E>,
): PluginSchemaInput[] => {
  return extraction.plugins.map((item) => ({
    pluginName: item.pluginName,
    schema: item.schema,
  }));
};

export const buildFileReadBundle = (
  gameData: RawGameData,
  assets: AssetFilesBundle,
): FileReadBundle => {
  return {
    data: gameData,
    audioFiles: assets.audioFiles,
    imageFiles: assets.imageFiles,
    otherFiles: assets.otherFiles,
  };
};

export const buildPluginPathMaps = (
  events: RawGameEventData,
  schemas: ReadonlyArray<PluginSchemaInput>,
  anyParamFn: AnyParamTextPredicate = isTextAnyParamStrict,
): {
  pluginPath: PluginPathBuildResult;
  pluginParamPathMap: ReadonlyMap<string, PluginReplacePathData>;
  pluginCommandPathMap: ReadonlyMap<
    PluginCommandMapKey,
    PluginCommandPathDictionaryEntry
  >;
} => {
  const pluginPath = buildPluginPathDictionaries(events, schemas, anyParamFn);
  return {
    pluginPath,
    pluginParamPathMap: toPluginParamPathMap(pluginPath.params),
    pluginCommandPathMap: toPluginCommandPathMap(pluginPath.commandPaths),
  };
};

export const buildReplacePreparation = <E>(
  input: BuildEx3Input<E>,
  anyParamFn: (
    param: AnyStringParam,
    name: string,
  ) => boolean = isTextAnyParamStrict,
): BuildEx3Output<E> => {
  const bundle = buildFileReadBundle(input.gameData, input.assets);
  return buildReplacePreparationFromBundle(
    {
      bundle,
      pluginExtraction: input.pluginExtraction,
    },
    anyParamFn,
  );
};

export const buildReplacePreparationFromBundle = <E>(
  input: BuildEx3FromBundleInput<E>,
  anyParamFn: (
    param: AnyStringParam,
    name: string,
  ) => boolean = isTextAnyParamStrict,
): BuildEx3Output<E> => {
  const pluginSchemas = toPluginSchemaInput(input.pluginExtraction);
  const pluginParams = createPluginParamsFromPipeline(input.pluginExtraction);
  const pluginParamsWithErrors = createPluginParamsWithErrorsFromPipeline(
    input.pluginExtraction,
  );
  const pathMaps = buildPluginPathMaps(
    input.bundle.data,
    pluginSchemas,
    anyParamFn,
  );

  return {
    fileBundle: input.bundle,
    pluginSchemas,
    pluginParams,
    pluginParamsWithErrors,
    pluginPath: pathMaps.pluginPath,
    pluginParamPathMap: pathMaps.pluginParamPathMap,
    pluginCommandPathMap: pathMaps.pluginCommandPathMap,
  };
};

const toPluginParamPathMap = (
  list: ReadonlyArray<PluginReplacePathData>,
): ReadonlyMap<string, PluginReplacePathData> => {
  return new Map(list.map((item) => [item.pluginName, item]));
};

const toPluginCommandPathMap = (
  list: ReadonlyArray<PluginCommandPathDictionaryEntry>,
): ReadonlyMap<PluginCommandMapKey, PluginCommandPathDictionaryEntry> => {
  return new Map(list.map((item) => [item.key, item]));
};
