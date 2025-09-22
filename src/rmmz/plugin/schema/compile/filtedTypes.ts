import type { PluginStructBody } from "./kinds/core/pluginJSONTypes";

export type CommandArgsSchemaMap<T> = {
  [k: string]: { args: Record<string, T> };
};

export interface FilteredPluginSchema<T> {
  structs: Record<string, PluginStructBody<T>>;
  params: Record<string, T>;
  commands: CommandArgsSchemaMap<T>;
}
