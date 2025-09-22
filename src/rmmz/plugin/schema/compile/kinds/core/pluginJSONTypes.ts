import type { PluginDependencies } from "./parse/dependencies";
import type { PrimitiveParam } from "./primitiveParams";

export interface PluginJSON {
  target: string;
  meta: Record<string, string>;
  commands: Record<string, PluginCommandBody>;
  params: Record<string, PrimitiveParam>;
  dependencies?: PluginDependencies;
  structs: Record<string, PluginStructBody>;
}

export interface PluginCommandBody<Param = PrimitiveParam> {
  desc?: string;
  text?: string;
  args: {
    [key: string]: Param;
  };
}

export interface PluginStructBody<Param = PrimitiveParam> {
  params: {
    [key: string]: Param;
  };
}
