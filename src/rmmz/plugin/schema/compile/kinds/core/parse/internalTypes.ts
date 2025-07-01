import type { PluginDependencies } from "./dependencies";
import type { KeywordEnum } from "./keyword/types";
import type { OptionItem } from "./selectOption";
import type { PluginParamTokens, PluginCommandTokens } from "./types";

export interface OptionsState {
  items: OptionItem[];
  currentOption?: string;
}

export interface PluginMeta {
  author: string;
  plugindesc: string;
  url: string;
}

export interface ParseState {
  meta: Partial<PluginMeta>;
  helpLines: string[];
  params: PluginParamTokens[];
  commands: PluginCommandTokens[];
  currentParam: PluginParamTokens | null;
  currentCommand: PluginCommandTokens | null;
  currentContext: KeywordEnum | null;
  currentOption: OptionsState | null;
  dependencies: PluginDependencies;
}
