import type { KeywordEnum } from "./keyword/types";
import type { PluginDependencies } from "./pluginDependencies";
import type { PluginMeta } from "./pluginMeta";
import type { OptionItem } from "./selectOption";

export interface PluginParamTokens {
  name: string;
  attr: PluginTokens;
  options?: OptionItem[];
}

export type PluginTokens = { [key in KeywordEnum]?: string };

export interface PluginCommandTokens {
  command: string;
  text?: string;
  desc?: string;
  args: PluginParamTokens[];
}

export interface ParsedPlugin {
  meta: Partial<PluginMeta>;
  params: PluginParamTokens[];
  commands: PluginCommandTokens[];
  helpLines: string[];
  dependencies?: PluginDependencies;
  structs: StructParseState[];
}

export interface StructParseState {
  name: string;
  params: PluginParamTokens[];
}
