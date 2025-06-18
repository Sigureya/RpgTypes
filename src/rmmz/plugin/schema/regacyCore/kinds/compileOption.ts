export interface PluginTitles {
  author: string;
  moduleName: string;
}

export interface RmmzPluigin {
  compileOption: PluginTitles;
  structs: Record<string, object>;
}
