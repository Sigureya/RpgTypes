import { PluginCommand, PluginStructEx, StructParam } from './kinds/core/pluginEntriesEx';
export interface PluginXX {
    commands: PluginCommand<object>[];
    structs: PluginStructEx<object>[];
    params: Record<string, StructParam>;
}
export declare const compilePlugin: (plugin: PluginXX) => {};
