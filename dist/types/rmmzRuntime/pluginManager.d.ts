import { Rmmz_PluginManager } from '../libs/rmmz/pluginManager';
import { Rmmz_Interpreter } from './objects';
export interface Rmmz_PluginManagerEx<CommandArg extends object> extends Rmmz_PluginManager {
    parameters(name: string): Record<string, string>;
    registerCommand(pluginName: string, commandName: string, func: (this: Rmmz_Interpreter, args: CommandArg) => void): void;
    callCommand(self: Rmmz_Interpreter, pluginName: string, commandName: string, args: CommandArg): void;
}
