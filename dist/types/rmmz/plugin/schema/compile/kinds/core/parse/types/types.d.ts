import { KeywordEnum } from './keyword/types';
import { PluginDependencies } from './pluginDependencies';
import { PluginMeta } from './pluginMeta';
import { OptionItem } from './selectOption';
export interface PluginParamTokens {
    name: string;
    attr: PluginTokensRecord;
    options?: OptionItem[];
}
export type PluginTokensRecord = {
    [key in KeywordEnum]?: string;
};
export interface PluginCommandTokens {
    command: string;
    text?: string;
    desc?: string;
    args: PluginParamTokens[];
}
export interface StructParseState {
    name: string;
    params: PluginParamTokens[];
}
export interface PluginTokens {
    params: PluginParamTokens[];
    commands: PluginCommandTokens[];
    structs: StructParseState[];
}
export interface ParsedPlugin extends PluginTokens {
    meta: Partial<PluginMeta>;
    params: PluginParamTokens[];
    commands: PluginCommandTokens[];
    helpLines: string[];
    dependencies?: PluginDependencies;
    structs: StructParseState[];
}
