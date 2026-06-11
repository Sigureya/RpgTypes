/* eslint-disable @functional/no-return-void */
import type { TextFileEntry } from "@RpgTypes/fileio";
import type { Rmmz_PluginManagerBase } from "@RpgTypes/libs";
import type {
  SchemaStringifyHandlers,
  PluginManifestData,
  PluginParamsRecord,
} from "@sigureya/rmmz-plugin-schema";
import {
  generatePluginAnnotationLines,
  generatePluginAnnotationText,
} from "@sigureya/rmmz-plugin-schema";
import type { RuntimeDictionaryData } from "./core/extract";
import type { RuntimePluginBundleOptions } from "./core/manifest";
import {
  PLUGIN_NAME_HONYAKU_EX,
  PLUGIN_COMMAND_HONYAKU_SETUP,
  PLUGIN_COMMAND_READ_PLUGINS,
} from "./core/manifest";

type PluginName = typeof PLUGIN_NAME_HONYAKU_EX;
export interface PluginManager_HonyakuEx2 extends Rmmz_PluginManagerBase {
  parameters(name: PluginName): unknown;
  registerCommand(
    pluginName: PluginName,
    commandName: typeof PLUGIN_COMMAND_HONYAKU_SETUP,
    func: (args: RuntimeDictionaryData<string>) => void,
  ): void;
  callCommand(
    self: unknown,
    pluginName: PluginName,
    commandName: typeof PLUGIN_COMMAND_HONYAKU_SETUP,
    args: RuntimeDictionaryData<string>,
  ): void;
  registerCommand(
    pluginName: PluginName,
    commandName: typeof PLUGIN_COMMAND_READ_PLUGINS,
    func: (args: ReadonlyArray<PluginManifestData>) => void,
  ): void;
  callCommand(
    self: unknown,
    pluginName: PluginName,
    commandName: typeof PLUGIN_COMMAND_READ_PLUGINS,
    args: ReadonlyArray<PluginManifestData>,
  ): void;
}

const createHandlers = (): SchemaStringifyHandlers => {
  return {
    structArray: (value: object[]) => JSON.stringify(value),
    struct: (value: object) => JSON.stringify(value),
    numberArray: (value: number[]) => JSON.stringify(value),
    stringArray: (value: string[]) => JSON.stringify(value),
  };
};

const xxxx = (desc: string): string => {
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

export const pluginManifestFiles = (
  data: RuntimeDictionaryData<string>,
  options: RuntimePluginBundleOptions,
): TextFileEntry[] => {
  return [
    {
      // 辞書データ
      filename: `${options.outputDirectory}/${options.outputDirectory}.js`,
      text: createDictionarySetupScript2(data),
    },
    // {
    //   // パス情報
    //   filename: `${options.outputDirectory}/${options.pluginSnapshotName}.js`,
    //   text: createPluginSnapshotSetupScript2(createPluginManifest2(options)),
    // },
  ];
};

export const createDictionarySetupScript2 = (
  data: RuntimeDictionaryData<string>,
): string => {
  return [
    xxxx("辞書データプラグイン。JSONの代わりです。"),
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

export const createPluginSnapshotSetupScript2 = (
  params: ReadonlyArray<PluginManifestData>,
): string => {
  return [
    xxxx("プラグインコマンド書き換えプラグイン"),
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
