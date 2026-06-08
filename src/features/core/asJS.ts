import type { PluginReplacePathData } from "@sigureya/rmmz-plugin-schema";
import type { RuntimeDictionaryData } from "./extract";
import {
  PLUGIN_COMMAND_HONYAKU_SETUP,
  PLUGIN_NAME_HONYAKU_EX,
  PLUGIN_COMMAND_READ_PLUGINS,
} from "./pluginManager/index";

export const asDictionaryJS = (data: RuntimeDictionaryData<string>) => {
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
  ];
};

export const asHackPluginJS = (code: readonly PluginReplacePathData[]) => {
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
  ];
};
