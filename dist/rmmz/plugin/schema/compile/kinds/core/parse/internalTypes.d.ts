import { PluginDependencies } from './dependencies';
import { KeywordEnum } from './keyword/types';
import { OptionItem } from './selectOption';
import { PluginParamTokens, PluginCommandTokens, PluginMeta } from './types';
export interface OptionsState {
    items: OptionItem[];
    currentOption?: string;
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
