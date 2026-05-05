export interface ExtractedTextItemBase<UUID> {
    filename: string;
    id: number;
    uuid: UUID;
    speaker?: string;
    baseText: string;
    otherData?: string[];
    kind: string;
    dataKey: string;
}
export interface ExtractedTextItemG<UUID, Key extends string = string, Other extends string[] = string[]> extends ExtractedTextItemBase<UUID> {
    filename: string;
    id: number;
    uuid: UUID;
    speaker?: string;
    baseText: string;
    otherData?: Other;
    kind: string;
    dataKey: Key;
}
export type ExtractedTextBundle<T, UUID = string> = {
    main: ExtractedTextItemG<UUID, Extract<keyof T, string>>[];
    note: ExtractedNoteItem<UUID>[];
};
export type ExtractedNoteItem<UUID, Other extends string[] = [string]> = ExtractedTextItemG<UUID, "note", Other> & {
    otherData: Other;
};
export type ExtractedPropertyItem<UUID, T extends object> = ExtractedTextItemG<UUID, Extract<keyof T, string>>;
