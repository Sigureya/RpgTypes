import { compilePluginToObject } from "./core/compilePlugin";
import type { PluginJSON } from "./core/pluginJSONTypes";

export const pluginSourceToJSON = (text: string): PluginJSON => {
  return compilePluginToObject(text);
};
