import { PluginCompileOptions, PluginMeta } from './core/kinds/compileOption';
export interface CompileContext {
    meta: PluginMeta;
    options: Partial<PluginCompileOptions>;
}
