import { PLUGIN_COMMAND } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/constants";
import type {
  PluginCommand,
  PluginStructEx,
} from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx";
import { compileStructDetail } from "./compileFieldEx";
import type { CompileResult } from "./compileLog";
import type {
  PluginMeta,
  PluginCompileOptions,
} from "./scala/meta/compileOption";

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
