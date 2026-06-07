/* eslint-disable @functional/no-return-void */
export interface Rmmz_PluginManagerBase {
  parameters(name: string): unknown;
  registerCommand(
    pluginName: string,
    commandName: string,
    func: () => void,
  ): void;
  callCommand(
    self: unknown,
    pluginName: string,
    commandName: string,
    args: unknown,
  ): void;
}
