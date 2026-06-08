/* eslint-disable @functional/no-return-void */

import type { Rmmz_PluginManagerBase } from "@RpgTypes/libs";
import type {
  PluginReplacePathData,
  PluginParamsObject,
} from "@sigureya/rmmz-plugin-schema";
import type { RuntimeDictionaryData } from "./extract";
import {
  PLUGIN_NAME_HONYAKU_EX,
  PLUGIN_COMMAND_HONYAKU_SETUP,
  PLUGIN_COMMAND_READ_PLUGINS,
} from "./pluginManager";

type PluginName = typeof PLUGIN_NAME_HONYAKU_EX;

export interface GGGPair {
  paths: PluginReplacePathData;
  body: PluginParamsObject;
}

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
    func: (args: ReadonlyArray<GGGPair>) => void,
  ): void;
  callCommand(
    self: unknown,
    pluginName: PluginName,
    commandName: typeof PLUGIN_COMMAND_READ_PLUGINS,
    args: ReadonlyArray<GGGPair>,
  ): void;
}

export const asDictionaryJS = (data: RuntimeDictionaryData<string>): string => {
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

export const asHackPluginJS = (code: readonly GGGPair[]): string => {
  return [
    "(function(){",
    `"use strict";`,
    "const data = ",
    `${JSON.stringify(code)};`,
    "PluginManager.callCommand(null,",
    PLUGIN_NAME_HONYAKU_EX,
    PLUGIN_COMMAND_READ_PLUGINS,
    "data",
    ");",
    "})()",
  ].join("\n");
};
