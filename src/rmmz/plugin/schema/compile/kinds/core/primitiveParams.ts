import type {
  DataKind_RpgUnion,
  DataKind_SystemUnion,
} from "./rpgData/rpgDataTypesNames";

export type StructParamPrimitive =
  | KindOfBoolean
  | KindOfNumber
  | KindOfNumberArray
  | KindOfRpgDataId
  | KindOfRpgDataIdArray
  | KindOfCombo
  | KindOfSelect
  | KindOfString
  | KindOfStringArray
  | KindOfSystemDataId
  | KindOfFile
  | KindOfFileArray
  | KindOfStructRef;

export type PrimitiveStruct<K extends string = string> = Record<
  K,
  StructParamPrimitive
>;

export interface KindBase {
  kind: string;
  desc?: string;
  text?: string;
  parent?: string;
}

export interface KindOfRpgDataId extends KindBase {
  kind: DataKind_RpgUnion;
  default: number;
}
export interface KindOfRpgDataIdArray extends KindBase {
  kind: `${DataKind_RpgUnion}[]`;
  default: number[];
}

export interface KindOfBoolean extends KindBase {
  kind: "boolean";
  default: boolean;
  on?: string;
  off?: string;
}

export interface KindOfSelect extends KindBase {
  kind: "select";
  options: { value: string; option: string }[];
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

export interface KindOfCombo extends KindBase {
  kind: "combo";
  options: string[];
  default: string;
}

export interface KindOfNumber extends KindBase {
  kind: "number";
  default: number;
  digit?: number;
  min?: number;
  max?: number;
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

export interface KindOfSystemDataId extends KindBase {
  kind: DataKind_SystemUnion;
  default: number;
}

export interface KindOfFile extends KindBase {
  kind: "file";
  default: string;
  dir: string;
}
export interface KindOfFileArray extends KindBase {
  kind: "file[]";
  default: string[];
  dir: string;
}

export interface KidnOfStructBase extends KindBase {
  struct: string;
}

export interface KindOfStructRef extends KidnOfStructBase {
  kind: "struct";
  struct: string;
}

export interface KindOfStructArrayRef extends KidnOfStructBase {
  kind: "struct[]";
  struct: string;
}
