import type { TextFileEntry } from "@RpgTypes/fileio";
import type {
  SchemaStringifyHandlers,
  PluginManifestData,
  PluginParamsRecord,
  PluginManagerTemplate,
} from "@sigureya/rmmz-plugin-schema";
import {
  generatePluginAnnotationLines,
  generatePluginAnnotationText,
} from "@sigureya/rmmz-plugin-schema";
import type { RuntimePluginBundleOptions } from "./manifest";
import {
  PLUGIN_NAME_HONYAKU_EX,
  PLUGIN_COMMAND_HONYAKU_SETUP,
  PLUGIN_COMMAND_READ_PLUGINS,
} from "./manifest";
import type { RuntimeDictionaryData } from "./types";

export type PluginManager_HonyakuEx2 = PluginManagerTemplate<
  typeof PLUGIN_NAME_HONYAKU_EX,
  typeof PLUGIN_COMMAND_HONYAKU_SETUP,
  RuntimeDictionaryData<string>
>;

export const pluginManifestFiles = (
  data: RuntimeDictionaryData<string>,
  options: RuntimePluginBundleOptions,
): TextFileEntry => {
  return {
    // 辞書データ
    filename: `${options.outputDirectory}/${options.dictionaryName}.js`,
    text: createDictionarySetupScript(data),
  };
};

const createDictionarySetupScript = (
  data: RuntimeDictionaryData<string>,
): string => {
  return [
    createAnnotation("辞書データプラグイン。JSONの代わりです。"),
    "(function(){",
    `"use strict";`,
    "const data = ",
    `${JSON.stringify(data)};`,
    "PluginManager.callCommand(null,",
    PLUGIN_NAME_HONYAKU_EX,
    PLUGIN_COMMAND_HONYAKU_SETUP,
    "data",
    ");",
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
    PLUGIN_NAME_HONYAKU_EX,
    PLUGIN_COMMAND_READ_PLUGINS,
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
  const lines = generatePluginAnnotationLines(
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
  return generatePluginAnnotationText(lines);
};
