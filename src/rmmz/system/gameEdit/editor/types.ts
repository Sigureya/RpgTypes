import type { DefineLable } from "@RpgTypes/templates";

export interface EditorSettings {
  messageWidth1: number;
  messageWidth2: number;
  jsonFormatLevel: number;
}

export type EditorSettingLables = DefineLable<EditorSettings>;
