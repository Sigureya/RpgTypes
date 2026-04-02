export interface NoteSchema {
  name: string;
  kind: string;
}

export interface AudioFilesSet {
  bgm: ReadonlySet<string>;
  bgs: ReadonlySet<string>;
  me: ReadonlySet<string>;
  se: ReadonlySet<string>;
}

export interface SummarizedNote {
  key: string;
  kinds: string[];
  values: string[];
}

export interface ImageFilesSet {
  character: ReadonlySet<string>;
  faceset: ReadonlySet<string>;
  battler: ReadonlySet<string>;
  svBattler: ReadonlySet<string>;
  enemy: ReadonlySet<string>;
  picuture: ReadonlySet<string>;
  tileset: ReadonlySet<string>;
}
