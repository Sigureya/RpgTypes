export interface SummarizedNote<T = string> {
  key: string;
  kinds: string[];
  values: T[];
}

export interface SummarizedNoteValue {
  value: string;
  id: number;
  soruce: string;
  name: string;
}

export type SummarizedNote2 = SummarizedNote<SummarizedNoteValue>;
