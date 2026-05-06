export interface PluginMeta {
  author: string;
  pluginName: string;
  noteSchema: NoteSchema2[];
}

export interface NoteSchema2 {
  valueType: NoteValueType;
  key: string;
  script: boolean;
}

export type NoteValueType =
  | "number"
  | "boolean"
  | "not text"
  | "text"
  | "string";
