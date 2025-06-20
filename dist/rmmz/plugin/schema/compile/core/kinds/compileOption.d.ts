export interface PluginMeta {
    author: string;
    moduleName: string;
}
export interface PluginCompileOptions {
    kindData: boolean;
}
export interface RmmzPluiginInput {
    meta: PluginMeta;
    structs: Record<string, object>;
}
