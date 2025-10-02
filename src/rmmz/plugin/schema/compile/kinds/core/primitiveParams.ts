import type { ParamBase } from "./paramBase";
import type {
  DataKind_RpgUnion,
  DataKind_SystemUnion,
} from "./rpgData/rpgDataTypesNames";

export type PrimitiveStringParam =
  | StringParam
  | AnyStringParam
  | ComboParam
  | SelectParam;

export type PrimitiveParam =
  | BooleanParam
  | NumberParam
  | NumberArrayParam
  | RpgDataIdParam
  | RpgDataIdArrayParam
  | ComboParam
  | SelectParam
  | StringParam
  | StringArrayParam
  | SystemDataIdParam
  | SystemDataIdArrayParam
  | FileParam
  | FileArrayParam
  | StructRefParam
  | StructArrayRefParam
  | AnyStringParam;

export type ParamKinds = Exclude<
  PrimitiveParam,
  ArrayParam | StructArrayRefParam
>["kind"];

export type ScalaParam = Exclude<
  PrimitiveParam,
  ArrayParam | StructArrayRefParam | KindOfStructBase
>;

export interface ArrayParam {
  kind: `${string}[]`;
  default: unknown[];
}

export interface RpgDataIdParam extends ParamBase {
  kind: DataKind_RpgUnion;
  default: number;
}

export interface RpgVariableParam extends ParamBase {
  kind: `variable`;
  default: number;
}

export interface RpgDataIdArrayParam extends ParamBase {
  kind: `${DataKind_RpgUnion}[]`;
  default: number[];
}

export interface BooleanParam extends ParamBase {
  kind: "boolean";
  default: boolean;
  on?: string | null;
  off?: string | null;
}

export interface SelectParam extends ParamBase {
  kind: "select";
  options: { value: string; option: string }[];
  default: string;
}

export interface StringParam extends ParamBase {
  kind: "string" | "multiline_string";
  default: string;
}
export interface StringArrayParam extends ParamBase {
  kind: "string[]" | "multiline_string[]";
  default: string[];
}

export interface ComboParam extends ParamBase {
  kind: "combo";
  options: string[];
  default: string;
}

export interface NumberParam extends ParamBase {
  kind: "number";
  default: number;
  decimals?: number | null;
  min?: number | null;
  max?: number | null;
}
export interface NumberArrayParam extends ParamBase {
  kind: "number[]";
  default: number[];
  decimals?: number | null;
  min?: number | null;
  max?: number | null;
}

export interface GenericIdParam extends ParamBase {
  kind: "id";
  default: number;
}

export interface SystemDataIdParam extends ParamBase {
  kind: DataKind_SystemUnion;
  default: number;
}

export interface SystemDataIdArrayParam extends ParamBase {
  kind: `${DataKind_SystemUnion}[]`;
  default: number[];
}

export interface FileParam extends ParamBase {
  kind: "file";
  default: string;
  dir: string;
}

export interface FileArrayParam extends ParamBase {
  kind: "file[]";
  default: string[];
  dir: string;
}

export interface AnyStringParam extends ParamBase {
  kind: "any";
  default: string;
}

export interface KindOfStructBase extends ParamBase {
  struct: string;
}

/**
 * - 型を参照するだけのパラメータ。別の箇所に型定義があることを前提としている。
 */
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
