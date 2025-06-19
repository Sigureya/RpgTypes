import type { PluginCompileOptions } from "./core/kinds/compileOption";

export interface CompileContext {
  moduleName: string;
  options: Partial<PluginCompileOptions>;
}
