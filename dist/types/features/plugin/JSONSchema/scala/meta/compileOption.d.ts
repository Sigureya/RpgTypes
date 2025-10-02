export interface PluginMeta {
    author: string;
    moduleName: string;
}
export interface PluginCompileOptions {
    kindData: boolean;
}
export interface CompileContext {
    meta: PluginMeta;
    options: Partial<PluginCompileOptions>;
}
