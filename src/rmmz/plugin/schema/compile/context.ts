import type {
  PluginMeta,
  PluginCompileOptions,
} from "./kinds/core/compileOption";

export interface CompileContext {
  meta: PluginMeta;

  options: Partial<PluginCompileOptions>;
}
