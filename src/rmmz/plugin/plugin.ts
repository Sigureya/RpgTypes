import type { PluginSchemaArray } from "./core";
import { compilePluginToObject } from "./core/compilePlugin";
import { compilePluginAsArraySchema } from "./core/compilePluginAsArraySchema";
import { parsePlugin } from "./core/parse/parse";
import type { PluginJSON } from "./core/pluginJSONTypes";

export const pluginSourceToJSON = (text: string): PluginJSON => {
  return compilePluginToObject(text);
};

export const pluginSourceToArraySchema = (text: string): PluginSchemaArray => {
  const tokens = parsePlugin(text);
  return compilePluginAsArraySchema(tokens);
};
