import type { PluginDependencies } from "./parse/types/pluginDependencies";
import type { PrimitiveParam } from "./primitiveParams";
import type { PluginStructBodyTemplate } from "./struct/types";

export interface PluginJSON {
  target: string;
  meta: Record<string, string>;
  commands: Record<string, PluginCommandBody>;
  params: Record<string, PrimitiveParam>;
  dependencies?: PluginDependencies;
  structs: Record<string, PluginStructBodyTemplate<PrimitiveParam>>;
}

export interface PluginCommandBody<Param = PrimitiveParam> {
  desc?: string;
  text?: string;
  args: {
    [key: string]: Param;
  };
}

export type PluginStructBody<T = PrimitiveParam> = PluginStructBodyTemplate<T>;
