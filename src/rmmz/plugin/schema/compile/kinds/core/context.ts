import type { PluginMeta, PluginCompileOptions } from "./compileOption";

export interface CompileContext {
  meta: PluginMeta;

  options: Partial<PluginCompileOptions>;
}
