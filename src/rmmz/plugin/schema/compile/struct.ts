import { compileStructDetail } from "./kinds/compileFieldEx";
import type { CompileResult } from "./kinds/compileLog";
import { PLUGIN_COMMAND } from "./kinds/constants";
import type {
  PluginCommand,
  PluginStructEx,
} from "./kinds/core/pluginEntriesEx";
import type {
  PluginMeta,
  PluginCompileOptions,
} from "./kinds/pluginMeta/compileOption";

const SEPARATOR = "." as const;

export const compilePluginCommand = <T extends object>(
  titles: PluginMeta,
  { args, command }: PluginCommand<T>,
  options: Partial<PluginCompileOptions>
) => {
  return compileStructDetail<T>(
    `${titles.moduleName}${SEPARATOR}${PLUGIN_COMMAND}${SEPARATOR}${command}`,
    command,
    args,
    { meta: titles, options }
  ) satisfies CompileResult<T>;
};

export const compilePluginStruct = <T extends object>(
  tiles: PluginMeta,
  { params, struct: structName }: PluginStructEx<T>,
  options: Partial<PluginCompileOptions>
) => {
  return compileStructDetail<T>(
    `${tiles.moduleName}${SEPARATOR}${structName}`,
    structName,
    params,
    { meta: tiles, options }
  ) satisfies CompileResult<T>;
};
