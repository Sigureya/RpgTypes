import type { TextFileEntry } from "@RpgTypes/fileio";
import type { SystemTexts } from "@RpgTypes/rmmz";
import type {
  SchemaStringifyHandlers,
  PluginManifestData,
  PluginParamsRecord,
  PluginManagerTemplate,
} from "@sigureya/rmmz-plugin-schema";
import { generatePluginAnnotationText } from "@sigureya/rmmz-plugin-schema";
import type { RuntimePluginBundleOptions } from "./manifest";
import {
  PLUGIN_NAME_HONYAKU_EX,
  PLUGIN_COMMAND_HONYAKU_SETUP_DICTIONARY,
  PLUGIN_COMMAND_READ_PLUGINS,
  PLUGIN_COMMAND_HONYAKU_SETUP_SYSTEM_TEXTS,
} from "./manifest";
import type {
  RuntimeDictionaryData,
  RuntimeDictionaryDataWithSystem,
} from "./types";

export type Rmmz_PluginManager_Translation = PluginManagerTemplate<
  typeof PLUGIN_NAME_HONYAKU_EX,
  typeof PLUGIN_COMMAND_HONYAKU_SETUP_DICTIONARY,
  RuntimeDictionaryData<string>
> &
  PluginManagerTemplate<
    typeof PLUGIN_NAME_HONYAKU_EX,
    typeof PLUGIN_COMMAND_HONYAKU_SETUP_SYSTEM_TEXTS,
    SystemTexts
  >;

export const pluginManifestFiles = (
  data: RuntimeDictionaryDataWithSystem<string>,
  options: RuntimePluginBundleOptions = {
    description: "書き換え用辞書データ",
    outputDirectory: "translation",
    dictionaryName: "TranslationDictionary",
    pluginSnapshotName: "pluginSnapshot",
  },
): TextFileEntry => {
  return {
    // 辞書データ
    dir: "js/plugins",
    subDir: options.outputDirectory,
    filename: `${options.dictionaryName}.js`,
    text: createDictionarySetupScript(data),
  };
};

const createXXBlock = (
  pluginName: string,
  commandName: string,
  data: object,
) => {
  return [
    "(() => {",
    "const data = ",
    `${JSON.stringify(data, null, 2)};`,
    "PluginManager.callCommand(null,",
    `"${pluginName}",`,
    `"${commandName}",`,
    "data",
    ");",
    "})();",
  ].join("\n");
};

const createDictionarySetupScript = (
  data: RuntimeDictionaryDataWithSystem<string>,
): string => {
  const dic: RuntimeDictionaryData<string> = {
    actorTexts: data.actorTexts,
    textDictionary: data.textDictionary,
    targetNoteKeys: data.targetNoteKeys,
  };
  return [
    createAnnotation("辞書データプラグイン。JSONの代わりです。"),
    "(function(){",
    `"use strict";`,
    createXXBlock(
      PLUGIN_NAME_HONYAKU_EX,
      PLUGIN_COMMAND_HONYAKU_SETUP_DICTIONARY,
      dic,
    ),
    createXXBlock(
      PLUGIN_NAME_HONYAKU_EX,
      PLUGIN_COMMAND_HONYAKU_SETUP_SYSTEM_TEXTS,
      data.systemTexts,
    ),
    "})();",
  ].join("\n");
};

export const createPluginSnapshotSetupScript = (
  params: ReadonlyArray<PluginManifestData>,
): string => {
  return [
    createAnnotation("プラグインコマンド書き換えプラグイン"),
    "(function(){",
    `"use strict";`,
    "const data = ",
    `${JSON.stringify(params)};`,
    "PluginManager.callCommand(null,",
    `"${PLUGIN_NAME_HONYAKU_EX}",`,
    `"${PLUGIN_COMMAND_READ_PLUGINS}",`,
    "data",
    ");",
    "})()",
  ].join("\n");
};

export const createPluginManifest2 = (
  options: RuntimePluginBundleOptions,
): PluginParamsRecord[] => {
  return [
    {
      name: `${options.outputDirectory}/${PLUGIN_NAME_HONYAKU_EX}`,
      description: options.description,
      status: true,
      parameters: {},
    },
    {
      name: `${options.outputDirectory}/${options.dictionaryName}`,
      description: options.description,
      status: true,
      parameters: {},
    },
    {
      name: `${options.outputDirectory}/${options.pluginSnapshotName}`,
      description: options.description,
      status: true,
      parameters: {},
    },
  ];
};

const createHandlers = (): SchemaStringifyHandlers => {
  return {
    structArray: (value: object[]) => JSON.stringify(value),
    struct: (value: object) => JSON.stringify(value),
    numberArray: (value: number[]) => JSON.stringify(value),
    stringArray: (value: string[]) => JSON.stringify(value),
  };
};

const createAnnotation = (desc: string): string => {
  return generatePluginAnnotationText(
    {
      pluginName: "",
      locale: "",
      target: "MZ",
      dependencies: {
        base: [PLUGIN_NAME_HONYAKU_EX],
        orderAfter: [PLUGIN_NAME_HONYAKU_EX],
        orderBefore: [],
      },
      schema: {
        commands: [],
        params: [],
        structs: [],
      },
      meta: { plugindesc: desc },
    },
    createHandlers(),
  );
};
