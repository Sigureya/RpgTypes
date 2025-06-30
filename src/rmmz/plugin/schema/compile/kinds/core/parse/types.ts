import type { PluginDependencies } from "./dependencies";
import type { KeywordEnum } from "./keyword/types";
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
  meta: Record<string, string>;
  params: PluginParamTokens[];
  commands: PluginCommandTokens[];
  helpLines: string[];
  dependencies?: PluginDependencies;
}
