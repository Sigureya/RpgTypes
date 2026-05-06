export interface PluginMeta {
    author: string;
    pluginName: string;
    noteSchema: NoteSchema2[];
}
export interface NoteSchema2 {
    valueType: string;
    key: string;
    script: boolean;
}
