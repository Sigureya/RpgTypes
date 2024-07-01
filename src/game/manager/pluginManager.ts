import { Game_Interpreter } from "../object";

export interface PluginManager_Interface {
  parameters(name: string): Record<string, string>;
  registerCommand(
    pluginName: string,
    commandName: string,
    func: Function
  ): void;
  callCommand(
    self: Game_Interpreter,
    pluginName: string,
    commandName: string,
    args: Record<string, string>
  ): void;
}
