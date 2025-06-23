import type { KindBase } from "./kindBase/kindBase";
import type {
  DataKind_RpgUnion,
  DataKind_SystemUnion,
} from "./rpgData/rpgDataTypesNames";

export type StructParamPrimitive =
  | BooleanParam
  | NumberParam
  | NumberArrayParam
  | RpgDataIdParam
  | RpgDataIdArrayParam
  | ComboParam
  | SelectParam
  | StringParam
  | KindOfStringArray
  | SystemDataIdParam
  | FileParam
  | FileArrayParam
  | StructRefParam
  | StructArrayRefParam;

export type PrimitiveParams<K extends string = string> = Record<
  K,
  StructParamPrimitive
>;

export interface RpgDataIdParam extends KindBase {
  kind: DataKind_RpgUnion;
  default: number;
}
export interface RpgDataIdArrayParam extends KindBase {
  kind: `${DataKind_RpgUnion}[]`;
  default: number[];
}

export interface BooleanParam extends KindBase {
  kind: "boolean";
  default: boolean;
  on?: string | null;
  off?: string | null;
}

export interface SelectParam extends KindBase {
  kind: "select";
  options: { value: string; option: string }[];
  default: string;
}

export interface StringParam extends KindBase {
  kind: "string" | "multiline_string";
  default: string;
}
export interface KindOfStringArray extends KindBase {
  kind: "string[]" | "multiline_string[]";
  default: string[];
}

export interface ComboParam extends KindBase {
  kind: "combo";
  options: string[];
  default: string;
}

export interface NumberParam extends KindBase {
  kind: "number";
  default: number;
  digit?: number | null;
  min?: number | null;
  max?: number | null;
}
export interface NumberArrayParam extends KindBase {
  kind: "number[]";
  default: number[];
  digit?: number | null;
  min?: number | null;
  max?: number | null;
}

export interface GenericIdParam extends KindBase {
  kind: "id";
  default: number;
}

export interface SystemDataIdParam extends KindBase {
  kind: DataKind_SystemUnion;
  default: number;
}

export interface FileParam extends KindBase {
  kind: "file";
  default: string;
  dir: string;
}
export interface FileArrayParam extends KindBase {
  kind: "file[]";
  default: string[];
  dir: string;
}

export interface KindOfStructBase extends KindBase {
  struct: string;
}

// 型を参照するだけのパラメータ。別の箇所に型定義があることを前提としている。
export interface StructRefParam extends KindOfStructBase {
  kind: "struct";
  struct: string;
  default?: object;
}

export interface StructArrayRefParam extends KindOfStructBase {
  kind: "struct[]";
  struct: string;
  default?: object[];
}
