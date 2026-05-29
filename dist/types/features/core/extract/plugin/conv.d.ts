import { PluginCommandParameter } from '../../../../rmmz';
import { PluginExtractedValue, PluginParamExtractionOutput, PluginStringValue } from '@sigureya/rmmz-plugin-schema';
import { ExtractedPluginParamItem } from './types/types';
export declare const convertPluginParams: <T>(list: PluginParamExtractionOutput, fn: (text: string) => T) => ExtractedPluginParamItem<T>[];
export declare const convertPluginParamItem: <T>(pluginName: string, value: PluginStringValue, fn: (text: string) => T) => ExtractedPluginParamItem<T>;
export declare const buildPluginCommandArgInfo: (ss: {
    pluginName: string;
    commandName: string;
}, gg: PluginExtractedValue) => PluginCommandParameter<string>;
