/* eslint-disable @functional/no-return-void */
import type { Rmmz_PluginManagerBase } from "@RpgTypes/libs";
import type { RuntimeDictionaryData } from "./core/extract";

type PluginName = "HonyakuEx";

type CommandName = "Setup";
export interface PluginManager_HonyakuEx extends Rmmz_PluginManagerBase {
  parameters(name: PluginName): unknown;
  registerCommand(
    pluginName: PluginName,
    commandName: CommandName,
    func: (args: RuntimeDictionaryData<string>) => void,
  ): void;
  callCommand(
    self: unknown,
    pluginName: PluginName,
    commandName: CommandName,
    args: RuntimeDictionaryData<string>,
  ): void;
}
