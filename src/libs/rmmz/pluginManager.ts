import type { PluginManagerTemplate } from "@sigureya/rmmz-plugin-schema";

export interface Rmmz_PluginManager extends PluginManagerTemplate<
  string,
  string,
  object
> {
  parameters(name: string): Record<string, string>;
  registerCommand(
    pluginName: string,
    commandName: string,
    func: (this: unknown, arg: object) => void,
  ): void;
  callCommand(
    self: unknown,
    pluginName: string,
    commandName: string,
    args: object,
  ): void;
}
