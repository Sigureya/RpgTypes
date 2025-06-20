import type { PluginMeta, PluginCompileOptions } from "./kinds/compileOption";

export interface CompileContext {
  meta: PluginMeta;

  options: Partial<PluginCompileOptions>;
}
