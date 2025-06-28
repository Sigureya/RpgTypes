import type { ParsingContext } from "./token";

export interface ParsingResult {
  commands: ParsingContext[];
  meta: PluginMeta;
  params: ParsingContext[];
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
