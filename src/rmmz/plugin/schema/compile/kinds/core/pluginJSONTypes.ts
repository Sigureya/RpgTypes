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

export interface PluginCommandBody {
  desc?: string;
  text?: string;
  args: {
    [key: string]: PrimitiveParam;
  };
}

export interface PluginStructBody {
  params: {
    [key: string]: PrimitiveParam;
  };
}
