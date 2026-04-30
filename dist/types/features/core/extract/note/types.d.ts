export interface NoteSchema {
    name: string;
    kind: string;
}
export interface SummarizedNote {
    key: string;
    kinds: string[];
    values: string[];
}
export interface NoteSchema {
    key: string;
    kinds: string;
    source: string;
}
export interface OtherFilesSet {
    movies: ReadonlySet<string>;
}
