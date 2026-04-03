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

export interface XX {
  key: string;
  value: string;
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

export interface ImageFilesSet {
  characters: ReadonlySet<string>;
  faces: ReadonlySet<string>;
  svEnemy: ReadonlySet<string>;
  svActors: ReadonlySet<string>;
  enemies: ReadonlySet<string>;
  picutures: ReadonlySet<string>;
  tilesets: ReadonlySet<string>;
}

export interface OtherFilesSet {
  movies: ReadonlySet<string>;
}
