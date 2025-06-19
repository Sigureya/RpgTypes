import type {
  PluginCommand,
  PluginStruct,
  StructParam,
} from "./core/kinds/plugin";

export interface PluginXX {
  commands: PluginCommand<object>[];
  structs: PluginStruct<object>[];
  params: Record<string, StructParam>;
}

export const compilePlugin = (plugin: PluginXX) => ({});
