import type { ParamBase } from "./paramBase";
import type { PrimitiveParam } from "./primitiveParams";

// 各パラメータ型のユニオン
export type StructParam =
  | PrimitiveParam
  | StructDefParam<object> // ネスト構造体対応
  | StructArrayDefParam<object>;

export interface StructArrayDefParam<T extends object>
  extends PluginStructEx<T>,
    ParamBase {
  kind: "struct_def[]";
  default: object[];
  struct: string;
  params: {
    [K in keyof T]: StructParam;
  };
}

// 構造体アノテーション
export interface StructDefParam<T extends object>
  extends PluginStructEx<T>,
    ParamBase {
  kind: "struct_def";
  struct: string;
  params: {
    [K in keyof T]: StructParam;
  };
}

// 構造体本体
export interface PluginStructEx<T extends object> {
  struct: string;
  params: {
    [K in keyof T]: StructParam;
  };
}

export interface PluginCommand<T extends object> {
  command: string;
  desc?: string;
  text?: string;
  args: {
    [K in keyof T]: StructParam;
  };
}
