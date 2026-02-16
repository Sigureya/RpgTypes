export interface ReadNoteOption {
    prefix: string;
    suffix: string;
}
export interface NoteReadResult {
    key: string;
    value: string;
}
export interface NormalizedNote {
    note: string;
    items: NoteReadResult[];
}
export interface TextReplaceHandlers {
    replaceText: (text: string) => string | undefined;
}
export interface NoteReplaceHandlers extends TextReplaceHandlers {
    replaceText: (text: string) => string | undefined;
    isReplaceTargetNote: (item: NoteReadResult) => boolean;
}
