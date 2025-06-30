import type { KeywordEnum } from "./keyword/types";
import type { OptionsState } from "./optionV2";
import type { OptionItem } from "./selectOption";

export interface PluginParamTokens {
  name: string;
  attr: PluginTokens;
  options?: OptionItem[];
}

export type PluginTokens = { [key in KeywordEnum]?: string };

export interface PluginCommand {
  command: string;
  text?: string;
  desc?: string;
  args: PluginParamTokens[];
}

export interface ParsedPlugin {
  meta: Record<string, string>;
  params: PluginParamTokens[];
  commands: PluginCommand[];
  helpLines: string[];
}

export interface ParseState {
  helpLines: string[];
  params: PluginParamTokens[];
  commands: PluginCommand[];
  currentParam: PluginParamTokens | null;
  currentCommand: PluginCommand | null;
  currentContext: KeywordEnum | null;
  context: Context;
}
interface Context {
  option?: OptionsState;
}
