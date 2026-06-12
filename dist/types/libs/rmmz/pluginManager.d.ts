import { PluginManagerTemplate } from '@sigureya/rmmz-plugin-schema';
export interface Rmmz_PluginManagerBase extends PluginManagerTemplate<string, string, object> {
    parameters(name: string): unknown;
    registerCommand(pluginName: string, commandName: string, func: (this: unknown, arg: object) => void): void;
    callCommand(self: unknown, pluginName: string, commandName: string, args: object): void;
}
