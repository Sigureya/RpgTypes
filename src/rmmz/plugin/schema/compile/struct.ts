import { compileStructDetail } from "./kinds/compileFieldEx";
import type { CompileResult } from "./kinds/compileLog";
import { PLUGIN_COMMAND } from "./kinds/constants";
import type { PluginCommand, PluginStruct } from "./kinds/plugin";
import type {
  PluginMeta,
  PluginCompileOptions,
} from "./kinds/pluginMeta/compileOption";

const SEPARATOR = "." as const;

export const compilePluginCommand = <T extends object>(
  titles: PluginMeta,
  { args, command }: PluginCommand<T>,
  options: Partial<PluginCompileOptions>
): CompileResult<T> => {
  return compileStructDetail(
    `${titles.moduleName}${SEPARATOR}${PLUGIN_COMMAND}${SEPARATOR}${command}`,
    command,
    args,
    { meta: titles, options }
  );
};

export const compilePluginStruct = <T extends object>(
  tiles: PluginMeta,
  { params, struct: structName }: PluginStruct<T>,
  options: Partial<PluginCompileOptions>
): CompileResult<T> => {
  return compileStructDetail(
    `${tiles.moduleName}${SEPARATOR}${structName}`,
    structName,
    params,
    { meta: tiles, options }
  );
};
