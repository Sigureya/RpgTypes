/* eslint-disable @functional/no-return-void */
import type { Rmmz_PluginManagerBase } from "@RpgTypes/libs";
import type {
  PluginManifestData,
  PluginParamsRecord,
} from "@sigureya/rmmz-plugin-schema";
import type { RuntimePluginBundleOptions } from "./core/asJS";
import type { RuntimeDictionaryData } from "./core/extract";
import {
  PLUGIN_NAME_HONYAKU_EX,
  PLUGIN_COMMAND_HONYAKU_SETUP,
  PLUGIN_COMMAND_READ_PLUGINS,
} from "./core/pluginManager";

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

export const createDictionarySetupScript2 = (
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

export const createPluginSnapshotSetupScript2 = (
  params: ReadonlyArray<PluginManifestData>,
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
