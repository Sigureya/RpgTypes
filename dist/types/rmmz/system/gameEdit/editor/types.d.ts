import { DefineLable } from 'src/libs/templates';
export interface EditorSettings {
    messageWidth1: number;
    messageWidth2: number;
    jsonFormatLevel: number;
}
export type EditorSettingLables = DefineLable<EditorSettings>;
