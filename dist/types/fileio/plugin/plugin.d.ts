import { DeepJSONParserHandlers, PluginSchema, PluginParamsRecord, ParsedPlugin } from '@sigureya/rmmz-plugin-schema';
import { ParsePluginResult, PluginReadOptions } from './types';
interface ErrorMessage {
    fileNotFound: string;
    schemaParseError: string;
}
interface ResultOfReadPlugin {
    message: string;
    success: boolean;
    plugin: PluginSchema;
}
export declare const parsePluginEx2: (src: string, info: PluginParamsRecord, options: PluginReadOptions, message: ErrorMessage, handlers: DeepJSONParserHandlers) => ResultOfReadPlugin;
export declare const tryXXX: (parsed: ParsedPlugin, message: ErrorMessage, handlers: DeepJSONParserHandlers) => ParsePluginResult;
export {};
