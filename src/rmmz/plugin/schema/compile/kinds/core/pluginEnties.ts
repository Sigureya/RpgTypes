import type { PrimitiveParams } from "./pluginSchemaType";

export type PluginStructType<T extends object> = {
  struct: string;
  params: PrimitiveParams<T>;
};
