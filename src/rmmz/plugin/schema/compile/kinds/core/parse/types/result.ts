import type { PluginCommandTokens } from "./token";

export interface ParsingResult {
  commands: PluginCommandTokens[];
  meta: PluginMeta;
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
