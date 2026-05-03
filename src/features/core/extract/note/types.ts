export interface NoteSchema {
  name: string;
  kind: string;
}

export interface SummarizedNote<T = string> {
  key: string;
  kinds: string[];
  values: T[];
}

export interface SummarizedNoteValue {
  value: string;
  dataId: number;
  soruce: string;
}

export type SummarizedNote2 = SummarizedNote<SummarizedNoteValue>;

export interface NoteSchema {
  key: string;
  kinds: string;
  source: string;
}

export interface OtherFilesSet {
  movies: ReadonlySet<string>;
}
