import { PluginDependencies } from './dependencies';
import { KeywordEnum } from './keyword/types';
import { OptionItem } from './types/selectOption';
export interface PluginParamTokens {
    name: string;
    attr: PluginTokens;
    options?: OptionItem[];
}
export type PluginTokens = {
    [key in KeywordEnum]?: string;
};
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
export interface PluginMeta {
    author: string;
    plugindesc: string;
    url: string;
}
export interface StructParseState {
    name: string;
    params: PluginParamTokens[];
}
