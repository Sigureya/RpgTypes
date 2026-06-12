import type { Rmmz_PluginManagerBase } from "@RpgTypes/libs/rmmz/pluginManager";

export interface Rmmz_PluginManager<
  InterPreter,
> extends Rmmz_PluginManagerBase {
  //  _commands: Record<string, (args: Record<string, string>) => void>;

  parameters(name: string): Record<string, string>;
  registerCommand(
    pluginName: string,
    commandName: string,
    func: (this: InterPreter, args: object) => void,
  ): void;
  callCommand(
    self: InterPreter,
    pluginName: string,
    commandName: string,
    args: object,
  ): void;
}
