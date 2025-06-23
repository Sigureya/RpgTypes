import type {
  PluginCommand,
  PluginStructEx,
  StructParam,
} from "./kinds/core/structTypeEx";

export interface PluginXX {
  commands: PluginCommand<object>[];
  structs: PluginStructEx<object>[];
  params: Record<string, StructParam>;
}

export const compilePlugin = (plugin: PluginXX) => ({});
