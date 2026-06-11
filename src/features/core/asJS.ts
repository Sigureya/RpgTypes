/* eslint-disable @functional/no-return-void */
import type { TextFileEntry } from "@RpgTypes/fileio";
import type { Rmmz_PluginManagerBase } from "@RpgTypes/libs";
import type {
  PluginReplacePathData,
  PluginParamsObject,
  PluginParamsRecord,
} from "@sigureya/rmmz-plugin-schema";
import { stringifyPluginsJS } from "@sigureya/rmmz-plugin-schema";
import type { RuntimeDictionaryData } from "./extract";
import {
  PLUGIN_NAME_HONYAKU_EX,
  PLUGIN_COMMAND_HONYAKU_SETUP,
  PLUGIN_COMMAND_READ_PLUGINS,
} from "./manifest";
import type { RuntimePluginBundleOptions } from "./manifest/types";

export interface PluginSnapshot {
  paths: PluginReplacePathData;
  parameters: PluginParamsObject;
}

type PluginName = typeof PLUGIN_NAME_HONYAKU_EX;
export interface PluginManager_HonyakuEx extends Rmmz_PluginManagerBase {
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
    func: (args: ReadonlyArray<PluginSnapshot>) => void,
  ): void;
  callCommand(
    self: unknown,
    pluginName: PluginName,
    commandName: typeof PLUGIN_COMMAND_READ_PLUGINS,
    args: ReadonlyArray<PluginSnapshot>,
  ): void;
}

export const createDictionarySetupScript = (
  data: RuntimeDictionaryData<string>,
): string => {
  return [
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
  params: ReadonlyArray<PluginSnapshot>,
): string => {
  return [
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

export const createRuntimePluginFiles = (
  options: RuntimePluginBundleOptions,
  dictionaryData: RuntimeDictionaryData<string>,
  snapshots: ReadonlyArray<PluginSnapshot>,
): TextFileEntry[] => {
  const dictionaryFile: TextFileEntry = {
    text: createDictionarySetupScript(dictionaryData),
    filename: `${options.outputDirectory}/${options.dictionaryName}.js`,
  };

  const pluginSnapshotFile: TextFileEntry = {
    text: createPluginSnapshotSetupScript(snapshots),
    filename: `${options.outputDirectory}/${options.pluginSnapshotName}.js`,
  };

  const manifest = createPluginManifest(options);
  const pluginsJsFile: TextFileEntry = {
    text: stringifyPluginsJS(manifest),
    filename: "plugins.js",
  };

  return [pluginsJsFile, dictionaryFile, pluginSnapshotFile];
};

export const createPluginManifest = (
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
