import type { PrimitiveParam, StructParam } from "./paramUnion";
import type { PrimitiveStructParams } from "./pluginSchemaType";

// 構造体本体
export interface PluginStructEx<T extends object> {
  struct: string;
  params: {
    [K in keyof T as string]: StructParam;
  };
}

/**
 * @deprecated
 */
export interface PrimitiveStructBase {
  struct: string;
  params: Record<string, PrimitiveParam>;
}

export interface PluginStructType<T extends object> {
  struct: string;
  params: PrimitiveStructParams<T>;
}
