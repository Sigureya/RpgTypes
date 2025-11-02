import type { PrimitiveParam } from "./params/types/paramUnion";
import type { PluginDependencies } from "./parse";
import type { PluginStructBodyTemplate } from "./struct/types";

export interface PluginJSON {
  target: string;
  meta: Record<string, string>;
  commands: Record<string, PluginCommandBody>;
  params: Record<string, PrimitiveParam>;
  dependencies?: PluginDependencies;
  structs: Record<string, PluginStructBodyTemplate<PrimitiveParam>>;
}

/**
 * @deprecated
 */
export interface PluginCommandBody<Param = PrimitiveParam> {
  desc?: string;
  text?: string;
  args: {
    [key: string]: Param;
  };
}

/**
 * @deprecated
 */
export type PluginStructBody<T = PrimitiveParam> = PluginStructBodyTemplate<T>;
