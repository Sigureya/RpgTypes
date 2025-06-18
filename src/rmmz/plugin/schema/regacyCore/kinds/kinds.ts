export interface KindBase {
  kind: string;
  desc?: string;
  text?: string;
}

export interface KindOfBoolean extends KindBase {
  kind: "boolean";
  default: boolean;
  on?: string;
  off?: string;
}

export interface KindOfSelect extends KindBase {
  kind: "select";
  options: { value: string; text: string }[];
  default: string;
}

export interface KindOfString extends KindBase {
  kind: "string" | "multiline_string";
  default: string;
}
export interface KindOfStringArray extends KindBase {
  kind: "string[]" | "multiline_string[]";
  default: string[];
}

export interface KindOfNumber extends KindBase {
  kind: "number";
  default: number;
  digit?: number;
}
export interface KindOfNumberArray extends KindBase {
  kind: "number[]";
  default: number[];
  digit?: number;
}
export interface KindOfId extends KindBase {
  kind: "id";
  default: number;
}

export type DataKind_Rpg =
  | "actor"
  | "weapon"
  | "armor"
  | "skill"
  | "item"
  | "enemy"
  | "state";

export interface KindOfRpgDataId extends KindBase {
  kind: DataKind_Rpg;
  default: number;
}

export interface KindOfSystemDataId extends KindBase {
  kind: "switch" | "variable";
  default: number;
}

export interface KindOfFile extends KindBase {
  kind: "file" | "file[]";
  default: string;
  dir: string;
}
