import { PluginCommand, PluginStruct, StructParam } from './core/kinds/plugin';
export interface PluginXX {
    commands: PluginCommand<object>[];
    structs: PluginStruct<object>[];
    params: Record<string, StructParam>;
}
export declare const compilePlugin: (plugin: PluginXX) => {};
