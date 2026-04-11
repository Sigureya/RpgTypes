import type { PLUGIN_COMMAND_MZ } from "@RpgTypes/libs";

export interface CommandParameter<T, Code extends number = number> {
  code: Code;
  paramIndex: number;
  value: T;
}

export interface PluginCommandParameter<T> extends CommandParameter<
  T,
  typeof PLUGIN_COMMAND_MZ
> {
  pluginName: string;
  commandName: string;
  argName: string;
  argTitle: string;
}
