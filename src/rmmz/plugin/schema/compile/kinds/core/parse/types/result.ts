import type { PluginCommandTokens } from "./pluginCommand";
import type { ParamToken } from "./token";

export interface ParsingResult {
  commands: PluginCommandTokens[];
  meta: PluginMeta;
  params: ParamToken[];
}

export interface PluginMetaXX {
  target: string;
  pluginDesc: string;
  author: string;
}

export interface PluginMeta {
  target?: string;
  pluginDesc?: string;
  author?: string;
}
