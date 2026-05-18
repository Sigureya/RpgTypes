import { ExtractedTextItem } from '../../../../../../libs';
export type ExtractedTextBundle<T, UUID = string> = {
    main: ExtractedTextItem<UUID, Extract<keyof T, string>>[];
    note: ExtractedNoteItem<UUID>[];
};
export type ExtractedNoteItem<UUID, Other extends string[] = [string]> = ExtractedTextItem<UUID, "note", Other> & {
    otherData: Other;
};
export type ExtractedPropertyItem<UUID, T extends object> = ExtractedTextItem<UUID, Extract<keyof T, string>>;
