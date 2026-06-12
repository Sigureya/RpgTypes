import { Rmmz_PluginManagerBase } from '../libs/rmmz/pluginManager';
import { EventCommand } from '../rmmz/eventCommand';
import { Rmmz_Interpreter } from './objects';
export interface Rmmz_PluginManager<CommandArg extends object> extends Rmmz_PluginManagerBase {
    parameters(name: string): Record<string, string>;
    registerCommand(pluginName: string, commandName: string, func: (this: CommandArg, args: object) => void): void;
    callCommand(self: Rmmz_Interpreter<EventCommand>, pluginName: string, commandName: string, args: CommandArg): void;
}
