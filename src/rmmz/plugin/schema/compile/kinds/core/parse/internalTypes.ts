import type { PluginDependencies } from "../pluginEntryTypes";
import type { KeywordEnum } from "./keyword/types";
import type { OptionItem } from "./selectOption";
import type { PluginParamTokens, PluginCommandTokens } from "./types";

export interface OptionsState {
  items: OptionItem[];
  currentOption?: string;
}

export interface ParseState {
  helpLines: string[];
  params: PluginParamTokens[];
  commands: PluginCommandTokens[];
  currentParam: PluginParamTokens | null;
  currentCommand: PluginCommandTokens | null;
  currentContext: KeywordEnum | null;
  currentOption: OptionsState | null;
  dependencies: PluginDependencies;
}
