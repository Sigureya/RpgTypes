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
