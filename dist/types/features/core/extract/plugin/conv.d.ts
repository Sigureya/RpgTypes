import { PluginCommandParameter } from '../../../../rmmz';
import { PluginExtractedValue, PluginParamExtractionOutput, PluginStringValue } from '@sigureya/rmmz-plugin-schema';
import { ExtractedPluginParamItem } from './types/types';
export declare const convertPluginParams: <T>(list: PluginParamExtractionOutput, hashFn: (text: string) => T) => ExtractedPluginParamItem<T>[];
export declare const isTextString: (str: string) => boolean;
export declare const isTextParam: (param: PluginExtractedValue) => param is PluginStringValue;
export declare const buildPluginCommandArgInfo: (ss: {
    pluginName: string;
    commandName: string;
}, gg: PluginExtractedValue) => PluginCommandParameter<string>;
