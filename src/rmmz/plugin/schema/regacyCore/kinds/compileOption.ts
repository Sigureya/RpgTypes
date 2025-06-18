export interface PluginCompileOption {
  author: string;
  pluginName: string;
}

export interface RmmzPluigin {
  compileOption: PluginCompileOption;
  structs: Record<string, object>;
}
