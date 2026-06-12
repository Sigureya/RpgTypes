import type { Rmmz_PluginManagerBase } from "@RpgTypes/libs/rmmz/pluginManager";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Interpreter } from "./objects";

export interface Rmmz_PluginManager<
  CommandArg extends object,
> extends Rmmz_PluginManagerBase {
  parameters(name: string): Record<string, string>;
  registerCommand(
    pluginName: string,
    commandName: string,
    func: (this: CommandArg, args: object) => void,
  ): void;
  callCommand(
    self: Rmmz_Interpreter<EventCommand>,
    pluginName: string,
    commandName: string,
    args: CommandArg,
  ): void;
}
