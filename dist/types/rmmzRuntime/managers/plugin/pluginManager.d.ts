export interface Rmmz_PluginManager<InterPreter> {
    _commands: Record<string, (args: Record<string, string>) => void>;
    parameters(name: string): Record<string, string>;
    registerCommand(pluginName: string, commandName: string, func: () => void): void;
    callCommand(self: InterPreter, pluginName: string, commandName: string, args: Record<string, string>): void;
}
