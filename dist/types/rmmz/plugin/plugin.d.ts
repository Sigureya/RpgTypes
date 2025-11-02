import { PluginSchemaArray } from './core';
import { PluginJSON } from './core/pluginJSONTypes';
export declare const pluginSourceToJSON: (text: string) => PluginJSON;
export declare const pluginSourceToArraySchema: (text: string) => PluginSchemaArray;
