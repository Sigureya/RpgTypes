import type {
  PluginCompileOptions,
  PluginMeta,
} from "./core/kinds/compileOption";

export interface CompileContext {
  x: PluginMeta;

  options: Partial<PluginCompileOptions>;
}
