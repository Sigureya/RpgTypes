export interface PluginTitles {
  author: string;
  moduleName: string;
}

export interface PluginCompileOptions {
  // x-rpg-paramを付与する
  kindData: boolean;
}

export interface RmmzPluiginInput {
  xxx: PluginTitles;
  structs: Record<string, object>;
}
