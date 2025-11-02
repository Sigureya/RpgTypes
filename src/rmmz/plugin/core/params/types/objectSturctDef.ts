import type { PluginStructEx } from "./objectStruct";
import type { ParamBase } from "./paramBase";
import type { StructParam } from "./paramUnion";

export interface StructArrayDefParam<T extends object>
  extends PluginStructEx<T>,
    ParamBase {
  kind: "struct_def[]";
  default: object[];
  struct: string;
  params: {
    [K in keyof T as string]: StructParam;
  };
}

// 構造体アノテーション
export interface StructDefParam<T extends object>
  extends PluginStructEx<T>,
    ParamBase {
  kind: "struct_def";
  struct: string;
  params: {
    [K in keyof T as string]: StructParam;
  };
}
