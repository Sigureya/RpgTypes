import { PluginParamsRecord, PluginSchemaArray } from '@sigureya/rmmz-plugin-schema';
export interface ErrorMessage {
    fileNotFound: string;
    parseError: string;
}
export interface ResultOfReadPluginInfos {
    message: string;
    plugins: PluginParamsRecord[];
    success: boolean;
    filename: string;
}
export interface PluginReadOptions {
    locale: string;
}
export interface ParsePluginResult {
    success: boolean;
    message: string;
    data: PluginSchemaArray;
}
