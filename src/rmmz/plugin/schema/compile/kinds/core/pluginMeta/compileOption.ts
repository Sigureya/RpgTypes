export interface PluginMeta {
  author: string;
  moduleName: string;
}

export interface PluginCompileOptions {
  // x-rpg-paramを付与する
  kindData: boolean;
}
export interface CompileContext {
  meta: PluginMeta;

  options: Partial<PluginCompileOptions>;
}
