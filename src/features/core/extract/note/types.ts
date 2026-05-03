export interface NoteSchema {
  name: string;
  kind: string;
}

export interface SummarizedNote {
  key: string;
  kinds: string[];
  values: string[];
}

export interface SummarizedNoteValue {
  value: string;
  dataId: number;
  soruce: string;
}

export interface SummarizedNote2 {
  key: string;
  kinds: string[];
  values: SummarizedNoteValue[];
}

export interface NoteSchema {
  key: string;
  kinds: string;
  source: string;
}

export interface OtherFilesSet {
  movies: ReadonlySet<string>;
}
