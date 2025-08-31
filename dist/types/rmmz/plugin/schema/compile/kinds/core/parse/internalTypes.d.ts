import { PluginDependencies } from './dependencies';
import { KeywordEnum } from './keyword/types';
import { PluginParamTokens, PluginCommandTokens, PluginMeta } from './types';
import { OptionItem } from './types/selectOption';
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
