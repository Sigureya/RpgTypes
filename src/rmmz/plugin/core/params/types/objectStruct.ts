import type { PrimitiveParam, StructParam } from "./paramUnion";
import type { PluginSchemaType } from "./pluginSchemaType";

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

export type ToObjectParams<T extends PrimitiveParam, K extends string> = {
  [key in K]?: T;
};

export type PrimitiveStructParams<T extends object> = {
  [K in Extract<keyof T, string>]: PluginSchemaType<T[K]>;
};
