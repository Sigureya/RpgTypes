import { Rmmz_PluginManagerBase } from '../libs';
import { RuntimeDictionaryData } from './core/extract';
type PluginName = "HonyakuEx";
type CommandName = "Setup";
export interface PluginManager_HonyakuEx extends Rmmz_PluginManagerBase {
    parameters(name: PluginName): unknown;
    registerCommand(pluginName: PluginName, commandName: CommandName, func: (args: RuntimeDictionaryData<string>) => void): void;
    callCommand(self: unknown, pluginName: PluginName, commandName: CommandName, args: RuntimeDictionaryData<string>): void;
}
export {};
